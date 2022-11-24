import {quadInOut} from 'svelte/easing'

import type {TransitionConfig} from 'svelte/transition'

interface FlyReturn {
  flyOut: (element: HTMLElement) => TransitionConfig,
  flyIn: (element: HTMLElement) => TransitionConfig
}

interface FlyParams {
  duration: number
}

export const fly = ({duration}: FlyParams): FlyReturn => {

  let temp: number

  const flyOut: FlyReturn['flyOut'] = element => {
    const {y, height} = element.getBoundingClientRect()
    temp = height + y

    return {
      duration,
      easing: quadInOut,
      css: (t, u) => `top: ${y - temp * u}px`
    }
  }

  const flyIn: FlyReturn['flyIn'] = () => {
    return {
      duration,
      easing: quadInOut,
      css: (t, u) => `top: ${temp - t * temp}px`
    }
  }

  return {
    flyOut,
    flyIn
  }
}