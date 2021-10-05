import * as React from "react";
import styled from "styled-components";
import {Boton} from "@components/atoms/Boton";
import {animated} from "react-spring";

const HigherOrLowerBotonesEstilizado = styled(animated.div)`
	grid-area: mid;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row wrap;
	gap: clamp(5px, 3vw, 20px);
`;

export const HigherOrLowerBotones = ({manejarRespuesta, style}) => {
	return (
		<HigherOrLowerBotonesEstilizado style={style}>
			<Boton
				onClick={() => {
					manejarRespuesta("higher");
				}}>
				Higher
			</Boton>
			<Boton
				onClick={() => {
					manejarRespuesta("lower");
				}}>
				Lower
			</Boton>
		</HigherOrLowerBotonesEstilizado>
	);
};
