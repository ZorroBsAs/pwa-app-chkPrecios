/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { NumberWithUnit } from './NumberWithUnit.js';
import './MeasureUnit.js';

interface SizeWithUnitJSON {
    width: {
        value: number;
        unit: string;
    };
    height: {
        value: number;
        unit: string;
    };
}
declare class SizeWithUnit implements Serializable<SizeWithUnitJSON> {
    private readonly _width;
    private readonly _height;
    constructor(width: NumberWithUnit, height: NumberWithUnit);
    get width(): NumberWithUnit;
    get height(): NumberWithUnit;
    private static fromJSON;
    isSameAs(other: SizeWithUnit): boolean;
    toJSONObject(): SizeWithUnitJSON;
}

export { SizeWithUnit, type SizeWithUnitJSON };
