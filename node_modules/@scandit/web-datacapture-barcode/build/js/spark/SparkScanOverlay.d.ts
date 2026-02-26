import { BrushJSON, DataCaptureOverlay, DataCaptureView, NumberWithUnit, Brush } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { SparkScan } from './SparkScan.js';
import { SparkScanOverlayStyle } from './SparkScanOverlayStyle.js';
import { SparkScanTargetAimerViewfinderJSON } from './SparkScanTargetAimerViewfinder.js';
import './SparkScanSession.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import './SparkScanSettings.js';
import '../ScanIntention.js';
import '../SymbologySettings.js';

interface SparkScanOverlayJSON {
    type: "sparkScan";
    brush: BrushJSON;
    errorBrush: BrushJSON;
    shouldShowScanAreaGuides: boolean;
    style: SparkScanOverlayStyle;
    viewfinder: SparkScanTargetAimerViewfinderJSON;
    shouldRemoveLocationsAfterScan: boolean;
    shouldDrawViewfinder: boolean;
}
declare class SparkScanOverlay implements DataCaptureOverlay, Serializable<SparkScanOverlayJSON> {
    private readonly type;
    private _brush;
    private _errorBrush?;
    private _shouldShowScanAreaGuides;
    private _shouldRemoveLocationsAfterScan;
    private _shouldDrawViewfinder;
    private _style;
    private _viewfinder;
    private sparkScan;
    get style(): SparkScanOverlayStyle;
    static withSparkScanForView(sparkScan: SparkScan, view: DataCaptureView | null): Promise<SparkScanOverlay>;
    setRadius(radius: NumberWithUnit): void;
    getBrush(): Brush;
    setBrush(brush: Brush): Promise<void>;
    overlayReadyForDraw(): Promise<void>;
    setErrorBrush(brush: Brush): Promise<void>;
    setShouldShowScanAreaGuides(shouldShowScanAreaGuides: boolean): Promise<void>;
    setShouldRemoveLocationsAfterScan(shouldRemoveLocationsAfterScan: boolean): Promise<void>;
    setShouldDrawViewfinder(shouldDrawViewfinder: boolean): Promise<void>;
    shouldShowScanAreaGuides(): boolean;
    shouldRemoveLocationsAfterScan(): boolean;
    toJSONObject(): SparkScanOverlayJSON;
}

export { SparkScanOverlay, type SparkScanOverlayJSON };
