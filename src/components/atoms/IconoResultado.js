import * as React from "react";
import styled from "styled-components";
import {animated} from "react-spring";

const ladoIcono = "clamp(70px, 15vw, 90px)";
const ladoIconoNegativo = `calc(${ladoIcono} * -1)`;
const mitadLadooDelIcono = `calc(${ladoIcono} / 2);`;
const mitadLadoNegativoDelIcono = `calc(${ladoIconoNegativo} / 2)`;

const IconoResultadoEstilizado = styled(animated.div)`
	position: relative;
	z-index: 98;

	flex-shrink: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	box-sizing: border-box;
	border-radius: 50%;
	margin: 0 ${mitadLadoNegativoDelIcono};

	padding: clamp(5px, 3vw, 10px);

	width: ${ladoIcono};
	height: ${ladoIcono};

	background-color: ${({backgroundcolor}) => backgroundcolor};

	@media only screen and (max-width: 800px) {
		margin: ${mitadLadoNegativoDelIcono} 0;
	}

	& svg {
		width: ${mitadLadooDelIcono};
		height: ${mitadLadooDelIcono};

		fill: #fff;
	}
`;

export const IconoResultado = ({Svg, backgroundcolor, style}) => {
	return (
		<IconoResultadoEstilizado style={style} backgroundcolor={backgroundcolor}>
			<Svg />
		</IconoResultadoEstilizado>
	);
};
