export const elegirResolucionDeImagen = (srcSet) => {
	switch (true) {
		case !!srcSet.maxres:
			return srcSet.maxres.url;
		case !!srcSet.high:
			return srcSet.high.url;

		case !!srcSet.medium:
			return srcSet.medium.url;

		default:
			return srcSet.default.url;
	}
};
