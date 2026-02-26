import { BarcodeJSON, Barcode } from '../Barcode.js';
import 'scandit-web-datacapture-core';
import 'scandit-web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface SparkScanSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    frameSequenceId: number;
    /**
     * @deprecated Use `newlyRecognizedBarcode` instead.
     */
    newlyRecognizedBarcodes: BarcodeJSON[];
}
declare class SparkScanSession {
    newlyRecognizedBarcode: Barcode | null;
    frameSequenceID: number;
    /**
     * @deprecated Use `newlyRecognizedBarcode` instead.
     */
    newlyRecognizedBarcodes: Barcode[];
    private static fromJSON;
}

export { SparkScanSession, type SparkScanSessionJSON };
