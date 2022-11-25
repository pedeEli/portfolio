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

const easing = quadInOut
export const fly = ({duration}: FlyParams): FlyReturn => {

  let distanceDown: number
  let distanceUp: number

  const flyOut: FlyReturn['flyOut'] = (element, {direction}) => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const {y, height} = element.getBoundingClientRect()
    distanceDown = height + y
    distanceUp = y

    const css: TransitionConfig['css'] = direction === 'down'
      ? (t, u) => `top: ${y - distanceDown * u}px`
      : direction === 'up'
      ? (t, u) => `top: ${distanceUp * t + windowHeight * u}px`
      : direction === 'left'
      ? (t, u) => `left: ${windowWidth * u}px`
      : (t, u) => `left: ${-windowWidth * u}px`

    
    return {
      duration,
      easing,
      css
    }
  }

  const flyIn: FlyReturn['flyIn'] = (element, {direction}) => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const {height} = element.getBoundingClientRect()

    const css: TransitionConfig['css'] = direction === 'down'
      ? (t, u) => `top: ${distanceDown * u}px`
      : direction === 'up'
      ? (t, u) => `top: ${distanceUp * u - height + windowHeight * t}px`
      : direction === 'left'
      ? (t, u) => `left: ${-windowWidth * u}px`
      : (t, u) => `left: ${windowWidth * u}px`

    const tick: TransitionConfig['tick'] = direction === 'up'
      ? (t, u) => t === 1 && window.scrollTo({top: height})
      : undefined

    return {
      duration,
      easing,
      css,
      tick
    }
  }

  return {
    flyOut,
    flyIn
  }
}