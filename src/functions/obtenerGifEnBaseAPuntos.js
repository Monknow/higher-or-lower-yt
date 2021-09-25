export const obtenerGifEnBaseAPuntos = (tiposDeGif, puntos) => {
	for (let index = 0; index < tiposDeGif.length; index++) {
		const gif = tiposDeGif[index];

		if (gif.puntos < puntos) {
			return gif.tipo;
		}
	}
};
