import { BrushJSON, ViewfinderJSON, DataCaptureOverlay, DataCaptureView, Brush, Viewfinder } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeCapture } from './BarcodeCapture.js';
import './BarcodeCaptureFeedback.js';
import './BarcodeCaptureSession.js';
import './Barcode.js';
import './EncodingRange.js';
import './StructuredAppendData.js';
import './LocalizedOnlyBarcode.js';
import './BarcodeCaptureSettings.js';
import './ArucoDictionary.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './ScanIntention.js';
import './SymbologySettings.js';

interface BarcodeCaptureOverlayJSON {
    brush: BrushJSON;
    drawLocalizedOnlyBarcodes: boolean;
    shouldShowScanAreaGuides: boolean;
    shouldRemoveLocationsAfterScan: boolean;
    type: "barcodeCapture";
    viewfinder: ViewfinderJSON;
}
declare class BarcodeCaptureOverlay implements DataCaptureOverlay, Serializable<BarcodeCaptureOverlayJSON> {
    private readonly type;
    private _brush;
    private _shouldShowScanAreaGuides;
    private _shouldRemoveLocationsAfterScan;
    private _viewfinder;
    private barcodeCapture;
    static withBarcodeCapture(barcodeCapture: BarcodeCapture): Promise<BarcodeCaptureOverlay>;
    static withBarcodeCaptureForView(barcodeCapture: BarcodeCapture, view: DataCaptureView | null): Promise<BarcodeCaptureOverlay>;
    getBrush(): Brush;
    getViewfinder(): Viewfinder | null;
    setBrush(brush: Brush): Promise<void>;
    setShouldShowScanAreaGuides(shouldShowScanAreaGuides: boolean): Promise<void>;
    setShouldRemoveLocationsAfterScan(shouldRemoveLocationsAfterScan: boolean): Promise<void>;
    setViewfinder(viewfinder: Viewfinder | null): Promise<void>;
    shouldShowScanAreaGuides(): boolean;
    shouldRemoveLocationsAfterScan(): boolean;
    toJSONObject(): BarcodeCaptureOverlayJSON;
}

export { BarcodeCaptureOverlay, type BarcodeCaptureOverlayJSON };
