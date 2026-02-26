/// <reference types="emscripten" />
import { StringSerializable } from '../private/Serializable.js';

type ColorJSON = string;
declare class Color implements StringSerializable {
    private readonly hexadecimalString;
    private constructor();
    get redComponent(): string;
    get greenComponent(): string;
    get blueComponent(): string;
    get alphaComponent(): string;
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number;
    static fromHex(hex: string): Color;
    static fromRGBA(red: number, green: number, blue: number, alpha?: number): Color;
    private static areEquals;
    private static hexToNumber;
    private static fromJSON;
    private static numberToHex;
    private static normalizeHex;
    private static normalizeAlpha;
    withAlpha(alpha: number): Color;
    toJSON(): string;
}

export { Color, type ColorJSON };
