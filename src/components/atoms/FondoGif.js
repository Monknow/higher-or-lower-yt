import * as React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";
import {useQuery} from "react-query";
import {getRandomColor} from "@functions/getRandomColor";
import {tiposDeGif} from "@data/tiposDeGif";
import {obtenerGifEnBaseAPuntos} from "@functions/obtenerGifEnBaseAPuntos";
import {Titulo} from "@components/atoms/Titulo";

const FondoGifEstilizado = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: auto;
	grid-template-areas:
		"top"
		"header"
		"centro"
		"mid"
		".";

	box-sizing: border-box;
	padding: clamp(20px, 10vw, 40px);
	padding-bottom: 40px;

	height: 100vh;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;

		width: 100%;
		height: 100%;

		background-color: #${({colorFondo}) => colorFondo};
		background-image: url("${({imagenUrl, isLoading}) => (isLoading ? "none" : imagenUrl)}");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: brightness(0.3);
	}
`;

const AtribucionGif = styled(Titulo)`
	position: absolute;
	bottom: clamp(5px, 4vw, 20px);
	left: clamp(5px, 4vw, 20px);
	z-index: 99;

	font-size: clamp(12px, 4vw, 16px);

	a {
		text-decoration: none;
		color: #fff;

		font-size: "Open Sans Semibold";
	}
`;

export const FondoGif = ({children, puntos, queryGif, queryKey, gifFile}) => {
	const [colorFondo, setColorFondo] = useState("000");
	const [gifUrl, setGifUrl] = useState(null);
	const [queryOffset, setQueryOffset] = useState(0);

	const tipoDeGif = queryGif ? queryGif : obtenerGifEnBaseAPuntos(tiposDeGif, puntos);

	const {isLoading, data, refetch} = useQuery(
		queryKey,
		async () => {
			return await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GATSBY_API_GIPHY_KEY}&q=${tipoDeGif}&limit=1&offset=${queryOffset}`
			).then((res) => res.json());
		},
		{cacheTime: 0, enabled: false}
	);

	useEffect(() => {
		const decimalRandom = Math.random();

		setQueryOffset(Math.floor(decimalRandom * 10));
	}, []);

	useEffect(() => {
		setColorFondo(getRandomColor());
		if (!gifFile) {
			refetch();
		}
	}, [gifFile, refetch]);

	useEffect(() => {
		const gifQueryUrl = !isLoading && data ? data.data[0].images.original.url : undefined;
		//La respuesta de giphy tiene una propieda también llamada data :/. De ahi data.data

		setGifUrl(gifFile ? gifFile : gifQueryUrl);
	}, [data, isLoading, gifFile]);

	return (
		<FondoGifEstilizado colorFondo={colorFondo} isLoading={isLoading} imagenUrl={gifUrl}>
			{children}
			<AtribucionGif subtitulo>
				<a href="https://giphy.com/"> Powered by GIPHY</a>
			</AtribucionGif>
		</FondoGifEstilizado>
	);
};
