/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { MeasureUnit } from './MeasureUnit.js';

interface NumberWithUnitJSON {
    value: number;
    unit: string;
}
declare class NumberWithUnit implements Serializable<NumberWithUnitJSON> {
    private readonly _value;
    private readonly _unit;
    constructor(value: number, unit: MeasureUnit);
    get value(): number;
    get unit(): MeasureUnit;
    private static fromJSON;
    toJSONObject(): NumberWithUnitJSON;
}

export { NumberWithUnit, type NumberWithUnitJSON };
