/// <reference types="emscripten" />
import { Color } from './commons/Color.js';
import { Serializable } from './private/Serializable.js';

interface BrushJSON {
    fill: {
        color: string;
    };
    stroke: {
        color: string;
        width: number;
    };
}
declare class Brush implements Serializable<BrushJSON> {
    private readonly fill;
    private readonly stroke;
    constructor();
    constructor(fillColor: Color, strokeColor: Color, strokeWidth: number);
    static get transparent(): Brush;
    get fillColor(): Color;
    get strokeColor(): Color;
    get strokeWidth(): number;
    /**
     * @returns {Brush} A new Brush instance with identical properties
     */
    private clone;
    private static areEquals;
    toJSONObject(): BrushJSON;
    protected static fromJSONObject(json: BrushJSON): Brush;
}

export { Brush, type BrushJSON };
