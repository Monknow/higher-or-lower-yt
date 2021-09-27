const colores = ["2a9d8f", "e76f51", "e9c46a", "f4a261", "b5838d", "6d6875", "81b29a", "f2cc8f", "606c38", "cbdfbd"];

export const getRandomColor = () => {
	const decimalRandom = Math.random();

	const numeroRandom = Math.floor(decimalRandom * colores.length);

	const colorRandom = colores[numeroRandom];

	return colorRandom;
};
