import * as React from "react";
import {useState} from "react";
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
const Controles = styled.div`
	grid-area: centro;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: clamp(10px, 10vw, 40px);

	font-size: clamp(18px, 10vw, 30px);

	h1 {
		line-height: clamp(30px, 20vw, 60px);
	}
`;

const queryClient = new QueryClient();

const IndexPage = ({location}) => {
	const [codigoPais, setCodigoPais] = useState(location?.state?.codigoPais ?? "US");
	// Recuperar codigoDePais de anterior partida

	return (
		<QueryClientProvider client={queryClient}>
			<EstilosGlobales />

			<FondoGif
				puntos={location.state ? location.state.puntos : null}
				queryKey={location.state ? "FondoDerrota" : null}
				gifFile={location.state ? null : youtubeGif}>
				<SeleccionarPais setCodigoPais={setCodigoPais} location={location} />
				<Controles>
					{location.state ? (
						<>
							<Titulo align="center">You scored</Titulo>
							<Titulo align="center">{location.state.puntos}</Titulo>
						</>
					) : (
						<Titulo align="center">Higher or Lower. Youtube version</Titulo>
					)}
					<Link to="/game" state={{codigoPais: codigoPais}}>
						<Boton>{location.state ? "Play Again" : "Play"}</Boton>
					</Link>
				</Controles>
				<DisclaimerEstilizado>
					Disclaimer. This game was made for the only purpose of fun and love for programming, and it doesn't
					intend to be a replacement for the <a href="www.higherlowergame.com">Original game</a>
				</DisclaimerEstilizado>
			</FondoGif>
		</QueryClientProvider>
	);
};

export default IndexPage;
