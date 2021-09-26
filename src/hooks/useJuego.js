import {useState, useEffect} from "react";
import {useQuery} from "react-query";
import {useAnimacionScroll} from "../animations/animacionScroll";
import {useAnimacionInterfaz} from "../animations/animacionInterfaz";
import {useAnimacionVisitas} from "../animations/animacionVisitas";
import {useAnimacionEstado} from "@animations/animacionEstado";
import {navigate} from "gatsby";
import {barajarArray} from "@functions/barajarArray";

export const useJuego = (codigoPais) => {
	const [puntos, setPuntos] = useState(0);
	const [nextPageToken, setNextPageToken] = useState("");
	const [estadoJuego, setEstadoJuego] = useState("versus");
	const [videos, setVideos] = useState([]);

	const videosEnJuego = videos.slice(puntos, puntos + 3);
	const [videoAnterior, videoAComparar] = videosEnJuego;

	const {isLoading, isError, status, data, isPreviousData, refetch} = useQuery(
		"paginaPrincipal",
		async () => {
			return await fetch(
				`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&pageToken=${nextPageToken}&regionCode=${codigoPais}&maxResults=25&part=snippet,contentDetails,statistics&key=${process.env.GATSBY_API_YOUTUBE_KEY}`
			).then((res) => res.json());
		},
		{cacheTime: 0, keepPreviousData: true, enabled: false}
	); //Se coloca keepPreviousData a true para que isLoading no cambie

	const {animacionScroll, apiAnimacionScroll} = useAnimacionScroll();
	const {animacionInterfaz, apiAnimacionInterfaz} = useAnimacionInterfaz();
	const {animacionVisitas, apiAnimacionVisitas} = useAnimacionVisitas();
	const {animacionEstado, apiAnimacionEstado} = useAnimacionEstado();

	useEffect(() => {
		refetch();
	}, []);

	useEffect(() => {
		//Añadir data de query a videos y preparar el token para la siguiente página
		if (!isLoading && !isError && !!data & !isPreviousData) {
			const videosNuevoBarajados = barajarArray(data.items);
			setVideos([...videos, ...videosNuevoBarajados]);
			setNextPageToken(data.nextPageToken);
		}
	}, [isLoading, data]);

	useEffect(() => {
		//Como la query trae 25 videos, traer más videos cada 20 puntos
		if (puntos !== 0 && puntos % 20 === 0) {
			refetch();
		}
	}, [puntos]);

	const manejarError = () => {
		apiAnimacionVisitas.start({
			to: {number: parseInt(videoAComparar.statistics.viewCount)},
			delay: 300,
			onRest: () => {
				apiAnimacionEstado.start({
					to: async (next) => {
						await next({opacity: 0});
						setEstadoJuego("wrong");
						await next({opacity: 1});
					},
					onRest: () => {
						setTimeout(() => {
							navigate("/", {state: {puntos: puntos, codigoPais: codigoPais}});
						}, 200);
					},
				});
			},
		});
	};

	const manejarAcierto = () => {
		apiAnimacionVisitas.start({
			to: {number: parseInt(videoAComparar.statistics.viewCount)},
			onRest: () => {
				apiAnimacionEstado.start({
					to: async (next) => {
						await next({opacity: 0});
						setEstadoJuego("correct");
						await next({opacity: 1});
					},
					onRest: () => {
						apiAnimacionEstado.start({
							to: {opacity: 0},
							delay: 500,
						});
						apiAnimacionInterfaz.start({
							to: {opacity: 0},
							delay: 500,
							onRest: () => {
								apiAnimacionScroll.start({
									from: {x: 0, y: 0},
									to: {x: 50, y: 50},
									onRest: () => {
										apiAnimacionVisitas.set({number: 0});
										setPuntos(puntos + 1);
										setEstadoJuego("versus");
										apiAnimacionScroll.set({x: 0, y: 0});
										apiAnimacionInterfaz.start({
											to: {opacity: 1},
										});
									},
								});
							},
						});
					},
				});
			},
		});
	};
	// Sé que es callback hell, pero no sé como encadenar animaciones utilizando la api imperativa

	const manejarRespuesta = (respuesta) => {
		const esMayor = parseInt(videoAComparar.statistics.viewCount) > parseInt(videoAnterior.statistics.viewCount);

		switch (true) {
			case (respuesta === "higher" && esMayor) || (respuesta === "lower" && !esMayor):
				manejarAcierto();

				break;
			case (respuesta === "higher" && !esMayor) || (respuesta === "lower" && esMayor):
				manejarError();

				break;
			default:
				console.error("This isn't supossed to happen :/");
				break;
		}
	};

	return {
		videos,
		videosEnJuego,
		isLoading,
		puntos,
		setEstadoJuego,
		estadoJuego,
		manejarRespuesta,
		animacionScroll,
		animacionInterfaz,
		animacionVisitas,
		animacionEstado,
	};
};
