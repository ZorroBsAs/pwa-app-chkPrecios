/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { PointJSON, Point } from './Point.js';
import { SizeJSON, Size } from './Size.js';

interface RectJSON {
    origin: PointJSON;
    size: SizeJSON;
}
declare class Rect implements Serializable<RectJSON> {
    private readonly _origin;
    private readonly _size;
    constructor(origin: Point, size: Size);
    get origin(): Point;
    get size(): Size;
    toJSONObject(): RectJSON;
}

export { Rect, type RectJSON };
