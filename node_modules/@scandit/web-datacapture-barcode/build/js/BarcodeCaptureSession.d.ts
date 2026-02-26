import { StringSerializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { Barcode, BarcodeJSON } from './Barcode.js';
import { LocalizedOnlyBarcode, LocalizedOnlyBarcodeJSON } from './LocalizedOnlyBarcode.js';
import '@scandit/web-datacapture-core';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface BarcodeCaptureSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    newlyLocalizedBarcodes: LocalizedOnlyBarcodeJSON[];
    frameSequenceId: number;
}
declare class BarcodeCaptureSession implements StringSerializable {
    private _newlyRecognizedBarcode;
    private _newlyLocalizedBarcodes;
    private _frameSequenceID;
    get newlyRecognizedBarcode(): Barcode | null;
    get newlyLocalizedBarcodes(): LocalizedOnlyBarcode[];
    get frameSequenceID(): number;
    private static fromJSON;
    toJSON(): string;
}

export { BarcodeCaptureSession, type BarcodeCaptureSessionJSON };
