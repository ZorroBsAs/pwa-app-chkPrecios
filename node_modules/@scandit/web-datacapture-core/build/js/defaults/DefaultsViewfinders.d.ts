/// <reference types="emscripten" />
import { Color } from '../commons/Color.js';
import { NumberWithUnit } from '../commons/NumberWithUnit.js';
import { SizeWithUnitAndAspect } from '../commons/SizeWithUnitAndAspect.js';
import { RectangularViewfinderStyle, RectangularViewfinderLineStyle, RectangularViewfinderAnimation } from '../ViewfinderPlusRelated.js';
import '../private/Serializable.js';
import '../commons/MeasureUnit.js';
import '../commons/SizeMode.js';
import '../commons/SizeWithAspect.js';
import '../commons/SizeWithUnit.js';

declare const defaultViewfinders: {
    LaserlineViewfinder: {
        width: NumberWithUnit;
        enabledColor: Color;
        disabledColor: Color;
    };
    RectangularViewfinder: {
        defaultStyle: RectangularViewfinderStyle;
        styles: {
            rounded: {
                size: SizeWithUnitAndAspect;
                color: Color;
                style: RectangularViewfinderStyle;
                lineStyle: RectangularViewfinderLineStyle;
                dimming: number;
                animation: RectangularViewfinderAnimation | null;
            };
            square: {
                size: SizeWithUnitAndAspect;
                color: Color;
                style: RectangularViewfinderStyle;
                lineStyle: RectangularViewfinderLineStyle;
                dimming: number;
                animation: RectangularViewfinderAnimation | null;
            };
        };
    };
    AimerViewfinder: {
        frameColor: Color;
        dotColor: Color;
    };
};
type ViewfindersDefaults = typeof defaultViewfinders;

export { type ViewfindersDefaults, defaultViewfinders };
