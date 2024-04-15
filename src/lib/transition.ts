import { quadInOut } from 'svelte/easing'

import type { TransitionConfig } from 'svelte/transition'

interface Params {
	direction: Direction
}

interface FlyReturn {
	flyOut: (element: HTMLElement, params: Params) => TransitionConfig
	flyIn: (element: HTMLElement, params: Params) => TransitionConfig
}

interface FlyParams {
	duration: number
}

const easing = quadInOut
export const fly = ({ duration }: FlyParams): FlyReturn => {
	let distanceDown: number
	let distanceUp: number

	const flyOut: FlyReturn['flyOut'] = (element, { direction }) => {
		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const { y, height } = element.getBoundingClientRect()
		distanceDown = height + y
		distanceUp = y

		const css: TransitionConfig['css'] =
			direction === 'down'
				? (t, u) => `top: ${y - distanceDown * u}px; position: absolute`
				: direction === 'up'
					? (t, u) => `top: ${distanceUp * t + windowHeight * u}px; position: absolute`
					: direction === 'left'
						? (t, u) => `left: ${windowWidth * u}px; position: absolute`
						: (t, u) => `left: ${-windowWidth * u}px; position: absolute`

		return {
			duration,
			easing,
			css
		}
	}

	const flyIn: FlyReturn['flyIn'] = (element, { direction }) => {
		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const { height } = element.getBoundingClientRect()

		const css: TransitionConfig['css'] =
			direction === 'down'
				? (t, u) => `top: ${distanceDown * u}px; position: absolute`
				: direction === 'up'
					? (t, u) => {
							console.log(u)
							if (t === 1) {
								return 'top: 0; position: absolute'
							}
							return `top: ${distanceUp * u - height + windowHeight * t}px; position: absolute`
						}
					: direction === 'left'
						? (t, u) => `left: ${-windowWidth * u}px; position: absolute`
						: (t, u) => `left: ${windowWidth * u}px; position: absolute`

		return {
			duration,
			easing,
			css
		}
	}

	return {
		flyOut,
		flyIn
	}
}
