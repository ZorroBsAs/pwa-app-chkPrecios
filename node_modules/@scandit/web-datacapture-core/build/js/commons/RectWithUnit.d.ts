/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { PointWithUnitJSON, PointWithUnit } from './PointWithUnit.js';
import { SizeWithUnitJSON, SizeWithUnit } from './SizeWithUnit.js';
import './NumberWithUnit.js';
import './MeasureUnit.js';

interface RectWithUnitJSON {
    origin: PointWithUnitJSON;
    size: SizeWithUnitJSON;
}
declare class RectWithUnit implements Serializable<RectWithUnitJSON> {
    private readonly _origin;
    private readonly _size;
    constructor(origin: PointWithUnit, size: SizeWithUnit);
    get origin(): PointWithUnit;
    get size(): SizeWithUnit;
    toJSONObject(): RectWithUnitJSON;
}

export { RectWithUnit, type RectWithUnitJSON };
