import * as React from "react";
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";
import imagenBanner from "@assets/images/higher-or-lower-yt-banner.png";

export const CartasDeRedesSociales = ({location}) => {
	const data = useStaticQuery(graphql`
		query metaDatosQuery {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`);

	const urlActual = `${data.site.siteMetadata.siteUrl}${location.pathname}`;
	const urlImagen = `${urlActual}${imagenBanner}`;
	
	return (
		<Helmet>
			{/*  <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={urlActual} />
			<meta property="og:title" content="Higher or Lower. YT" />
			<meta property="og:description" content="Higher or Lower. Youtube version" />
			<meta property="og:image" content={urlImagen} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={urlActual} />
			<meta property="twitter:title" content="Higher or Lower. YT" />
			<meta property="twitter:description" content="Higher or Lower. Youtube version" />
			<meta property="twitter:image" content={urlImagen} />
		</Helmet>
	);
};
