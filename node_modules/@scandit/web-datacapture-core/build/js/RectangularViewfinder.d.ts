/// <reference types="emscripten" />
import { SizeWithUnit } from './commons/SizeWithUnit.js';
import { Color } from './commons/Color.js';
import { NumberWithUnit } from './commons/NumberWithUnit.js';
import { SizeWithUnitAndAspect } from './commons/SizeWithUnitAndAspect.js';
import { Viewfinder } from './Viewfinder.js';
import { RectangularViewfinderJSON, RectangularViewfinderStyle, RectangularViewfinderLineStyle, RectangularViewfinderAnimation } from './ViewfinderPlusRelated.js';
import { Serializable } from './private/Serializable.js';
import './commons/MeasureUnit.js';
import './commons/SizeMode.js';
import './commons/SizeWithAspect.js';
import './private/nativeHandle.js';

declare class RectangularViewfinder implements Viewfinder, Serializable<RectangularViewfinderJSON> {
    color: Color;
    private readonly _lineStyle;
    private readonly _style;
    private readonly type;
    private _animation;
    private _dimming;
    private _sizeWithUnitAndAspect;
    private _disabledColor;
    constructor(style?: RectangularViewfinderStyle, lineStyle?: RectangularViewfinderLineStyle);
    get animation(): RectangularViewfinderAnimation | null;
    set animation(animation: RectangularViewfinderAnimation | null);
    get dimming(): number;
    set dimming(value: number);
    get lineStyle(): RectangularViewfinderLineStyle;
    get sizeWithUnitAndAspect(): SizeWithUnitAndAspect;
    get style(): RectangularViewfinderStyle;
    get disabledColor(): Color;
    set disabledColor(disabledColor: Color);
    setHeightAndAspectRatio(height: NumberWithUnit, widthToHeightAspectRatio: number): void;
    setShorterDimensionAndAspectRatio(fraction: number, aspectRatio: number): void;
    setSize(size: SizeWithUnit): void;
    setWidthAndAspectRatio(width: NumberWithUnit, heightToWidthAspectRatio: number): void;
    toJSONObject(): RectangularViewfinderJSON;
}

export { RectangularViewfinder };
