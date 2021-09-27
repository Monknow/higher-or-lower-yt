import * as React from "react";
import styled from "styled-components";
import {Titulo} from "@components/atoms/Titulo";

const PuntajeEstilizado = styled(Titulo)`
	position: absolute;
	top: 20px;
	left: 20px;

	z-index: 99;
`;

export const Puntaje = ({puntos}) => {
	return <PuntajeEstilizado>{puntos} points</PuntajeEstilizado>;
};
