/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { NumberWithUnit } from './NumberWithUnit.js';
import './MeasureUnit.js';

interface MarginsWithUnitJSON {
    left: {
        value: number;
        unit: string;
    };
    right: {
        value: number;
        unit: string;
    };
    top: {
        value: number;
        unit: string;
    };
    bottom: {
        value: number;
        unit: string;
    };
}
declare class MarginsWithUnit implements Serializable<MarginsWithUnitJSON> {
    private readonly _left;
    private readonly _right;
    private readonly _top;
    private readonly _bottom;
    constructor(left: NumberWithUnit, top: NumberWithUnit, right: NumberWithUnit, bottom: NumberWithUnit);
    private static get zero();
    get left(): NumberWithUnit;
    get right(): NumberWithUnit;
    get top(): NumberWithUnit;
    get bottom(): NumberWithUnit;
    private static fromJSON;
    toJSONObject(): MarginsWithUnitJSON;
}

export { MarginsWithUnit, type MarginsWithUnitJSON };
