import { DataCaptureMode, DataCaptureModeJSON, CameraSettings, DataCaptureContext, FrameData } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeFindFeedback } from './BarcodeFindFeedback.js';
import { BarcodeFindItem } from './BarcodeFindItem.js';
import { BarcodeFindSession } from './BarcodeFindSession.js';
import { BarcodeFindTransformer } from './BarcodeFindTransformer.js';
import { BarcodeFindSettingsJSON, BarcodeFindSettings } from './BarcodeFindSettings.js';
import '../TrackedBarcode.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../SymbologySettings.js';

interface BarcodeFindListener {
    didStartSearch(): void;
    didPauseSearch(foundItems: BarcodeFindItem[]): void;
    didStopSearch(foundItems: BarcodeFindItem[]): void;
}
interface PrivateBarcodeFindListener extends BarcodeFindListener {
    onDidUpdateSession?(mode: BarcodeFind, session: BarcodeFindSession, frameData: FrameData): void;
    onFindListUpdatedFeedback?: () => void;
    onSetItemList?: (itemList: BarcodeFindItem[]) => void;
    onFeedback?: () => void;
}
type BarcodeFindJSON = DataCaptureModeJSON<BarcodeFindSettingsJSON>;
declare class BarcodeFind implements DataCaptureMode, Serializable<BarcodeFindJSON> {
    feedback: BarcodeFindFeedback;
    private skipSerialization;
    private readonly type;
    private _isEnabled;
    private settings;
    private _context;
    private readonly listeners;
    private readonly privateListeners;
    private readonly workerMessageListener;
    private _transformer;
    static get recommendedCameraSettings(): CameraSettings;
    get context(): DataCaptureContext | null;
    get allListeners(): PrivateBarcodeFindListener[];
    static forSettings(settings: BarcodeFindSettings): Promise<BarcodeFind>;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): Promise<void>;
    applySettings(settings: BarcodeFindSettings): Promise<void>;
    addListener(listener: BarcodeFindListener): void;
    removeListener(listener: BarcodeFindListener): void;
    setItemList(items: BarcodeFindItem[]): Promise<void>;
    setBarcodeTransformer(barcodeTransformer: BarcodeFindTransformer | null): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    toJSONObject(): BarcodeFindJSON;
    private workerCommand;
    private attachedToContext;
    private detachedFromContext;
    private onWorkerMessage;
    private addPrivateListener;
    private removePrivateListener;
}

export { BarcodeFind, type BarcodeFindListener, type PrivateBarcodeFindListener };
