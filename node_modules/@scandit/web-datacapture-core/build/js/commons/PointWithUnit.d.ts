/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { NumberWithUnit } from './NumberWithUnit.js';
import './MeasureUnit.js';

interface PointWithUnitJSON {
    x: {
        value: number;
        unit: string;
    };
    y: {
        value: number;
        unit: string;
    };
}
declare class PointWithUnit implements Serializable<PointWithUnitJSON> {
    private readonly _x;
    private readonly _y;
    constructor(x: NumberWithUnit, y: NumberWithUnit);
    private static get zero();
    get x(): NumberWithUnit;
    get y(): NumberWithUnit;
    private static fromJSON;
    toJSONObject(): PointWithUnitJSON;
}

export { PointWithUnit, type PointWithUnitJSON };
