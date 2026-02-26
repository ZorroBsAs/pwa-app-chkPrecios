import { TrackedBarcodeJSON, TrackedBarcode } from './TrackedBarcode.js';
import 'scandit-web-datacapture-core';
import './Barcode.js';
import 'scandit-web-datacapture-core/build/js/private/Serializable';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface BarcodeTrackingSessionJSON {
    addedTrackedBarcodes: TrackedBarcodeJSON[];
    removedTrackedBarcodes: string[];
    updatedTrackedBarcodes: TrackedBarcodeJSON[];
    trackedBarcodes: Record<string, TrackedBarcodeJSON>;
    frameSequenceId: number;
}
declare class BarcodeTrackingSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _updatedTrackedBarcodes;
    private _trackedBarcodes;
    private _frameSequenceID;
    get addedTrackedBarcodes(): TrackedBarcode[];
    get removedTrackedBarcodes(): string[];
    get updatedTrackedBarcodes(): TrackedBarcode[];
    get trackedBarcodes(): Record<string, TrackedBarcode>;
    get frameSequenceID(): number;
    private static fromJSON;
}

export { BarcodeTrackingSession, type BarcodeTrackingSessionJSON };
