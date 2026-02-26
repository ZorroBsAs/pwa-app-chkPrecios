import { JSONType } from 'scandit-web-datacapture-core';
import { Serializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { ParserDataFormat } from '../ParserDataFormat.js';

interface ParserSettingsJSON extends JSONType {
    dataFormat: ParserDataFormat;
}
declare class ParserSettings implements Serializable<ParserSettingsJSON> {
    dataFormat: ParserDataFormat;
    toJSONObject(): ParserSettingsJSON;
}

export { ParserSettings, type ParserSettingsJSON };
