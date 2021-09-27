import * as React from "react";
import {IconoResultado} from "@components/atoms/IconoResultado";
import VersusSvg from "@assets/svg/versus.inline.svg";
import CorrectSvg from "@assets/svg/correct.inline.svg";
import WrongSvg from "@assets/svg/wrong.inline.svg";

export const EstadoResultado = ({estado, style}) => {
	switch (estado) {
		case "correct":
			return <IconoResultado Svg={CorrectSvg} style={style} backgroundcolor="#4CA64C" />;
		case "wrong":
			return <IconoResultado Svg={WrongSvg} style={style} backgroundcolor="#F72B20" />;
		default:
			return <IconoResultado Svg={VersusSvg} style={style} backgroundcolor="#fff" />;
	}
};
