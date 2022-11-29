import type {Transform} from '.'
import type {Program} from '../Program'

export interface GameObject {
    transform: Transform
    render?: (program: Program, gl: WebGL2RenderingContext) => void
    update?: (delta: number) => void
}