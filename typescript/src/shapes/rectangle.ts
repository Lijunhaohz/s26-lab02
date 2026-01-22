import { Shape } from "./shape"

// The interface Circle should be hidden from outside this module
interface Rectangle extends Shape {
    width: number,
    height: number,
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
