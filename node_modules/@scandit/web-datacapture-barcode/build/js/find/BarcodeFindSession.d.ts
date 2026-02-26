import { TrackedBarcode, TrackedBarcodeJSON } from '../TrackedBarcode.js';
import '@scandit/web-datacapture-core';
import '../Barcode.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface BarcodeFindSessionJSON {
    addedTrackedBarcodes: TrackedBarcodeJSON[];
    allFoundItems: string[];
    foundTrackedBarcodesInLastProcessedFrame: Record<string, TrackedBarcodeJSON>;
    removedTrackedBarcodes: string[];
    trackedBarcodes: Record<string, TrackedBarcodeJSON>;
    updatedTrackedBarcodes: TrackedBarcodeJSON[];
    frameSequenceId: number;
}
declare class BarcodeFindSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _updatedTrackedBarcodes;
    private _trackedBarcodes;
    private _frameSequenceID;
    private _allFoundItems;
    private _foundTrackedBarcodesInLastProcessedFrame;
    get foundTrackedBarcodesInLastProcessedFrame(): Record<string, TrackedBarcode | null>;
    get addedTrackedBarcodes(): TrackedBarcode[];
    get allFoundItems(): string[];
    get removedTrackedBarcodes(): string[];
    get updatedTrackedBarcodes(): TrackedBarcode[];
    get trackedBarcodes(): Record<string, TrackedBarcode>;
    get frameSequenceID(): number;
    private static fromJSON;
}

export { BarcodeFindSession, type BarcodeFindSessionJSON };
