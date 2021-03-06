import * as React from "react";
import {Fragment} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Titulo} from "@components/atoms/Titulo";
import {VideoEnJuego} from "@components/molecules/VideoEnJuego";
import {Puntaje} from "@components/molecules/Puntaje";
import {EstadoResultado} from "@components/molecules/EstadoResultado";
import {useJuego} from "@hooks/useJuego";

const EstilosGlobales = createGlobalStyle`

    html{
		overflow: hidden;

    } 

`;

const VideosEnJuego = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;

	overflow: hidden;

	@media only screen and (max-width: 800px) {
		flex-flow: column nowrap;
	}
`;

export const App = ({codigoPais}) => {
	const {
		videos,
		videosEnJuego,
		isLoading,
		puntos,
		estadoJuego,
		manejarRespuesta,
		animacionScroll,
		animacionInterfaz,
		animacionVisitas,
		animacionEstado,
	} = useJuego(codigoPais);

	const [videoAnterior, videoAComparar, videoSiguiente] = videosEnJuego;

	const isBrowser = typeof window !== "undefined";

	const estilosAnimacionScroll = {
		x: animacionScroll.x.to((x) => {
			if (isBrowser && window.innerWidth > 800) {
				return `-${x}vw`;
			}
			return `0vw`;
		}),

		y: animacionScroll.y.to((y) => {
			if (isBrowser && window.innerWidth <= 800) {
				return `-${y}vh`;
			}
			return `0vh`;
		}),
	};

	return !isLoading && videos.length ? (
		<Fragment>
			<EstilosGlobales />
			<Puntaje puntos={puntos} />

			<VideosEnJuego>
				<VideoEnJuego
					style={estilosAnimacionScroll}
					animacionInterfaz={animacionInterfaz}
					esVideoAnterior
					datos={videoAnterior}
					manejarRespuesta={manejarRespuesta}></VideoEnJuego>
				<EstadoResultado estado={estadoJuego} style={animacionEstado} />
				<VideoEnJuego
					style={estilosAnimacionScroll}
					animacionInterfaz={animacionInterfaz}
					datos={videoAComparar}
					animacionVisitas={animacionVisitas}
					esVideoActual
					tituloVideoAnterior={videoAnterior.snippet.title}
					manejarRespuesta={manejarRespuesta}></VideoEnJuego>
				<VideoEnJuego
					style={estilosAnimacionScroll}
					animacionInterfaz={animacionInterfaz}
					esSiguienteVideo
					datos={videoSiguiente}
					manejarRespuesta={manejarRespuesta}></VideoEnJuego>
			</VideosEnJuego>
		</Fragment>
	) : (
		<Titulo>Loading...</Titulo>
	);
};
