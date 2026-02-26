/// <reference types="emscripten" />
import { Color } from './commons/Color.js';
import { NumberWithUnit } from './commons/NumberWithUnit.js';
import { Viewfinder } from './Viewfinder.js';
import { LaserlineViewfinderJSON } from './ViewfinderPlusRelated.js';
import { Serializable } from './private/Serializable.js';
import './commons/MeasureUnit.js';
import './private/nativeHandle.js';
import './commons/SizeWithUnitAndAspect.js';
import './commons/SizeMode.js';
import './commons/SizeWithAspect.js';
import './commons/SizeWithUnit.js';

declare class LaserlineViewfinder implements Viewfinder, Serializable<LaserlineViewfinderJSON> {
    width: NumberWithUnit;
    enabledColor: Color;
    disabledColor: Color;
    private readonly type;
    constructor();
    toJSONObject(): LaserlineViewfinderJSON;
}

export { LaserlineViewfinder };
