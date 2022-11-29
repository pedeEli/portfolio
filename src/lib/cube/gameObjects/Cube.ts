import {V3, Quaternion, mod, V2} from '../math'
import {Transform, positionFirst, Plane, createTransform} from '.'

import type {Program} from '../Program'
import type {GameObject} from '.'

export const planeInfo = {
    up: {
        pos: V3.up,
        rotation: Quaternion.fromAngle(V3.up, 180).mult(Quaternion.fromAngle(V3.left, 90)),
        uv: [0, .5]
    } as const,
    down: {
        pos: V3.down,
        rotation: Quaternion.fromAngle(V3.left, 90),
        uv: [0, 0]
    } as const,
    back: {
        pos: V3.back,
        rotation: Quaternion.fromAngle(V3.forward, 180),
        uv: [-.333, .5]
    } as const,
    forward: {
        pos: V3.forward,
        rotation: Quaternion.fromAngle(V3.down, 0),
        uv: [.666, 0]
    } as const,
    left: {
        pos: V3.left,
        rotation: Quaternion.fromAngle(V3.up, 90),
        uv: [-.666, .5]
    } as const,
    right: {
        pos: V3.right,
        rotation: Quaternion.fromAngle(V3.right, 180).mult(Quaternion.fromAngle(V3.up, 90)),
        uv: [.333, 0]
    } as const,
} as const

type AllTurnDirections = {
    up?: Cube.TurnDirections,
    down?: Cube.TurnDirections,
    left?: Cube.TurnDirections,
    right?: Cube.TurnDirections,
    forward?: Cube.TurnDirections,
    back?: Cube.TurnDirections
}[][][]

const turnDirections: AllTurnDirections = [
    [
        [
            {right: {down: ['z', 0], right: ['y', 0]}, down: {right: ['z', 0], down: ['x', 0]}, back: {down: ['x', 0], right: ['y', 0]}},
            {right: {down: ['z', 1], right: ['y', 0]}, down: {right: ['z', 1], down: ['x', 0]}},
            {right: {down: ['z', 2], right: ['y', 0]}, down: {right: ['z', 2], down: ['x', 0]}, forward: {down: ['x', 0], right: ['y', 0]}}
        ],[
            {right: {down: ['z', 0], right: ['y', 1]}, back: {down: ['x', 0], right: ['y', 1]}},
            {right: {down: ['z', 1], right: ['y', 1]}},
            {right: {down: ['z', 2], right: ['y', 1]}, forward: {down: ['x', 0], right: ['y', 1]}}
        ],[
            {right: {down: ['z', 0], right: ['y', 2]}, up: {right: ['z', 0], down: ['x', 0]}, back: {down: ['x', 0], right: ['y', 2]}},
            {right: {down: ['z', 1], right: ['y', 2]}, up: {right: ['z', 1], down: ['x', 0]}},
            {right: {down: ['z', 2], right: ['y', 2]}, up: {right: ['z', 2], down: ['x', 0]}, forward: {down: ['x', 0], right: ['y', 2]}}
        ]
    ],[
        [
            {down: {right: ['z', 0], down: ['x', 1]}, back: {down: ['x', 1], right: ['y', 0]}},
            {down: {right: ['z', 1], down: ['x', 1]}},
            {down: {right: ['z', 2], down: ['x', 1]}, forward: {down: ['x', 1], right: ['y', 0]}}
        ],[
            {back: {down: ['x', 1], right: ['y', 1]}},
            {},
            {forward: {down: ['x', 1], right: ['y', 1]}}
        ],[
            {up: {right: ['z', 0], down: ['x', 1]}, back: {down: ['x', 1], right: ['y', 2]}},
            {up: {right: ['z', 1], down: ['x', 1]}},
            {up: {right: ['z', 2], down: ['x', 1]}, forward: {down: ['x', 1], right: ['y', 2]}}
        ]
    ],[
        [
            {left: {down: ['z', 0], right: ['y', 0]}, down: {right: ['z', 0], down: ['x', 2]}, back: {down: ['x', 2], right: ['y', 0]}},
            {left: {down: ['z', 1], right: ['y', 0]}, down: {right: ['z', 1], down: ['x', 2]}},
            {left: {down: ['z', 2], right: ['y', 0]}, down: {right: ['z', 2], down: ['x', 2]}, forward: {down: ['x', 2], right: ['y', 0]}}
        ],[
            {left: {down: ['z', 0], right: ['y', 1]}, back: {down: ['x', 2], right: ['y', 1]}},
            {left: {down: ['z', 1], right: ['y', 1]}},
            {left: {down: ['z', 2], right: ['y', 1]}, forward: {down: ['x', 2], right: ['y', 1]}}
        ],[
            {left: {down: ['z', 0], right: ['y', 2]}, up: {right: ['z', 0], down: ['x', 2]}, back: {down: ['x', 2], right: ['y', 2]}},
            {left: {down: ['z', 1], right: ['y', 2]}, up: {right: ['z', 1], down: ['x', 2]}},
            {left: {down: ['z', 2], right: ['y', 2]}, up: {right: ['z', 2], down: ['x', 2]}, forward: {down: ['x', 2], right: ['y', 2]}}
        ]
    ]
]

type SideTransform = {
    x: Cube.Side[],
    y: Cube.Side[],
    z: Cube.Side[]
}
type AllSideTransforms = {
    up: SideTransform,
    down: SideTransform,
    right: SideTransform,
    left: SideTransform,
    forward: SideTransform,
    back: SideTransform
}
const sideTransforms: AllSideTransforms = {
    up: {
        x: ['up', 'back', 'down', 'forward'],
        y: ['up'],
        z: ['up', 'right', 'down', 'left']
    },
    down: {
        x: ['down', 'forward', 'up', 'back'],
        y: ['down'],
        z: ['down', 'left', 'up', 'right']
    },
    right: {
        x: ['right'],
        y: ['right', 'forward', 'left', 'back'],
        z: ['right', 'down', 'left', 'up']
    },
    left: {
        x: ['left'],
        y: ['left', 'back', 'right', 'forward'],
        z: ['left', 'up', 'right', 'down']
    },
    forward: {
        x: ['forward', 'up', 'back', 'down'],
        y: ['forward', 'left', 'back', 'right'],
        z: ['forward']
    },
    back: {
        x: ['back', 'down', 'forward', 'up'],
        y: ['back', 'right', 'forward', 'left'],
        z: ['back']
    }
}



export class Cube implements GameObject {
    private _outsides: Plane[] = []
    public transform: Transform
    public index: V3

    public constructor(position: V3, rotation: Quaternion, x: number, y: number, z: number, parent: GameObject, gl: WebGL2RenderingContext) {
        this.transform = new Transform(position, rotation, positionFirst, parent)
        this.index = new V3(x, y, z)
        Object.entries(planeInfo).forEach(([side, {pos, rotation, uv}]) => {
            const inside = isInside(side as Cube.Side, x, y, z)
            const transform = createTransform(pos.scale(.5), rotation, this, inside)
            const turnDirection = turnDirections[x][y][z][side as Cube.Side]
            const uvs = getUVs(uv, this.index, turnDirection)
            const plane = new Plane(gl, transform, uvs, turnDirection, side as Cube.Side)
            this.transform.addChild(plane)
            if (inside) return 
            this._outsides.push(plane)
        })
    }

    public render(program: Program, gl: WebGL2RenderingContext) {
        this.transform.forEachChildren(child => child.render?.call(child, program, gl))
    }

    public get planes() {
        return this._outsides
    }

    
    private _rotation?: Quaternion

    public backupRotation() {
        this._rotation = this.transform.rotation
    }
    public resetRotation() {
        if (!this._rotation)
            throw new Error('Fatal: No rotation has been backed up!')
        this.transform.rotation = this._rotation
    }


    private _turning = false
    private _turnSpeed = 5
    private _turnProgress!: number
    private _axis!: V3
    private _targetAngle!: number
    private _initialRotation!: Quaternion
    private _targetRotation!: Quaternion

    public get isTurning() {
        return this._turning
    }

    public transformSides(axis: Cube.Axis, angle: number) {
        this._outsides.forEach(plane => {
            const currentSide = plane.side!
            const sides = sideTransforms[currentSide][axis]
            const index = mod(angle, sides.length)
            const newSide = sides[index]
            plane.side = newSide
            const {x, y, z} = this.index
            plane.turnDirections = turnDirections[x][y][z][newSide]
            if (!plane.turnDirections) debugger
        })
    }

    public rotate(axis: V3, angle: number) {
        this._turning = true
        this._turnProgress = 0
        this._initialRotation = this.transform.rotation
        this._axis = this._initialRotation.rotate(axis)
        this._targetAngle = angle * 90
        this._targetRotation = this._rotation!.mult(Quaternion.fromAngle(this._axis, this._targetAngle))
    }
    public update(delta: number) {
        if (!this._turning) return
        this._turnProgress += delta * this._turnSpeed
        if (this._turnProgress >= 1) {
            this._turning = false
            this.transform.rotation = this._targetRotation
            return
        }
        this.transform.rotation = Quaternion.lerp(this._initialRotation, this._targetRotation, this._turnProgress)
    }
}

const isInside = (side: Cube.Side, x: number, y: number, z: number) => {
    return side === 'up'      && y !== 2
        || side === 'down'    && y !== 0
        || side === 'forward' && z !== 2
        || side === 'back'    && z !== 0
        || side === 'left'    && x !== 2
        || side === 'right'   && x !== 0
}

const getUVs = (uv: readonly [number, number], pos: V3, turnDirection?: Cube.TurnDirections): Cube.UVs | undefined => {
    if (!turnDirection)
        return
    
    const [downAxis, downIndex] = turnDirection.down
    const [rightAxis, rightIndex] = turnDirection.right

    if (
        downAxis === 'x' && rightAxis === 'z' && pos.y === 2 ||
        downAxis === 'x' && rightAxis === 'y' && pos.z === 0
    ){
        const u = uv[0] + downIndex * .111
        const v = uv[1] + rightIndex * .166

        return {
            u1: .333 - u,
            v1: v,
            u2: .222 - u,
            v2: v + .166
        }
    }

    if (downAxis === 'z' && rightAxis === 'y' && pos.x === 2) {
        const u = uv[0] + downIndex * .111
        const v = uv[1] + rightIndex * .166 + .166
    
        return {
            u1: .333 - u,
            v1: v,
            u2: .222 - u,
            v2: v - .166
        }
    }

    
    if (downAxis === 'z' && rightAxis === 'y' && pos.x === 0) {
        const u = uv[0] + downIndex * .111
        const v = uv[1] + rightIndex * .166

        return {
            u1: .111 + u,
            v1: v,
            u2: u,
            v2: v + .166
        }
    }

    if (downAxis === 'x' && rightAxis === 'y' && pos.z === 2) {
        const u = uv[0] + downIndex * .111
        const v = uv[1] + rightIndex * .166 + .166

        return {
            u1: .111 + u,
            v1: v,
            u2: u,
            v2: v - .166
        }
    }

    if (downAxis === 'x' && rightAxis === 'z' && pos.y === 0) {
        const u = uv[0] + downIndex * .111
        const v = uv[1] + rightIndex * .166

        return {
            u1: .222 - u,
            v1: .334 - v,
            u2: .333 - u,
            v2: .5 - v
        }
    }
}