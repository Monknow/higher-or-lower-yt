import {useSpring} from "react-spring";

export const useAnimacionEstado = () => {
	const [animacionEstado, apiAnimacionEstado] = useSpring(() => ({
		from: {opacity: 1},
		config: {duration: 200},
	}));

	return {animacionEstado, apiAnimacionEstado};
};
