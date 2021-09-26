import * as React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";
import {paisesDeNombreACodigo} from "@data/paisesDeNombreACodigo";

const SeleccionarPaisEstilizado = styled.form`
	grid-area: header;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: clamp(20px, 8vw, 30px);

	font-size: clamp(14px, 5vw, 20px);
`;

const EtiquetaEstilizada = styled.label`
	text-align: center;
`;

const InputSelect = styled.select`
	box-sizing: content-box;
	border: 2px solid #fff;
	border-radius: 4px;
	padding: 3px;

	height: clamp(20px, 8vw, 30px);
	width: min(60vw, 300px);
	font-size: clamp(14px, 5vw, 16px);
`;

const paises = Array.from(paisesDeNombreACodigo.keys());
const paiseDeCodigoANombre = new Map(Array.from(paisesDeNombreACodigo, (array) => array.reverse()));

export const SeleccionarPais = ({setCodigoPais, location}) => {
	const codigoPaiseDelAnteriorJuego = location?.state?.codigoPais;

	const [valorSeleccionado, setValorSeleccionado] = useState(
		codigoPaiseDelAnteriorJuego ? paiseDeCodigoANombre.get(codigoPaiseDelAnteriorJuego) : "United States of America"
	);

	useEffect(() => {
		setCodigoPais(paisesDeNombreACodigo.get(valorSeleccionado));
	}, [valorSeleccionado]);

	return (
		<SeleccionarPaisEstilizado>
			<EtiquetaEstilizada>Select country for localized Youtube videos</EtiquetaEstilizada>
			<InputSelect
				value={valorSeleccionado}
				onChange={(evento) => {
					setValorSeleccionado(evento.target.value);
				}}>
				{paises.sort().map((pais) => {
					return (
						<option key={pais} value={pais}>
							{pais}
						</option>
					);
				})}
			</InputSelect>
		</SeleccionarPaisEstilizado>
	);
};
