import * as React from "react";
import {useState} from "react";
import {Helmet} from "react-helmet";
import styled, {createGlobalStyle} from "styled-components";
import {QueryClient, QueryClientProvider} from "react-query";
import {Boton} from "@components/atoms/Boton";
import {Link} from "gatsby";
import {Titulo} from "@components/atoms/Titulo";
import {FondoGif} from "@components/atoms/FondoGif";
import {SeleccionarPais} from "@components/molecules/SeleccionarPais";
import youtubeGif from "@assets/images/youtube.gif";

const EstilosGlobales = createGlobalStyle`

    html{
		overflow: hidden;
    } 

`;

const DisclaimerEstilizado = styled.p`
	grid-area: top;

	text-align: center;
	font-size: 1.3rem;

	a {
		text-decoration: none;
		color: #fff;
	}
`;

const HeaderEstilizado = styled.header`
	grid-area: centro;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
`;

const TituloGrande = styled(Titulo)`
	font-size: 3rem;
`;

const BotonJugar = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;

	grid-area: low;
`;

const queryClient = new QueryClient();

const IndexPage = ({location}) => {
	const [codigoPais, setCodigoPais] = useState(location?.state?.codigoPais ?? "US");
	// Recuperar codigoDePais de anterior partida

	return (
		<QueryClientProvider client={queryClient}>
			<Helmet>
				<title>Higher or Lower YT</title>
			</Helmet>
			<EstilosGlobales />

			<FondoGif
				puntos={location.state ? location.state.puntos : null}
				queryKey={location.state ? "FondoDerrota" : null}
				gifFile={location.state ? null : youtubeGif}>
				<DisclaimerEstilizado>
					Disclaimer. This game was made for the only purpose of fun and love for programming, and it doesn't
					intend to be a replacement for the <a href="www.higherlowergame.com">Original game</a>
				</DisclaimerEstilizado>
				<SeleccionarPais setCodigoPais={setCodigoPais} location={location} />
				<HeaderEstilizado>
					{location.state ? (
						<>
							<TituloGrande align="center">You scored</TituloGrande>
							<TituloGrande align="center">
								{location.state.puntos} {location.state.puntos === 1 ? "point" : "points"}
							</TituloGrande>
						</>
					) : (
						<TituloGrande align="center">Higher or Lower. Youtube version</TituloGrande>
					)}
				</HeaderEstilizado>
				<BotonJugar to="/game" state={{codigoPais: codigoPais}}>
					<Boton>{location.state ? "Play Again" : "Play"}</Boton>
				</BotonJugar>
			</FondoGif>
		</QueryClientProvider>
	);
};

export default IndexPage;
