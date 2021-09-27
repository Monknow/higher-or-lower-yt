import {useSpring} from "react-spring";

export const useAnimacionEstado = () => {
	const [animacionEstado, apiAnimacionEstado] = useSpring(() => ({
		from: {opacity: 1},
		config: {mass: 10, tension: 300, friction: 10, clamp: true},
	}));

	return {animacionEstado, apiAnimacionEstado};
};
