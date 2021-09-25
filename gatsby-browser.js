import * as React from "react";
import EstilosGlobales from "./src/global/EstilosGlobales";

export const wrapPageElement = ({element}) => {
	return (
		<div>
			<EstilosGlobales />
			{element}
		</div>
	);
};
