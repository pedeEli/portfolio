<script lang="ts">
  import {onMount} from 'svelte'
  import {Program} from '$lib/3D/Program'
  import {InputHandler} from '$lib/3D/InputHandler'
  import {fragment, vertex} from '$lib/3D/shader/cube.glsl'
  import {Camera, Rubics} from '$lib/3D/gameObjects'
  import {V3, Quaternion} from '$lib/3D/math'
  
  let canvas: HTMLCanvasElement

  onMount(() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const gl = canvas.getContext("webgl2")!
    gl.viewport(0, 0, window.innerWidth, window.innerHeight)

    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LESS)

    const program = new Program('cube.glsl', vertex, fragment, gl)
    program.use()

    const vertices = [
       .5,  .5,  0,
       .5, -.5,  0,
      -.5,  .5,  0,
      -.5, -.5,  0
    ]
    const verticesBuffer = new Float32Array(vertices)
    const vbo = gl.createBuffer()!

    const indices = [
      0, 1, 2,
      1, 2, 3
    ]
    const indicesBuffer = new Int8Array(indices)
    const ebo = gl.createBuffer()!

    const vao = gl.createVertexArray()!
    gl.bindVertexArray(vao)

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer, gl.STATIC_DRAW)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, verticesBuffer, gl.STATIC_DRAW)

    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 12, 0)
    gl.enableVertexAttribArray(0)

    const camera = new Camera(new V3(0, 0, -10), V3.zero, V3.up, 45, window.innerWidth, window.innerHeight, .1, 100)
    const rubics = new Rubics(Quaternion.identity)
    const inputHandler = new InputHandler(canvas, rubics, camera)
    inputHandler.setupHandlers()

    const resizeHandler = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width
      canvas.height = height
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
    }
  })
</script>

<canvas class="fixed inset-0" bind:this={canvas}></canvas>