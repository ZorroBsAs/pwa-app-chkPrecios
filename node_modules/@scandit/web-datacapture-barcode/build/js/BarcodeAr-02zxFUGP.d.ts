import { FrameData, DataCaptureMode, DataCaptureModeJSON, DataCaptureContext, CameraSettings } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeArSettingsJSON, BarcodeArSettings } from './ar/BarcodeArSettings.js';
import { BarcodeArFeedback } from './ar/BarcodeArFeedback.js';
import { BarcodeArSession } from './ar/BarcodeArSession.js';

interface BarcodeArListener {
    didUpdateSession?(barcodeAr: BarcodeAr, session: BarcodeArSession, frameData: FrameData): void;
}
type PrivateBarcodeArListener = BarcodeArListener;

type BarcodeArJSON = DataCaptureModeJSON<BarcodeArSettingsJSON>;
declare class BarcodeAr implements DataCaptureMode, Serializable<BarcodeArJSON> {
    private _feedback;
    private skipSerialization;
    private readonly type;
    private _isEnabled;
    private settings;
    private _context;
    private listeners;
    private readonly privateListeners;
    private readonly workerMessageListener;
    get context(): DataCaptureContext | null;
    static createRecommendedCameraSettings(): CameraSettings;
    private set context(value);
    private get allListeners();
    static forContext(context: DataCaptureContext, settings: BarcodeArSettings): Promise<BarcodeAr>;
    isEnabled(): boolean;
    addListener(listener: BarcodeArListener): void;
    removeListener(listener: BarcodeArListener): void;
    set feedback(feedback: BarcodeArFeedback);
    get feedback(): BarcodeArFeedback;
    setEnabled(enabled: boolean): Promise<void>;
    applySettings(settings: BarcodeArSettings): Promise<void>;
    toJSONObject(): BarcodeArJSON;
    private attachedToContext;
    private detachedFromContext;
    private start;
    private stop;
    private pause;
    private workerCommand;
    private addPrivateListener;
    private removePrivateListener;
    private onWorkerMessage;
}

export { BarcodeAr as B, type PrivateBarcodeArListener as P, type BarcodeArListener as a };
