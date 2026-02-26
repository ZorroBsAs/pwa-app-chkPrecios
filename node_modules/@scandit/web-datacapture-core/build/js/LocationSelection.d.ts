/// <reference types="emscripten" />
import { NumberWithUnitJSON, NumberWithUnit } from './commons/NumberWithUnit.js';
import { SizeWithUnit } from './commons/SizeWithUnit.js';
import { SizeWithUnitAndAspectJSON, SizeWithUnitAndAspect } from './commons/SizeWithUnitAndAspect.js';
import { Serializable } from './private/Serializable.js';
import './commons/MeasureUnit.js';
import './commons/SizeMode.js';
import './commons/SizeWithAspect.js';

interface LocationSelectionJSON {
    type: string;
}
interface LocationSelection extends Serializable<LocationSelectionJSON> {
    toJSONObject: () => any;
}
declare const PrivateNoneLocationSelection: {
    type: string;
};
interface RadiusLocationSelectionJSON {
    type: "radius";
    radius: NumberWithUnitJSON;
}
interface RectangularLocationSelectionJSON {
    type: "rectangular";
    size: SizeWithUnitAndAspectJSON;
}
declare class RadiusLocationSelection implements LocationSelection, Serializable<RadiusLocationSelectionJSON> {
    private readonly type;
    private readonly _radius;
    get radius(): NumberWithUnit;
    constructor(radius: NumberWithUnit);
    toJSONObject(): RadiusLocationSelectionJSON;
}
declare class RectangularLocationSelection implements LocationSelection, Serializable<RectangularLocationSelectionJSON> {
    private readonly type;
    private _sizeWithUnitAndAspect;
    get sizeWithUnitAndAspect(): SizeWithUnitAndAspect;
    static withSize(size: SizeWithUnit): RectangularLocationSelection;
    static withWidthAndAspectRatio(width: NumberWithUnit, heightToWidthAspectRatio: number): RectangularLocationSelection;
    static withHeightAndAspectRatio(height: NumberWithUnit, widthToHeightAspectRatio: number): RectangularLocationSelection;
    toJSONObject(): RectangularLocationSelectionJSON;
}

export { type LocationSelection, type LocationSelectionJSON, PrivateNoneLocationSelection, RadiusLocationSelection, RectangularLocationSelection };
