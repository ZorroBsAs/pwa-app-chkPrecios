import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { EncodingRangeJSON, EncodingRange } from './EncodingRange.js';

interface StructuredAppendDataJSON {
    barcodeSetId: string;
    scannedSegmentCount: number;
    totalSegmentCount: number;
    complete: boolean;
    completeDataEncodings: EncodingRangeJSON[];
    completeDataRaw: string;
    completeDataUtf8String: string | null;
}
declare class StructuredAppendData implements Serializable<StructuredAppendDataJSON> {
    private _barcodeSetId;
    private _completeData;
    private _encodingRanges;
    private _complete;
    private _rawCompleteData;
    private _scannedSegmentCount;
    private _totalSegmentCount;
    get barcodeSetId(): string;
    get completeData(): string | null;
    get encodingRanges(): EncodingRange[];
    get isComplete(): boolean;
    get rawCompleteData(): string;
    get scannedSegmentCount(): number;
    get totalSegmentCount(): number;
    private static fromJSON;
    toJSONObject(): StructuredAppendDataJSON;
}

export { StructuredAppendData, type StructuredAppendDataJSON };
