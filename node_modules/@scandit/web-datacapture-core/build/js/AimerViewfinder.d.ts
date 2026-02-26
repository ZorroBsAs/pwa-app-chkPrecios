/// <reference types="emscripten" />
import { Color } from './commons/Color.js';
import { Serializable } from './private/Serializable.js';
import { Viewfinder } from './Viewfinder.js';
import { AimerViewfinderJSON } from './ViewfinderPlusRelated.js';
import './private/nativeHandle.js';
import './commons/NumberWithUnit.js';
import './commons/MeasureUnit.js';
import './commons/SizeWithUnitAndAspect.js';
import './commons/SizeMode.js';
import './commons/SizeWithAspect.js';
import './commons/SizeWithUnit.js';

declare class AimerViewfinder implements Viewfinder, Serializable<AimerViewfinderJSON> {
    frameColor: Color;
    dotColor: Color;
    private readonly type;
    constructor();
    toJSONObject(): AimerViewfinderJSON;
}

export { AimerViewfinder };
