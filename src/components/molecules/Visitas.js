import * as React from "react";
import styled from "styled-components";
import {Titulo} from "@components/atoms/Titulo";

const VisitasEstilizadas = styled(Titulo)`
	grid-area: centro;
	align-self: center;

	font-size: 3rem;
`;

export const Visitas = ({animacionVisitas, visitas}) => {
	return animacionVisitas ? (
		<VisitasEstilizadas align="center">
			{animacionVisitas.number.to((n) =>
				n
					.toFixed()
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			)}
		</VisitasEstilizadas>
	) : (
		<VisitasEstilizadas align="center">{visitas.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</VisitasEstilizadas>
	);
};
