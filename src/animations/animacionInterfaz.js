import {useSpring} from "react-spring";

export const useAnimacionInterfaz = () => {
	const [animacionInterfaz, apiAnimacionInterfaz] = useSpring(() => ({
		from: {opacity: 1},
		config: {duration: 500},
	}));

	return {animacionInterfaz, apiAnimacionInterfaz};
};
