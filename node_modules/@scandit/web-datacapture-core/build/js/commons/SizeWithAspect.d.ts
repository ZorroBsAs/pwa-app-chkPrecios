/// <reference types="emscripten" />
import { NumberWithUnit } from './NumberWithUnit.js';
import '../private/Serializable.js';
import './MeasureUnit.js';

declare class SizeWithAspect {
    private readonly _size;
    private readonly _aspect;
    constructor(size: NumberWithUnit, aspect: number);
    get size(): NumberWithUnit;
    get aspect(): number;
}

export { SizeWithAspect };
