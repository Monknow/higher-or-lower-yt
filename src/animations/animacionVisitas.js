import {useSpring, EasingFunction} from "react-spring";

console.log(EasingFunction);

export const useAnimacionVisitas = () => {
	const [animacionVisitas, apiAnimacionVisitas] = useSpring(() => ({
		from: {number: 0},
		number: 0,
		config: {
			easing: (x) => {
				const {pow} = Math;

				return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
			},
		},
	}));

	return {animacionVisitas, apiAnimacionVisitas};
};
