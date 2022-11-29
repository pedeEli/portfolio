import {Program} from './Program'
import {InputHandler} from './InputHandler'
import {fragment, vertex} from './shader/cube.glsl'
import {Camera, Rubics} from './gameObjects'
import {V3, Quaternion} from './math'

import {locale} from '$i18n/i18n-svelte'

let canvas: HTMLCanvasElement | undefined
let gl: WebGL2RenderingContext
let camera: Camera
let program: Program
let rubics: Rubics
let inputHandler: InputHandler

export const init = (wrapper: HTMLElement) => {
  if (!canvas) {
    canvas = document.createElement('canvas')

    gl = canvas.getContext("webgl2")!

    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LESS)

    program = new Program('cube.glsl', vertex, fragment, gl)
    program.use()

    camera = new Camera(new V3(0, 0, -10), V3.zero, V3.up, 45, window.innerWidth, window.innerHeight, .1, 100)
    rubics = new Rubics(Quaternion.identity, gl)
    inputHandler = new InputHandler(canvas, rubics, camera)
    inputHandler.addHandlers()
  }
  

  const unsubLocale = locale.subscribe($locale => {
    const texture = loadTexture(gl, `/cube/${$locale}.png`)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    program.uniform('tex', {
      setUniform: (gl, location) => gl.uniform1i(location, 0)
    })
  })

  wrapper.append(canvas)

  const resizeHandler = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    canvas!.width = width
    canvas!.height = height
    gl.viewport(0, 0, width, height)

    camera.screenSize(width, height)
  }
  window.addEventListener('resize', resizeHandler)
  resizeHandler()

  let lastTime = Date.now()
  const loop = () => {
    const currentTime = Date.now()
    const deltaTime = (currentTime - lastTime) / 1000
    lastTime = currentTime

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    program.uniform('view', camera.worldToCameraMatrix)
    program.uniform('projection', camera.projectionMatrix)

    rubics.render(program, gl)
    rubics.update(deltaTime)

    frame = requestAnimationFrame(loop)
  }
  let frame = requestAnimationFrame(loop)

  return () => {
    window.removeEventListener('resize', resizeHandler)
    cancelAnimationFrame(frame)
    unsubLocale()
    canvas?.remove()
  }
}

const loadTexture = (gl: WebGL2RenderingContext, url: string) => {
  const texture = gl.createTexture()!
  gl.bindTexture(gl.TEXTURE_2D, texture)

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 255, 255, 255]))

  const image = new Image()
  image.addEventListener('load', () => {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  })
  image.src = url

  return texture
}