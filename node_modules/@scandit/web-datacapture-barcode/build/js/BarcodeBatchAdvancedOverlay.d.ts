import { DataCaptureOverlay, DataCaptureView, Anchor, PointWithUnit } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { a as BarcodeBatch } from './BarcodeBatch-BEVGY-bY.js';
import { TrackedBarcode } from './TrackedBarcode.js';
import { TrackedBarcodeView } from './TrackedBarcodeView.js';
import './BarcodeBatchSession.js';
import './BarcodeBatchSettings.js';
import './ArucoDictionary.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './Barcode.js';
import './EncodingRange.js';
import './StructuredAppendData.js';
import './SymbologySettings.js';

interface BarcodeBatchAdvancedOverlayListener {
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Promise<TrackedBarcodeView | null>;
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
}
interface BarcodeBatchAdvancedOverlayJSON {
    type: "barcodeTrackingAdvanced";
    shouldShowScanAreaGuides: boolean;
}
declare class BarcodeBatchAdvancedOverlay implements DataCaptureOverlay, Serializable<BarcodeBatchAdvancedOverlayJSON> {
    listener: BarcodeBatchAdvancedOverlayListener | null;
    private readonly type;
    private barcodeBatch;
    private _shouldShowScanAreaGuides;
    private _viewForBarcode;
    private _anchorForBarcode;
    private _offsetForBarcode;
    private _viewForBarcodeFromListener;
    private _anchorForBarcodeFromListener;
    private _offsetForBarcodeFromListener;
    private _anchorPositions;
    private _barcodeForId;
    private privateListener;
    private view;
    private lastSession;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withBarcodeBatchForView(barcodeBatch: BarcodeBatch, view: DataCaptureView | null): Promise<BarcodeBatchAdvancedOverlay>;
    setViewForTrackedBarcode(view: Promise<TrackedBarcodeView | null> | null, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): void;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): void;
    clearTrackedBarcodeViews(): void;
    toJSONObject(): BarcodeBatchAdvancedOverlayJSON;
    private getTrackedBarcodeForIdentifier;
    private setViewForTrackedBarcodeFromListener;
    private processRemovedBarcodes;
    private processAddedBarcodes;
    private processUpdatedTrackedBarcodes;
    /**
     * Used in PrivateBarcodeBatchAdvancedOverlayListener.
     * Triggers a render into the view
     * @param session {BarcodeBatchSession}
     * @private
     * @hidden
     */
    private update;
}

export { BarcodeBatchAdvancedOverlay, type BarcodeBatchAdvancedOverlayJSON, type BarcodeBatchAdvancedOverlayListener };
