import * as React from "react";
import styled from "styled-components";
import {animated} from "react-spring";

const align = ({align}) => align;
const color = "#fff";
const lineHeight = "auto";

const TituloEstilizado = styled(animated.h1)`
	font-family: "Open Sans Bold", sans-serif;
	font-size: 2rem;

	text-align: ${align};
	line-height: ${lineHeight};

	color: ${color};
`;

const SubtituloEstilizado = styled(animated.h2)`
	font-family: "Open Sans Semibold", sans-serif;
	font-size: 1.4rem;

	text-align: ${align};
	line-height: ${lineHeight};

	color: ${color};
`;

export const Titulo = ({subtitulo, ...rest}) => {
	return !subtitulo ? (
		<TituloEstilizado {...rest}></TituloEstilizado>
	) : (
		<SubtituloEstilizado {...rest}></SubtituloEstilizado>
	);
};
