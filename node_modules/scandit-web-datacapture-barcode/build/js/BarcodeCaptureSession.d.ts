import { StringSerializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { BarcodeJSON, Barcode } from './Barcode.js';
import { LocalizedOnlyBarcodeJSON, LocalizedOnlyBarcode } from './LocalizedOnlyBarcode.js';
import 'scandit-web-datacapture-core';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface BarcodeCaptureSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    newlyLocalizedBarcodes: LocalizedOnlyBarcodeJSON[];
    frameSequenceId: number;
    /**
     * @deprecated Use `newlyRecognizedBarcode` instead.
     */
    newlyRecognizedBarcodes: BarcodeJSON[];
}
declare class BarcodeCaptureSession implements StringSerializable {
    private _newlyRecognizedBarcodes;
    private _newlyRecognizedBarcode;
    private _newlyLocalizedBarcodes;
    private _frameSequenceID;
    get newlyRecognizedBarcode(): Barcode | null;
    get newlyLocalizedBarcodes(): LocalizedOnlyBarcode[];
    get frameSequenceID(): number;
    /**
     * @deprecated Use `newlyRecognizedBarcode` instead.
     */
    get newlyRecognizedBarcodes(): Barcode[];
    private static fromJSON;
    toJSON(): string;
}

export { BarcodeCaptureSession, type BarcodeCaptureSessionJSON };
