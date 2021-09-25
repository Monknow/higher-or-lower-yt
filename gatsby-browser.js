import * as React from "react";
import {CartasDeRedesSociales} from "@global/CartasDeRedesSociales";
import {EstilosGlobales} from "@global/EstilosGlobales";

export const wrapPageElement = ({props, element}) => {
	return (
		<div>
			<EstilosGlobales />
			<CartasDeRedesSociales {...props} />
			{element}
		</div>
	);
};
