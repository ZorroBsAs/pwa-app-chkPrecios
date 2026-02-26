import { DataCaptureOverlay, BrushJSON, Optional, Brush, DataCaptureView, PrivateDataCaptureMode, DataCaptureMode, DataCaptureModeJSON, CameraSettings, DataCaptureContext } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeBatchSession } from './BarcodeBatchSession.js';
import { BarcodeBatchSettingsJSON, BarcodeBatchSettings } from './BarcodeBatchSettings.js';
import { TrackedBarcode, TrackedBarcodeJSON } from './TrackedBarcode.js';

interface BarcodeBatchBasicOverlayListener {
    brushForTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): Optional<Brush>;
    didTapTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): void;
}
declare enum BarcodeBatchBasicOverlayStyle {
    Frame = "frame",
    Dot = "dot"
}
interface BarcodeBatchBasicOverlayJSON {
    type: "barcodeTrackingBasic";
    style: BarcodeBatchBasicOverlayStyle;
    shouldShowScanAreaGuides: boolean;
    brush: BrushJSON;
    brushesForBarcodes: Record<string, BrushJSON>;
}
declare class BarcodeBatchBasicOverlay implements DataCaptureOverlay, Serializable<BarcodeBatchBasicOverlayJSON> {
    private _listener;
    private privateListener;
    private readonly type;
    private _style;
    private barcodeBatch;
    private _shouldShowScanAreaGuides;
    private _brush;
    private _brushesForBarcodes;
    get style(): BarcodeBatchBasicOverlayStyle;
    get listener(): Optional<BarcodeBatchBasicOverlayListener>;
    set listener(listener: Optional<BarcodeBatchBasicOverlayListener>);
    get brush(): Brush;
    static withBarcodeBatch(barcodeBatch: BarcodeBatch): Promise<BarcodeBatchBasicOverlay>;
    static withBarcodeBatchForView(barcodeBatch: BarcodeBatch, view: Optional<DataCaptureView>): Promise<BarcodeBatchBasicOverlay>;
    static withBarcodeBatchForViewWithStyle(barcodeBatch: BarcodeBatch, view: Optional<DataCaptureView>, style: BarcodeBatchBasicOverlayStyle): Promise<BarcodeBatchBasicOverlay>;
    setBrush(brush: Brush): Promise<void>;
    shouldShowScanAreaGuides(): boolean;
    setShouldShowScanAreaGuides(shouldShowScanAreaGuides: boolean): Promise<void>;
    setBrushForTrackedBarcode(brush: Brush, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    toJSONObject(): BarcodeBatchBasicOverlayJSON;
}

interface PrivateBarcodeBatchListener extends BarcodeBatchListener {
    didTapTrackedBarcode?(trackedBarcode: TrackedBarcodeJSON): void;
}
declare class PrivateBarcodeBatchBasicOverlayListener implements PrivateBarcodeBatchListener {
    private basicOverlay;
    constructor(basicOverlay: BarcodeBatchBasicOverlay);
    didTapTrackedBarcode(trackedBarcode: TrackedBarcodeJSON): void;
    didUpdateSession(_: BarcodeBatch, session: BarcodeBatchSession): void;
}

interface PrivateBarcodeBatch extends PrivateDataCaptureMode {
    notifyContext: () => Promise<void>;
    addPrivateListener(listener: PrivateBarcodeBatchListener): void;
}
interface BarcodeBatchListener {
    didUpdateSession?(barcodeBatch: BarcodeBatch, session: BarcodeBatchSession): void;
}
type BarcodeBatchJSON = DataCaptureModeJSON<BarcodeBatchSettingsJSON>;
declare class BarcodeBatch implements DataCaptureMode, Serializable<BarcodeBatchJSON> {
    private readonly type;
    private _isEnabled;
    private settings;
    private _context;
    private readonly listeners;
    private readonly privateListeners;
    private readonly workerMessageListener;
    static get recommendedCameraSettings(): CameraSettings;
    get context(): DataCaptureContext | null;
    private set context(value);
    static forContext(context: DataCaptureContext | null, settings: BarcodeBatchSettings): Promise<BarcodeBatch>;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): Promise<void>;
    applySettings(settings: BarcodeBatchSettings): Promise<void>;
    addListener(listener: BarcodeBatchListener): void;
    removeListener(listener: BarcodeBatchListener): void;
    toJSONObject(): BarcodeBatchJSON;
    private attachedToContext;
    private detachedFromContext;
    private addPrivateListener;
    private removePrivateListener;
    private onWorkerMessage;
    private notifyContext;
}

export { type BarcodeBatchListener as B, type PrivateBarcodeBatch as P, BarcodeBatch as a, type BarcodeBatchBasicOverlayListener as b, BarcodeBatchBasicOverlayStyle as c, type BarcodeBatchBasicOverlayJSON as d, BarcodeBatchBasicOverlay as e, type PrivateBarcodeBatchListener as f, PrivateBarcodeBatchBasicOverlayListener as g };
