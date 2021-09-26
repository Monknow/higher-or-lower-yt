import {useSpring} from "react-spring";

export const useAnimacionInterfaz = () => {
	const [animacionInterfaz, apiAnimacionInterfaz] = useSpring(() => ({
		from: {opacity: 1},
		config: {mass: 5, tension: 120, clamp: true},
	}));

	return {animacionInterfaz, apiAnimacionInterfaz};
};
