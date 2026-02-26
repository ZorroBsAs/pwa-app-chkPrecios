import { ParsedField } from './ParsedData.js';
import { DataCaptureComponentJSON, DataCaptureComponent, DataCaptureContext } from 'scandit-web-datacapture-core';
import { ParserDataFormat } from './ParserDataFormat.js';
import { ParserSettingsJSON } from './private/ParserSettings.js';
import 'scandit-web-datacapture-core/build/js/private/Serializable';

interface ParserJSON extends DataCaptureComponentJSON {
    type: "parser";
    settings: ParserSettingsJSON;
}
declare class Parser implements DataCaptureComponent {
    private readonly type;
    private settings;
    private parserProxy;
    private constructor();
    get id(): string;
    static forFormat(context: DataCaptureContext, dataFormat: ParserDataFormat): Promise<Parser>;
    parseStringToJson(data: string): Promise<ParsedField[]>;
    setOptions(options: {
        [key: string]: any;
    }): Promise<boolean>;
    toJSONObject(): ParserJSON;
}

export { Parser, type ParserJSON };
