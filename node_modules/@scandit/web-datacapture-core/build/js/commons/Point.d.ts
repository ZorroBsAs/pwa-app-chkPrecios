/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';

interface PointJSON {
    x: number;
    y: number;
}
declare class Point implements Serializable<PointJSON> {
    private readonly _x;
    private readonly _y;
    constructor(x: number, y: number);
    get x(): number;
    get y(): number;
    private static mirrorX;
    private static fromJSON;
    toJSONObject(): PointJSON;
    private static areEquals;
}

export { Point, type PointJSON };
