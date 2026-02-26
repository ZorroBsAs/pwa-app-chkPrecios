/// <reference types="emscripten" />
import { Serializable } from '../private/Serializable.js';
import { SizingMode } from './SizeMode.js';
import { SizeWithAspect } from './SizeWithAspect.js';
import { SizeWithUnit } from './SizeWithUnit.js';
import './NumberWithUnit.js';
import './MeasureUnit.js';

interface SizeWithUnitAndAspectJSON {
    width?: {
        value: number;
        unit: string;
    };
    height?: {
        value: number;
        unit: string;
    };
    shorterDimension?: {
        value: number;
        unit: string;
    };
    aspect?: number;
}
declare class SizeWithUnitAndAspect implements Serializable<SizeWithUnitAndAspectJSON> {
    private _widthAndHeight;
    private _widthAndAspectRatio;
    private _heightAndAspectRatio;
    private _shorterDimensionAndAspectRatio;
    get widthAndHeight(): SizeWithUnit | null;
    get widthAndAspectRatio(): SizeWithAspect | null;
    get heightAndAspectRatio(): SizeWithAspect | null;
    get shorterDimensionAndAspectRatio(): SizeWithAspect | null;
    get sizingMode(): SizingMode;
    private static sizeWithWidthAndHeight;
    private static sizeWithWidthAndAspectRatio;
    private static sizeWithHeightAndAspectRatio;
    private static sizeWithShorterDimensionAndAspectRatio;
    private static fromJSON;
    toJSONObject(): SizeWithUnitAndAspectJSON;
}

export { SizeWithUnitAndAspect, type SizeWithUnitAndAspectJSON };
