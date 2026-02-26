/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { PointJSON, Point } from './Point.js';

interface QuadrilateralJSON {
    topLeft: PointJSON;
    topRight: PointJSON;
    bottomRight: PointJSON;
    bottomLeft: PointJSON;
}
declare class Quadrilateral implements Serializable<QuadrilateralJSON> {
    private readonly _topLeft;
    private readonly _topRight;
    private readonly _bottomRight;
    private readonly _bottomLeft;
    constructor(topLeft: Point, topRight: Point, bottomRight: Point, bottomLeft: Point);
    get topLeft(): Point;
    get topRight(): Point;
    get bottomRight(): Point;
    get bottomLeft(): Point;
    protected static fromJSON(json: QuadrilateralJSON): Quadrilateral;
    toJSONObject(): QuadrilateralJSON;
}

export { Quadrilateral, type QuadrilateralJSON };
