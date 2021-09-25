import {useSpring} from "react-spring";

export const useAnimacionScroll = () => {
	const [animacionScroll, apiAnimacionScroll] = useSpring(() => ({
		from: {x: 0, y: 0},
		x: 0,
		y: 0,
		config: {duration: 500},
	}));

	return {animacionScroll, apiAnimacionScroll};
};
