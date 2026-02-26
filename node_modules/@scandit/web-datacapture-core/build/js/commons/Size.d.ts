/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';

interface SizeJSON {
    width: number;
    height: number;
}
declare class Size implements Serializable<SizeJSON> {
    private readonly _width;
    private readonly _height;
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;
    private static fromJSON;
    toJSONObject(): SizeJSON;
}

export { Size, type SizeJSON };
