import { TrackedBarcode, TrackedBarcodeJSON } from '../TrackedBarcode.js';
import '@scandit/web-datacapture-core';
import '../Barcode.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface BarcodeArSessionJSON {
    addedTrackedBarcodes: Record<string, TrackedBarcodeJSON>;
    removedTrackedBarcodes: string[];
    allTrackedBarcodes: Record<string, TrackedBarcodeJSON>;
    frameSequenceId: number;
}
declare class BarcodeArSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _allTrackedBarcodes;
    private _frameSequenceId;
    private get frameSequenceId();
    get addedTrackedBarcodes(): Record<string, TrackedBarcode>;
    get removedTrackedBarcodes(): string[];
    get allTrackedBarcodes(): Record<string, TrackedBarcode>;
    private static fromJSON;
}

export { BarcodeArSession, type BarcodeArSessionJSON };
