import { B as BarcodeBatchListener, a as BarcodeBatch } from './BarcodeBatch-BEVGY-bY.js';
import { BarcodeBatchAdvancedOverlay } from './BarcodeBatchAdvancedOverlay.js';
import { BarcodeBatchSession } from './BarcodeBatchSession.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './BarcodeBatchSettings.js';
import './ArucoDictionary.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './Barcode.js';
import './EncodingRange.js';
import './StructuredAppendData.js';
import './SymbologySettings.js';
import './TrackedBarcode.js';
import './TrackedBarcodeView.js';

declare class PrivateBarcodeBatchAdvancedOverlayListener implements BarcodeBatchListener {
    private readonly advancedOverlay;
    constructor(advancedOverlay: BarcodeBatchAdvancedOverlay);
    didUpdateSession(_: BarcodeBatch, session: BarcodeBatchSession): void;
}

export { PrivateBarcodeBatchAdvancedOverlayListener };
