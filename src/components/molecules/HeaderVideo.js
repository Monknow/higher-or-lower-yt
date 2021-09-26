import * as React from "react";
import styled from "styled-components";
import {Titulo} from "@components/atoms/Titulo";
import {animated} from "react-spring";

const HeaderVideoEstilizado = styled(animated.div)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: column nowrap;
	gap: clamp(5px, 5vw, 20px);

	grid-area: header;
	align-self: end;
`;

export const HeaderVideo = ({titulo, style}) => {
	return (
		<HeaderVideoEstilizado style={style}>
			<Titulo align="center">{titulo}</Titulo>
			<Titulo subtitulo align="center">
				has
			</Titulo>
		</HeaderVideoEstilizado>
	);
};
