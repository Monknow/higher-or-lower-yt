import * as React from "react";
import {CartasDeRedesSociales} from "@global/CartasDeRedesSociales";
import {EstilosGlobales} from "@global/EstilosGlobales";

export const wrapPageElement = ({props, element}) => {
	const {location} = props;

	return (
		<div>
			<EstilosGlobales />
			<CartasDeRedesSociales location={location} />
			{element}
		</div>
	);
};
