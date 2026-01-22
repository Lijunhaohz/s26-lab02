import { Shape } from "./shape"

// The interface Circle should be hidden from outside this module
interface Square extends Shape {
    sideLen: number,
}

function newSquare(sideLen: number): Square {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { newSquare }