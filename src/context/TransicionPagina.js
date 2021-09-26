import * as React from "react";
import {TransitionProvider, TransitionViews} from "gatsby-plugin-transitions";

export const TransicionPagina = ({location, children}) => {
	return (
		<TransitionProvider location={location}>
			<TransitionViews>{children}</TransitionViews>
		</TransitionProvider>
	);
};
