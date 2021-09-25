import * as React from "react";
import {Fragment} from "react";
import {useState} from "react";
import styled from "styled-components";
import {getRandomColor} from "@functions/getRandomColor";
import {elegirResolucionDeImagen} from "@functions/elegirResolucionDeImagen";
import {HigherOrLowerBotones} from "@components/molecules/HigherOrLowerBotones";
import {Titulo} from "@components/atoms/Titulo";
import {HeaderVideo} from "@components/atoms/HeaderVideo";
import {Visitas} from "@components/molecules/Visitas";
import {animated} from "react-spring";

const VideoEnJuegoEstilizado = styled(animated.div)`
	position: relative;

	flex-shrink: 0;
	flex-grow: 0;

	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: auto;
	grid-template-areas:
		"header"
		"header"
		"centro"
		"mid"
		"textoComparacion";

	box-sizing: border-box;
	padding: clamp(10px, 10vw, 50px);

	width: 50vw;
	height: 100vh;

	@media only screen and (max-width: 800px) {
		width: 100vw;
		height: 50vh;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;

		width: 100%;
		height: 100%;

		background-color: #${() => getRandomColor()};
		background-image: url(${({imagen}) => imagen});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: ${({imagen}) => (imagen ? "brightness(0.3)" : "none")};
	}
`;

const TextoComparacion = styled(Titulo)`
	grid-area: ${({$abajo}) => ($abajo ? "textoComparacion" : "mid")};
	align-self: "start";

	font-size: 1.2em;
	margin: 10px clamp(10px, 5vw, 30px);
`;

export const VideoEnJuego = ({
	datos,
	esVideoParaComparar,
	manejarRespuesta,
	tituloVideoAnterior,
	style,
	animacionInterfaz,
	fueraDePantalla,
	animacionVisitas,
}) => {
	const [mostrarVisitas, setMostrarVisitas] = useState(!esVideoParaComparar);

	const thumbnails = datos.snippet.thumbnails;

	return (
		<VideoEnJuegoEstilizado style={style} imagen={elegirResolucionDeImagen(thumbnails)}>
			{!fueraDePantalla && (
				<Fragment>
					<HeaderVideo titulo={datos.snippet.title} />
					<Visitas animacionVisitas={animacionVisitas} visitas={datos.statistics.viewCount} />
					{esVideoParaComparar && (
						<HigherOrLowerBotones
							style={animacionInterfaz}
							manejarRespuesta={manejarRespuesta}
							setMostrarVisitas={setMostrarVisitas.toString()}
						/>
					)}
					<TextoComparacion align="center" style={animacionInterfaz} subtitulo $abajo={esVideoParaComparar}>
						{esVideoParaComparar ? <span>views than {tituloVideoAnterior}</span> : <span>views</span>}
					</TextoComparacion>
				</Fragment>
			)}
		</VideoEnJuegoEstilizado>
	);
};
