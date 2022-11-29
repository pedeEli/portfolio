import {PlaneTransform, Transform, rotationFirst} from '.'

import type {Program} from '../Program'
import type {V3, Quaternion} from '../math'
import type {GameObject} from '.'

export class Plane implements GameObject {
    private _vao: WebGLVertexArrayObject

    public hovering = false

    public constructor(gl: WebGL2RenderingContext, public transform: Transform, uvs: Cube.UVs = {u1: 0, v1: 0, u2: 0, v2: 0}, public turnDirections?: Cube.TurnDirections, public side?: Cube.Side) {
        this._vao = gl.createVertexArray()!
        gl.bindVertexArray(this._vao)

        const vertices = [
             .5,  .5,  0,   uvs.u1,  uvs.v1,
             .5, -.5,  0,   uvs.u1,  uvs.v2,
            -.5,  .5,  0,   uvs.u2,  uvs.v1,
            -.5, -.5,  0,   uvs.u2,  uvs.v2
        ]
        const verticesBuffer = new Float32Array(vertices)
        const vbo = gl.createBuffer()!
    
        const indices = [
            0, 1, 2,
            1, 2, 3
        ]
        const indicesBuffer = new Int8Array(indices)
        const ebo = gl.createBuffer()!

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer, gl.STATIC_DRAW)

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
        gl.bufferData(gl.ARRAY_BUFFER, verticesBuffer, gl.STATIC_DRAW)

        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0)
        gl.enableVertexAttribArray(0)
        gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 20, 12)
        gl.enableVertexAttribArray(1)
    }

    public render(program: Program, gl: WebGL2RenderingContext) {
        program.uniform('model', this.transform.globalTransform)
        program.uniform('inside', {
            setUniform: (gl, location) => gl.uniform1i(location, this.turnDirections ? 0 : 1)
        })
        program.uniform('hovering', {
            setUniform: (gl, location) => gl.uniform1i(location, this.hovering ? 1 : 0)
        })
        gl.bindVertexArray(this._vao)
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0)
    }
}

export const createTransform = (position: V3, rotation: Quaternion, parent: GameObject, isInside: boolean) => {
    if (isInside)
        return new Transform(position, rotation, rotationFirst, parent)
    return new PlaneTransform(position, rotation, rotationFirst, parent)
}