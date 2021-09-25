import {useSpring} from "react-spring";

export const useAnimacionVisitas = () => {
	const [animacionVisitas, apiAnimacionVisitas] = useSpring(() => ({
		from: {number: 0},
		number: 0,
		config: {duration: 1000},
	}));

	return {animacionVisitas, apiAnimacionVisitas};
};
