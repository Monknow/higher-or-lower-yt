import * as React from "react";
import {useEffect} from "react";
import styled from "styled-components";
import {useQuery} from "react-query";
import {getRandomColor} from "@functions/getRandomColor";
import {tiposDeGif} from "@data/tiposDeGif";
import {obtenerGifEnBaseAPuntos} from "@functions/obtenerGifEnBaseAPuntos";
import {Titulo} from "@components/atoms/Titulo";

const FondoGifEstilizado = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: auto;
	grid-template-areas:
		"header"
		"header"
		"centro"
		"mid"
		"footer";

	box-sizing: border-box;
	padding: clamp(20px, 10vw, 40px) clamp(20px, 30vw, 80px);

	height: 100vh;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;

		width: 100%;
		height: 100%;

		background-color: #${getRandomColor()};
		background-image: url("${({imagenUrl, isLoading}) => (isLoading ? "none" : imagenUrl)}");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: brightness(0.3);
	}
`;

const AtribucionGif = styled(Titulo)`
	position: absolute;
	bottom: 20px;
	left: 20px;
	z-index: 99;

	font-size: clamp(12px, 4vw, 16px);

	a {
		text-decoration: none;
		color: #fff;

		font-size: "Open Sans Semibold";
	}
`;

export const FondoGif = ({children, puntos, queryGif, queryKey, gifFile}) => {
	const tipoDeGif = queryGif ? queryGif : obtenerGifEnBaseAPuntos(tiposDeGif, puntos);
	const queryOffset = puntos ? puntos : 0;

	const {isLoading, data, refetch} = useQuery(
		queryKey,
		async () => {
			return await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GATSBY_API_GIPHY_KEY}&q=${tipoDeGif}&limit=3&offset=${queryOffset}`
			).then((res) => res.json());
		},
		{refetchOnWindowFocus: false, enabled: false, staleTime: 20000}
	);

	useEffect(() => {
		if (!gifFile) refetch();
	}, []);
	const decimalRandom = Math.random();

	const numeroRandom = !isLoading && data ? Math.floor(decimalRandom * data.data.length) : undefined;
	//La respuesta de giphy tiene una propieda también llamada data :/. De ahi data.data

	const gifQueryUrl = !isLoading && data ? data.data[numeroRandom].images.original.url : undefined;
	const gifUrl = gifFile ? gifFile : gifQueryUrl;

	return (
		<FondoGifEstilizado isLoading={isLoading} imagenUrl={gifUrl}>
			{children}
			<AtribucionGif subtitulo>
				<a href="https://giphy.com/"> Powered by GIPHY</a>
			</AtribucionGif>
		</FondoGifEstilizado>
	);
};
