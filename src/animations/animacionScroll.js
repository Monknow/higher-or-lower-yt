import {useSpring} from "react-spring";

export const useAnimacionScroll = () => {
	const [animacionScroll, apiAnimacionScroll] = useSpring(() => ({
		from: {x: 0, y: 0},
		x: 0,
		y: 0,
		config: {mass: 2, tension: 100, friction: 20, clamp: true},
	}));

	return {animacionScroll, apiAnimacionScroll};
};
