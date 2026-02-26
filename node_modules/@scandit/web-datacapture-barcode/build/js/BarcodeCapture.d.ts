import { PrivateDataCaptureMode, DataCaptureMode, DataCaptureModeJSON, CameraSettings, DataCaptureContext, FrameData } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeCaptureFeedbackJSON, BarcodeCaptureFeedback } from './BarcodeCaptureFeedback.js';
import { BarcodeCaptureSession } from './BarcodeCaptureSession.js';
import { BarcodeCaptureSettingsJSON, BarcodeCaptureSettings } from './BarcodeCaptureSettings.js';
import './Barcode.js';
import './EncodingRange.js';
import './StructuredAppendData.js';
import './LocalizedOnlyBarcode.js';
import './ArucoDictionary.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './ScanIntention.js';
import './SymbologySettings.js';

interface PrivateBarcodeCapture extends PrivateDataCaptureMode {
    notifyContext: () => Promise<void>;
}
interface BarcodeCaptureListener {
    didScan?: (barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, frameData: FrameData) => void;
    didUpdateSession?: (barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession) => void;
}
type BarcodeCaptureJSON = DataCaptureModeJSON<BarcodeCaptureSettingsJSON> & {
    feedback: BarcodeCaptureFeedbackJSON;
};
declare class BarcodeCapture implements DataCaptureMode, Serializable<BarcodeCaptureJSON> {
    private readonly type;
    private _isEnabled;
    private _feedback;
    private settings;
    private _context;
    private readonly listeners;
    private allowedRemainingWorkerMessages;
    private readonly workerMessageListener;
    static get recommendedCameraSettings(): CameraSettings;
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeCaptureFeedback;
    static forContext(context: DataCaptureContext | null, settings: BarcodeCaptureSettings): Promise<BarcodeCapture>;
    setFeedback(feedback: BarcodeCaptureFeedback): Promise<void>;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): Promise<void>;
    applySettings(settings: BarcodeCaptureSettings): Promise<void>;
    addListener(listener: BarcodeCaptureListener): void;
    removeListener(listener: BarcodeCaptureListener): void;
    toJSONObject(): BarcodeCaptureJSON;
    private sendClearFrameDataRequest;
    private onDidScan;
    private onDidUpdateSession;
    private onSuccessFeedback;
    private onWorkerMessage;
    private notifyContext;
}

export { BarcodeCapture, type BarcodeCaptureListener, type PrivateBarcodeCapture };
