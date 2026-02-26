import { PrivateLoadableFrameData } from '@scandit/web-datacapture-core';
import { Module as Module$1, CaptureModeDeserializerInstance, JSONParseable, WasmFrameData, EmscriptenClassHandle, Vector, DataCaptureCallbackMessageKeys as DataCaptureCallbackMessageKeys$1, DataCaptureCallbackMessage as DataCaptureCallbackMessage$1, AnyDataCaptureActionMessage as AnyDataCaptureActionMessage$1, DataCaptureActionMessageKey as DataCaptureActionMessageKey$1, WorkerResponse as WorkerResponse$1 } from '@scandit/web-datacapture-core/build/js/worker/index';
import { Property } from './PropertyBehaviorSubject.js';
import { BarcodeBatchSessionJSON } from '../BarcodeBatchSession.js';
import { BarcodeCaptureSessionJSON } from '../BarcodeCaptureSession.js';
import { TrackedBarcodeJSON } from '../TrackedBarcode.js';
import { BarcodeArSessionJSON } from '../ar/BarcodeArSession.js';
import { BarcodeArSettingsJSON } from '../ar/BarcodeArSettings.js';
import { BarcodeFindBasicOverlayJSON } from '../find/BarcodeFindBasicOverlay.js';
import { BarcodeFindItemJSON } from '../find/BarcodeFindItem.js';
import { BarcodeFindSessionJSON } from '../find/BarcodeFindSession.js';
import { BarcodeFindSettingsJSON } from '../find/BarcodeFindSettings.js';
import { SparkScanSessionJSON } from '../spark/SparkScanSession.js';
import '../SparkScanView-DUcwRAxm.js';
import '../spark/ui/SparkScanViewIcon.js';
import '../spark/ui/SparkScanViewMiniPreview.js';
import '../spark/ui/SparkScanViewToast.js';
import '../spark/ui/SparkScanViewToolbar.js';
import '../spark/ui/SparkScanViewTriggerButton.js';
import '../spark/ui/SparkScanViewVisualFeedback.js';
import '../Barcode.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../LocalizedOnlyBarcode.js';
import '../SymbologySettings.js';
import '../find/BarcodeFind.js';
import '../find/BarcodeFindFeedback.js';
import '../find/BarcodeFindTransformer.js';
import '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import '../spark/SparkScanScanningMode.js';
import '../spark/SparkScanPreviewBehavior.js';
import '../spark/SparkScanScanningBehavior.js';
import '../spark/SparkScan.js';
import '../spark/SparkScanSettings.js';
import '../ScanIntention.js';
import '../spark/SparkScanFeedbackDelegate.js';
import '../spark/SparkScanBarcodeFeedback.js';
import '../spark/ui/SparkScanViewSettings.js';
import '../spark/ui/SparkScanMiniPreviewSize.js';
import '../spark/ui/SparkScanToastSettings.js';
import '../spark/ui/constants/tags.js';
import '../spark/ui/SparkScanViewState.js';
import '../spark/ui/constants/attributes.js';
import '../spark/ui/constants/events.js';

type SparkScanActionMessageKey = "sparkScanEmitErrorFeedback" | "sparkScanOverlayReadyForDraw" | "sparkScanAnalyticsManagerPropertyChanged" | "sparkScanSelectItemWithSmartScanSelection" | "sparkScanModeRemove";
type BarcodeFindActionMessageKey = "barcodeFindSearchStart" | "barcodeFindSearchPause" | "barcodeFindSearchStop" | "barcodeFindSetItemList" | "barcodeFindForSettings" | "barcodeFindSetEnabled" | "barcodeFindModeRemove" | "barcodeFindApplySettings" | "barcodeFindAddBasicOverlay" | "barcodeFindRemoveBasicOverlay" | "barcodeFindUpdateBasicOverlay" | "barcodeFindSetTransformerFunction";
type BarcodeArActionMessageKey = "barcodeArSearchStart" | "barcodeArSearchPause" | "barcodeArSearchStop" | "barcodeArForSettings" | "barcodeArSetEnabled" | "barcodeArModeRemove" | "barcodeArApplySettings";
/**
 * MESSAGES (ACTIONS) SENT TO THE WORKER
 */
type DataCaptureActionMessageKey = DataCaptureActionMessageKey$1 | SparkScanActionMessageKey | BarcodeFindActionMessageKey | BarcodeArActionMessageKey;
type WorkerResponse<C extends DataCaptureActionMessageKey> = WorkerResponse$1<C>;
interface DataCaptureActionMessage {
    command: DataCaptureActionMessageKey;
    id: number;
}
interface SparkScanEmitErrorFeedbackDataCaptureAction extends DataCaptureActionMessage {
    command: "sparkScanEmitErrorFeedback";
    shouldRemoveBrush: boolean;
}
interface SparkScanOverlayReadyForDrawCaptureAction extends DataCaptureActionMessage {
    command: "sparkScanOverlayReadyForDraw";
}
interface SparkScanAnalyticsManagerPropertyChangedAction extends DataCaptureActionMessage {
    command: "sparkScanAnalyticsManagerPropertyChanged";
    property: Property;
}
interface SparkScanSelectItemWithSmartScanSelectionDataCaptureAction extends DataCaptureActionMessage {
    command: "sparkScanSelectItemWithSmartScanSelection";
}
interface SparkScanModeRemoveDataCaptureAction extends DataCaptureActionMessage {
    command: "sparkScanModeRemove";
}
interface BarcodeFindSearchStartDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSearchStart";
}
interface BarcodeFindSearchPauseDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSearchPause";
}
interface BarcodeFindSearchStopDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSearchStop";
}
interface BarcodeFindSetItemListDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSetItemList";
    itemList: BarcodeFindItemJSON[];
}
interface BarcodeFindSetTransformerFunctionDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSetTransformerFunction";
    functionAsString: string | null | undefined;
}
interface BarcodeFindSetEnabledDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindSetEnabled";
    enabled: boolean;
}
interface BarcodeFindForSettingsDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindForSettings";
    settings: BarcodeFindSettingsJSON;
}
interface BarcodeFindModeRemoveDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindModeRemove";
}
interface BarcodeFindApplySettingsDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindApplySettings";
    settings: BarcodeFindSettingsJSON;
}
interface BarcodeFindAddBasicOverlayDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindAddBasicOverlay";
}
interface BarcodeFindRemoveBasicOverlayDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindRemoveBasicOverlay";
}
interface BarcodeFindUpdateBasicOverlayDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeFindUpdateBasicOverlay";
    jsonOverlay: BarcodeFindBasicOverlayJSON;
}
interface BarcodeArSearchStartDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArSearchStart";
}
interface BarcodeArSearchPauseDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArSearchPause";
}
interface BarcodeArSearchStopDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArSearchStop";
}
interface BarcodeArSetEnabledDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArSetEnabled";
    enabled: boolean;
}
interface BarcodeArForSettingsDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArForSettings";
    settings: BarcodeArSettingsJSON;
}
interface BarcodeArModeRemoveDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArModeRemove";
}
interface BarcodeArApplySettingsDataCaptureAction extends DataCaptureActionMessage {
    command: "barcodeArApplySettings";
    settings: BarcodeArSettingsJSON;
}
type SparkScanDataCaptureActionMessage = SparkScanOverlayReadyForDrawCaptureAction | SparkScanAnalyticsManagerPropertyChangedAction | SparkScanEmitErrorFeedbackDataCaptureAction | SparkScanSelectItemWithSmartScanSelectionDataCaptureAction | SparkScanModeRemoveDataCaptureAction;
type BarcodeFindDataCaptureActionMessage = BarcodeFindSearchStartDataCaptureAction | BarcodeFindSearchPauseDataCaptureAction | BarcodeFindSearchStopDataCaptureAction | BarcodeFindSetItemListDataCaptureAction | BarcodeFindForSettingsDataCaptureAction | BarcodeFindSetEnabledDataCaptureAction | BarcodeFindModeRemoveDataCaptureAction | BarcodeFindApplySettingsDataCaptureAction | BarcodeFindUpdateBasicOverlayDataCaptureAction | BarcodeFindAddBasicOverlayDataCaptureAction | BarcodeFindRemoveBasicOverlayDataCaptureAction | BarcodeFindSetTransformerFunctionDataCaptureAction;
type BarcodeArDataCaptureActionMessage = BarcodeArSearchStartDataCaptureAction | BarcodeArSearchPauseDataCaptureAction | BarcodeArSearchStopDataCaptureAction | BarcodeArSetEnabledDataCaptureAction | BarcodeArForSettingsDataCaptureAction | BarcodeArModeRemoveDataCaptureAction | BarcodeArApplySettingsDataCaptureAction;
type AnyDataCaptureActionMessage = AnyDataCaptureActionMessage$1 | SparkScanDataCaptureActionMessage | BarcodeFindDataCaptureActionMessage | BarcodeArDataCaptureActionMessage;
type SparkScanCallbackMessageKey = "sparkScanDidScan" | "sparkScanDidUpdateSession" | "sparkScanSwitchedToSmartScanSelection" | "sparkScanSwitchedAwayFromSmartScanSelection";
type BarcodeFindCallbackMessageKey = "barcodeFindDidUpdateSession" | "barcodeFindSearchPaused" | "barcodeFindSearchStarted" | "barcodeFindSearchStopped" | "barcodeFindListUpdatedFeedback" | "barcodeFindFeedback";
type BarcodeArCallbackMessageKey = "barcodeArDidUpdateSession";
/**
 * MESSAGES EMITTED BY THE WORKER
 */
type DataCaptureCallbackMessageKeys = DataCaptureCallbackMessageKeys$1 | SparkScanCallbackMessageKey | BarcodeFindCallbackMessageKey | BarcodeArCallbackMessageKey | "barcodeCaptureDidScan" | "barcodeCaptureDidUpdateSession" | "barcodeBatchDidUpdateSession" | "didTapTrackedBarcode";
interface BaseDataCaptureCallbackMessage {
    type: DataCaptureCallbackMessageKeys;
}
interface BarcodeCaptureDidScanWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeCaptureDidScan";
    payload: {
        session: BarcodeCaptureSessionJSON;
        frameData: PrivateLoadableFrameData;
    };
}
interface BarcodeCaptureDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeCaptureDidUpdateSession";
    payload: BarcodeCaptureSessionJSON;
}
interface BarcodeBatchDidTapTrackedBarcode extends BaseDataCaptureCallbackMessage {
    type: "didTapTrackedBarcode";
    payload: TrackedBarcodeJSON;
}
interface BarcodeBatchDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeBatchDidUpdateSession";
    payload: BarcodeBatchSessionJSON;
}
interface SparkScanDidScanWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "sparkScanDidScan";
    payload: {
        session: SparkScanSessionJSON;
        frameData: PrivateLoadableFrameData;
    };
}
interface SparkScanDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "sparkScanDidUpdateSession";
    payload: SparkScanSessionJSON;
}
interface SparkScanSwitchedToSmartScanSelectionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "sparkScanSwitchedToSmartScanSelection";
}
interface SparkScanSwitchedAwayFromSmartScanSelectionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "sparkScanSwitchedAwayFromSmartScanSelection";
}
interface BarcodeFindDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindDidUpdateSession";
    payload: {
        session: BarcodeFindSessionJSON;
        frameData: PrivateLoadableFrameData;
    };
}
interface BarcodeFindSearchPausedWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindSearchPaused";
    payload: {
        foundItems: string[];
    };
}
interface BarcodeFindSearchStoppedWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindSearchStopped";
    payload: {
        foundItems: string[];
    };
}
interface BarcodeFindSearchStartedWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindSearchStarted";
    payload: any;
}
interface BarcodeFindListUpdatedFeedback extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindListUpdatedFeedback";
    payload: any;
}
interface BarcodeFindFeedback extends BaseDataCaptureCallbackMessage {
    type: "barcodeFindFeedback";
    payload: any;
}
interface BarcodeArDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeArDidUpdateSession";
    payload: {
        session: BarcodeArSessionJSON;
        frameData: PrivateLoadableFrameData;
    };
}
type DataCaptureCallbackMessage = BarcodeCaptureDidScanWorkerMessage | BarcodeCaptureDidUpdateSessionWorkerMessage | BarcodeBatchDidTapTrackedBarcode | BarcodeBatchDidUpdateSessionWorkerMessage | DataCaptureCallbackMessage$1 | SparkScanDidScanWorkerMessage | SparkScanDidUpdateSessionWorkerMessage | SparkScanSwitchedToSmartScanSelectionWorkerMessage | SparkScanSwitchedAwayFromSmartScanSelectionWorkerMessage | BarcodeFindDidUpdateSessionWorkerMessage | BarcodeFindSearchPausedWorkerMessage | BarcodeFindSearchStoppedWorkerMessage | BarcodeFindSearchStartedWorkerMessage | BarcodeFindListUpdatedFeedback | BarcodeFindFeedback | BarcodeArDidUpdateSessionWorkerMessage;
/**
 * OTHERS
 */
type PayloadForCommand<A, C> = A extends {
    command: C;
} ? A : never;
interface DataCaptureWorker extends Omit<Worker, "postMessage"> {
    onmessage: ((this: Worker, event_: MessageEvent & {
        data: any;
    }) => void) | null;
    postMessage: <C extends AnyDataCaptureActionMessage["command"]>(message: PayloadForCommand<AnyDataCaptureActionMessage, C>, transfer?: Transferable[]) => void;
}
declare enum NativeSparkScanViewState {
    INITIAL = 0,
    IDLE = 1,
    INACTIVE = 2,
    ACTIVE = 3,
    ERROR = 4
}
interface NativeSparkScanStateMachine extends EmscriptenClassHandle<NativeSparkScanStateMachine> {
    setViewHandlerDelegate(delegate: EmscriptenClassHandle): void;
}
interface NativeSparkScanListener extends EmscriptenClassHandle<NativeSparkScanListener> {
    didScan(sparkScan: NativeSparkScan, session: JSONParseable, frameData: WasmFrameData): void;
    didUpdateSession(sparkScan: NativeSparkScan, session: JSONParseable, frameData: WasmFrameData): void;
}
interface NativeSparkScan extends EmscriptenClassHandle<NativeSparkScan> {
    addListener(listener: NativeSparkScanListener, flags: number): void;
    setSuccessFeedback(feedback: EmscriptenClassHandle): void;
    setPropertyPushSource(source: unknown): void;
    selectItemWithSmartScanSelectionAsync(): void;
    getStateMachine(): NativeSparkScanStateMachine;
}
interface NativeSparkScanOverlay extends EmscriptenClassHandle<NativeSparkScanOverlay> {
    onErrorFeedbackEmitted(shouldRemoveBrush: boolean): void;
    onReadyForNewData(): void;
}
interface BarcodeFindBasicOverlay extends EmscriptenClassHandle {
    shouldShowUserGuidanceView: boolean;
    getShouldShowScanAreaGuides(): boolean;
    setGuidanceHandler(guidanceHandler: EmscriptenClassHandle): void;
    setShouldShowHint(bool: boolean): void;
    setShouldShowScanAreaGuides(bool: boolean): void;
    setTextForAllItemsFoundSuccessfullyHint(text: string): void;
    setTextForItemListUpdatedHint(text: string): void;
    setTextForItemListUpdatedWhenPausedHint(text: string): void;
    setTextForMoveCloserToBarcodesHint(text: string): void;
    setTextForPointAtBarcodesToSearchHint(text: string): void;
    setTextForTapShutterToPauseScreenHint(text: string): void;
    setTextForTapShutterToResumeScreenHint(text: string): void;
    setUserGuidanceEnabled(value: boolean): void;
}
interface BarcodeFindTransformer extends EmscriptenClassHandle {
    transformBarcodeData(data: string): string;
}
interface BarcodeFind extends EmscriptenClassHandle {
    start(): void;
    pause(): void;
    stop(): void;
    setItemList(list: string): void;
    setItemListUpdatedFeedback(feedback: EmscriptenClassHandle): void;
    setFeedback(feedback: EmscriptenClassHandle): void;
    addListener: (listener: EmscriptenClassHandle, options: any) => void;
    removeListener: (listener: EmscriptenClassHandle, options: any) => void;
    setEnabled: (enabled: boolean) => void;
    applySettings: (settings: string) => void;
    setBarcodeFindTransformer: (transformer: BarcodeFindTransformer) => void;
}
interface BarcodeAr extends EmscriptenClassHandle {
    start(): void;
    pause(): void;
    stop(): void;
    addListener: (listener: EmscriptenClassHandle, options: any) => void;
    removeListener: (listener: EmscriptenClassHandle, options: any) => void;
    applySettings: (settings: string) => void;
    setEnabled: (bool: boolean) => void;
}
interface BarcodeCaptureModule extends Module$1 {
    BarcodeCaptureDeserializer: new () => CaptureModeDeserializerInstance;
    BarcodeCaptureListener: {
        extend: (target: "BarcodeCaptureListener", parameters: {
            didScan: (barcode_capture: any, session: JSONParseable, frame_data: WasmFrameData) => void;
            didUpdateSession: (barcode_capture: any, session: JSONParseable, frame_data: any) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeCaptureDeserializerListener: {
        extend: (target: "BarcodeCaptureDeserializerListener", parameters: {
            onModeDeserializationStarted: (deserializer: any, mode: any, json: JSONParseable) => void;
            onModeDeserializationFinished: (deserializer: any, mode: any, json: JSONParseable) => void;
            onSettingsDeserializationStarted: (deserializer: any, settings: any, json: JSONParseable) => void;
            onSettingsDeserializationFinished: (deserializer: any, settings: any, json: JSONParseable) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeBatchDeserializer: new () => CaptureModeDeserializerInstance;
    BarcodeBatchListener: {
        extend: (target: "BarcodeTrackingListener", parameters: {
            didUpdateSession: (barcode_tracking: any, session: JSONParseable, frame_data: any) => void;
            onTrackedBarcodeTapped: (barcode_tracking: any, tracked_barcode: JSONParseable) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeBatchDeserializerListener: {
        extend: (target: "BarcodeTrackingDeserializerListener", parameters: {
            onModeDeserializationStarted: (deserializer: any, mode: any, json: JSONParseable) => void;
            onModeDeserializationFinished: (deserializer: any, mode: any, json: JSONParseable) => void;
            onSettingsDeserializationStarted: (deserializer: any, settings: any, json: JSONParseable) => void;
            onSettingsDeserializationFinished: (deserializer: any, settings: any, json: JSONParseable) => void;
        }) => new () => EmscriptenClassHandle;
    };
    SparkScanDeserializer: new () => CaptureModeDeserializerInstance;
    SparkScanListener: {
        extend: (target: "SparkScanListener", parameters: {
            didScan(spark_scan: NativeSparkScan, session: JSONParseable, frame_data: WasmFrameData): void;
            didUpdateSession(spark_scan: NativeSparkScan, session: JSONParseable, frame_data: WasmFrameData): void;
        }) => new () => NativeSparkScanListener;
    };
    SparkScanDeserializerListener: {
        extend: (target: "SparkScanDeserializerListener", parameters: {
            onModeDeserializationStarted: (deserializer: any, NativeSparkScan: any, json: JSONParseable) => void;
            onModeDeserializationFinished: (deserializer: any, NativeSparkScan: any, json: JSONParseable) => void;
            onSettingsDeserializationStarted: (deserializer: any, settings: any, json: JSONParseable) => void;
            onSettingsDeserializationFinished: (deserializer: any, settings: any, json: JSONParseable) => void;
            onOverlayDeserializationStarted: (deserializer: any, overlay: NativeSparkScanOverlay, json: JSONParseable) => void;
            onOverlayDeserializationFinished: (deserializer: any, overlay: NativeSparkScanOverlay, json: JSONParseable) => void;
        }) => new () => EmscriptenClassHandle;
    };
    SparkScanViewHandlerDelegate: {
        extend: (target: "SparkScanViewHandlerDelegate", parameters: {
            enableHapticWhenOverlapping(): void;
            onStateTransition(state: NativeSparkScanViewState): void;
            onSwitchedAwayFromSmartScanSelection(): void;
            onSwitchedToSmartScanSelection(): void;
            resetAllTimers(): void;
        }) => new () => EmscriptenClassHandle;
    };
    LicenseUtils: {
        getBlinkIdLicenseKey: (scanditLicense: string) => string;
    };
    BarcodeFind: new (context: EmscriptenClassHandle, settings: string) => BarcodeFind;
    BarcodeFindListener: {
        extend: (target: "BarcodeFindListener", parameters: {
            didUpdateSession: (barcodeFind: EmscriptenClassHandle, session: JSONParseable, frameData: WasmFrameData) => void;
            onSearchPaused: (items: Vector<string>) => void;
            onSearchStarted: () => void;
            onSearchStopped: (items: Vector<string>) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeFindTransformer: {
        extend: (target: "BarcodeFindTransformer", parameters: {
            transformBarcodeData: (data: string) => string;
        }) => new () => BarcodeFindTransformer;
    };
    BarcodeFindBasicOverlay: new (mode: BarcodeFind) => BarcodeFindBasicOverlay;
    BarcodeFindGuidanceHandler: {
        extend: (target: "BarcodeFindGuidanceHandler", parameters: {
            setInitialGuidance: (argument0: boolean, argument1: string) => void;
            setMoveCloserGuidance: (argument0: boolean, argument1: string) => void;
            setTapShutterToPause: (argument0: boolean, argument1: string) => void;
            setTapShutterToResume: (argument0: boolean, argument1: string) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeAr: new (context: EmscriptenClassHandle, settings: string) => BarcodeAr;
    BarcodeArListener: {
        extend: (target: "BarcodeArListener", parameters: {
            didUpdateSession: (barcodeAr: EmscriptenClassHandle, session: JSONParseable, frameData: WasmFrameData) => void;
        }) => new () => EmscriptenClassHandle;
    };
}
interface Module extends Module$1, BarcodeCaptureModule {
}
type EngineWorkerResponse<C extends DataCaptureActionMessageKey> = WorkerResponse<C> extends Promise<void> | void ? Promise<void> | void : {
    payload: WorkerResponse<C>;
    transferables?: Transferable[];
};

export { type AnyDataCaptureActionMessage, type BarcodeAr, type BarcodeArApplySettingsDataCaptureAction, type BarcodeArDataCaptureActionMessage, type BarcodeArDidUpdateSessionWorkerMessage, type BarcodeArForSettingsDataCaptureAction, type BarcodeArModeRemoveDataCaptureAction, type BarcodeArSearchPauseDataCaptureAction, type BarcodeArSearchStartDataCaptureAction, type BarcodeArSearchStopDataCaptureAction, type BarcodeArSetEnabledDataCaptureAction, type BarcodeBatchDidTapTrackedBarcode, type BarcodeCaptureDidScanWorkerMessage, type BarcodeCaptureDidUpdateSessionWorkerMessage, type BarcodeCaptureModule, type BarcodeFind, type BarcodeFindAddBasicOverlayDataCaptureAction, type BarcodeFindApplySettingsDataCaptureAction, type BarcodeFindBasicOverlay, type BarcodeFindDataCaptureActionMessage, type BarcodeFindDidUpdateSessionWorkerMessage, type BarcodeFindFeedback, type BarcodeFindForSettingsDataCaptureAction, type BarcodeFindListUpdatedFeedback, type BarcodeFindModeRemoveDataCaptureAction, type BarcodeFindRemoveBasicOverlayDataCaptureAction, type BarcodeFindSearchPauseDataCaptureAction, type BarcodeFindSearchPausedWorkerMessage, type BarcodeFindSearchStartDataCaptureAction, type BarcodeFindSearchStartedWorkerMessage, type BarcodeFindSearchStopDataCaptureAction, type BarcodeFindSearchStoppedWorkerMessage, type BarcodeFindSetEnabledDataCaptureAction, type BarcodeFindSetItemListDataCaptureAction, type BarcodeFindSetTransformerFunctionDataCaptureAction, type BarcodeFindTransformer, type BarcodeFindUpdateBasicOverlayDataCaptureAction, type DataCaptureActionMessageKey, type DataCaptureCallbackMessage, type DataCaptureWorker, type EngineWorkerResponse, type Module, type NativeSparkScan, type NativeSparkScanListener, type NativeSparkScanOverlay, type NativeSparkScanStateMachine, NativeSparkScanViewState, type PayloadForCommand, type SparkScanAnalyticsManagerPropertyChangedAction, type SparkScanDataCaptureActionMessage, type SparkScanDidScanWorkerMessage, type SparkScanDidUpdateSessionWorkerMessage, type SparkScanEmitErrorFeedbackDataCaptureAction, type SparkScanModeRemoveDataCaptureAction, type SparkScanOverlayReadyForDrawCaptureAction, type SparkScanSelectItemWithSmartScanSelectionDataCaptureAction, type SparkScanSwitchedAwayFromSmartScanSelectionWorkerMessage, type SparkScanSwitchedToSmartScanSelectionWorkerMessage, type WorkerResponse };
