import * as React from "react";
import styled from "styled-components";

const BotonEstilizado = styled.button`
	border: 1px solid #fff;
	border-radius: 50px;
	padding: 5px 10px 4px 10px;

	width: clamp(70px, 30vw, 200px);
	min-height: clamp(45px, 12vw, 50px);

	font-family: "Open Sans Semibold", sans-serif;
	font-size: clamp(14px, 3vw, 18px);

	text-align: center;

	color: #fff;
	background-color: transparent;
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		color: #000;
		background-color: #fff;
	}
`;

export const Boton = (props) => {
	return <BotonEstilizado {...props}></BotonEstilizado>;
};
