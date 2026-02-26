import { FrameData, DataCaptureMode, DataCaptureContext, DataCaptureModeJSON } from 'scandit-web-datacapture-core';
import { Serializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { SparkScanSession } from './SparkScanSession.js';
import { SparkScanSettings, SparkScanSettingsJSON } from './SparkScanSettings.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../ScanIntention.js';
import '../SymbologySettings.js';

interface SparkScanListener {
    didScan?: (sparkScan: SparkScan, session: SparkScanSession, frameData: FrameData) => void;
    didUpdateSession?: (sparkScan: SparkScan, session: SparkScanSession) => void;
}
type SparkScanJSON = DataCaptureModeJSON<SparkScanSettingsJSON>;
declare class SparkScan implements DataCaptureMode, Serializable<SparkScanJSON> {
    private readonly type;
    private _isEnabled;
    private settings;
    private _context;
    private readonly listeners;
    private allowedRemainingWorkerMessages;
    private readonly workerMessageListener;
    private static get recommendedCameraSettings();
    get context(): DataCaptureContext | null;
    static forSettings(settings: SparkScanSettings): SparkScan;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): Promise<void>;
    applySettings(settings: SparkScanSettings): Promise<void>;
    addListener(listener: SparkScanListener): void;
    removeListener(listener: SparkScanListener): void;
    toJSONObject(): SparkScanJSON;
    private workerCommand;
    private attachedToContext;
    private detachedFromContext;
    private sendClearFrameDataRequest;
    private onDidScan;
    private onDidUpdateSession;
    private onWorkerMessage;
    private notifyContext;
}

export { SparkScan, type SparkScanListener };
