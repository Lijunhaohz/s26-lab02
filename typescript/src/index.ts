import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";

const rectangle: Shape = newRectangle(2, 3)
const circle: Shape = newCircle(2)
const square: Shape = newSquare(4)

const rectangleRenderer = newRenderer(rectangle)
rectangleRenderer.draw();

const circleRenderer = newRenderer(circle)
circleRenderer.draw();

const squareRenderer = newRenderer(square)
squareRenderer.draw();
