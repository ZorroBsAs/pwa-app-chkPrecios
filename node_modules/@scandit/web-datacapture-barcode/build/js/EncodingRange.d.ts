import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

interface EncodingRangeJSON {
    endIndex: number;
    ianaName: string;
    startIndex: number;
}
declare class EncodingRange implements Serializable<EncodingRangeJSON> {
    private _endIndex;
    private _ianaName;
    private _startIndex;
    get endIndex(): number;
    get ianaName(): string;
    get startIndex(): number;
    private static fromJSON;
    toJSONObject(): EncodingRangeJSON;
}

export { EncodingRange, type EncodingRangeJSON };
