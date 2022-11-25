import {quadInOut} from 'svelte/easing'

import type {TransitionConfig} from 'svelte/transition'

export type Direction = 'up' | 'right' | 'down' | 'left'

interface Params {
  direction: Direction
}

interface FlyReturn {
  flyOut: (element: HTMLElement, params: Params) => TransitionConfig,
  flyIn: (element: HTMLElement, params: Params) => TransitionConfig
}

interface FlyParams {
  duration: number
}

export const fly = ({duration}: FlyParams): FlyReturn => {

  let distanceDown: number
  let distanceUp: number

  const flyOut: FlyReturn['flyOut'] = (element, {direction}) => {
    if (direction === 'down') {
      const {y, height} = element.getBoundingClientRect()
      distanceDown = height + y
  
      return {
        duration,
        easing: quadInOut,
        css: (t, u) => `top: ${y - distanceDown * u}px`
      }
    } else if (direction === 'up') {
      const {y} = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      distanceUp = y

      return {
        duration,
        easing: quadInOut,
        css: (t, u) => `top: ${distanceUp + (windowHeight - distanceUp) * u}px`
      }
    }
    return {}
  }

  const flyIn: FlyReturn['flyIn'] = (element, {direction}) => {
    if (direction === 'down') {
      return {
        duration,
        easing: quadInOut,
        css: (t, u) => `top: ${distanceDown - t * distanceDown}px`
      }
    } else if (direction === 'up') {
      const {height} = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      return {
        duration,
        easing: quadInOut,
        css: (t, u) => `top: ${distanceUp - height + (windowHeight - distanceUp) * t}px`,
        tick: (t, u) => {
          if (t === 1) {
            window.scrollTo({top: height})
          }
        }
      }
    }
    return {}
  }

  return {
    flyOut,
    flyIn
  }
}