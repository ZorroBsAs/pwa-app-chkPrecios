import { Barcode, BarcodeJSON } from '../Barcode.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface SparkScanSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    frameSequenceId: number;
}
declare class SparkScanSession {
    newlyRecognizedBarcode: Barcode | null;
    frameSequenceID: number;
    private static fromJSON;
}

export { SparkScanSession, type SparkScanSessionJSON };
