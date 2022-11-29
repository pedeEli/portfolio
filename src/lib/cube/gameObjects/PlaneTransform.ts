import {V4, V3} from '../math'
import {Transform} from './Transform'

import type {GameObject, CalcTransform} from '.'
import type {Quaternion} from '../math'

export class PlaneTransform extends Transform {
    public left!: V3
    public top!: V3
    public normal!: V3
    public topLeft!: V3
    public bottomRight!: V3

    public constructor(position: V3, rotation: Quaternion, calcTransform: CalcTransform, parent?: GameObject) {
        super(position, rotation, calcTransform, parent)
        this._setTransforms()
    }

    protected _setTransforms() {
        super._setTransforms()

        
        const rotationTransform = this.globalTransform.inverse.transpose
        
        this.left = rotationTransform.mult(new V4(0, -1, 0, 1)).toV3().normalized
        this.top = rotationTransform.mult(new V4(-1, 0, 0, 1)).toV3().normalized
        this.normal = rotationTransform.mult(new V4(0, 0, -1, 1)).toV3().normalized

        this.topLeft = this.globalTransform.mult(new V4(.5, .5, 0, 1)).toV3()
        this.bottomRight = this.topLeft.add(this.left).add(this.top)
    }
}