/// <reference types="emscripten" />
import { Quadrilateral } from '../../commons/Quadrilateral.js';
import '../Serializable.js';
import '../../commons/Point.js';

declare function calculateWidth(quadrilateral: Quadrilateral): number;
declare function calculateHeight(quadrilateral: Quadrilateral): number;
declare function calculateArea(quadrilateral: Quadrilateral): number;

export { calculateArea, calculateHeight, calculateWidth };
