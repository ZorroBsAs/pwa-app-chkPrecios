import { PrivateLoadableFrameData } from 'scandit-web-datacapture-core';
import { DataCaptureActionMessageKey as DataCaptureActionMessageKey$1, WorkerResponse as WorkerResponse$1, AnyDataCaptureActionMessage as AnyDataCaptureActionMessage$1, DataCaptureCallbackMessage as DataCaptureCallbackMessage$1, EmscriptenClassHandle, Module as Module$1, CaptureModeDeserializerInstance, JSONParseable, WasmFrameData, Vector, DataCaptureCallbackMessageKeys as DataCaptureCallbackMessageKeys$1 } from 'scandit-web-datacapture-core/build/js/worker/index';
import { BarcodeCaptureSessionJSON } from '../BarcodeCaptureSession.js';
import { BarcodeTrackingSessionJSON } from '../BarcodeTrackingSession.js';
import { TrackedBarcodeJSON } from '../TrackedBarcode.js';
import { BarcodeFindBasicOverlayJSON } from '../find/BarcodeFindBasicOverlay.js';
import { BarcodeFindItemJSON } from '../find/BarcodeFindItem.js';
import { BarcodeFindSessionJSON } from '../find/BarcodeFindSession.js';
import { BarcodeFindSettingsJSON } from '../find/BarcodeFindSettings.js';
import { SparkScanSessionJSON } from '../spark/SparkScanSession.js';
import '../spark/ui/SparkScanView.js';
import '../spark/ui/SparkScanViewCollapsedTriggerButton.js';
import '../spark/ui/SparkScanViewExpandedTriggerButton.js';
import '../spark/ui/SparkScanViewGestureManager.js';
import '../spark/ui/SparkScanViewIcon.js';
import '../spark/ui/SparkScanViewMiniPreview.js';
import '../spark/ui/SparkScanViewOrientationManager.js';
import '../spark/ui/SparkScanViewSidebar.js';
import '../spark/ui/SparkScanViewToast.js';
import '../spark/ui/SparkScanViewTriggerButton.js';
import '../spark/ui/SparkScanViewVisualFeedback.js';
import 'scandit-web-datacapture-core/build/js/private/Serializable';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../LocalizedOnlyBarcode.js';
import '../find/BarcodeFind.js';
import '../find/BarcodeFindFeedback.js';
import '../find/BarcodeFindTransformer.js';
import '../SymbologySettings.js';
import 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import '../spark/SparkScan.js';
import '../spark/SparkScanSettings.js';
import '../ScanIntention.js';
import '../spark/SparkScanFeedbackDelegate.js';
import '../spark/SparkScanBarcodeFeedback.js';
import '../spark/SparkScanScanningMode.js';
import '../spark/SparkScanPreviewBehavior.js';
import '../spark/SparkScanScanningBehavior.js';
import '../spark/ui/SparkScanViewSettings.js';
import '../spark/ui/SparkScanToastSettings.js';
import '../spark/ui/SparkScanViewHandMode.js';
import '../spark/ui/constants/attributes.js';
import '../spark/ui/constants/tags.js';
import '../spark/ui/constants/events.js';

/**
 * MESSAGES (ACTIONS) SENT TO THE WORKER
 */
type DataCaptureActionMessageKey = DataCaptureActionMessageKey$1 | "sparkScanEmitErrorFeedback" | "barcodeFindSearchStart" | "barcodeFindSearchPause" | "barcodeFindSearchStop" | "barcodeFindSetItemList" | "barcodeFindForSettings" | "barcodeFindSetEnabled" | "barcodeFindModeRemove" | "barcodeFindApplySettings" | "barcodeFindAddBasicOverlay" | "barcodeFindRemoveBasicOverlay" | "barcodeFindUpdateBasicOverlay" | "barcodeFindSetTransformerFunction";
type WorkerResponse<C extends DataCaptureActionMessageKey> = WorkerResponse$1<C>;
interface DataCaptureActionMessage {
    command: DataCaptureActionMessageKey;
    id: number;
}
interface SparkScanEmitErrorFeedbackDataCaptureAction extends DataCaptureActionMessage {
    command: "sparkScanEmitErrorFeedback";
    shouldRemoveBrush: boolean;
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
type BarcodeFindDataCaptureActionMessage = BarcodeFindSearchStartDataCaptureAction | BarcodeFindSearchPauseDataCaptureAction | BarcodeFindSearchStopDataCaptureAction | BarcodeFindSetItemListDataCaptureAction | BarcodeFindForSettingsDataCaptureAction | BarcodeFindSetEnabledDataCaptureAction | BarcodeFindModeRemoveDataCaptureAction | BarcodeFindApplySettingsDataCaptureAction | BarcodeFindUpdateBasicOverlayDataCaptureAction | BarcodeFindAddBasicOverlayDataCaptureAction | BarcodeFindRemoveBasicOverlayDataCaptureAction | BarcodeFindSetTransformerFunctionDataCaptureAction;
type AnyDataCaptureActionMessage = AnyDataCaptureActionMessage$1 | SparkScanEmitErrorFeedbackDataCaptureAction | BarcodeFindDataCaptureActionMessage;
/**
 * MESSAGES EMITTED BY THE WORKER
 */
type DataCaptureCallbackMessageKeys = DataCaptureCallbackMessageKeys$1 | "barcodeCaptureDidScan" | "barcodeCaptureDidUpdateSession" | "barcodeTrackingDidUpdateSession" | "didTapTrackedBarcode" | "sparkScanDidScan" | "sparkScanDidUpdateSession" | "barcodeFindDidUpdateSession" | "barcodeFindSearchPaused" | "barcodeFindSearchStarted" | "barcodeFindSearchStopped" | "barcodeFindListUpdatedFeedback" | "barcodeFindFeedback";
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
interface BarcodeTrackingDidTapTrackedBarcode extends BaseDataCaptureCallbackMessage {
    type: "didTapTrackedBarcode";
    payload: TrackedBarcodeJSON;
}
interface BarcodeTrackingDidUpdateSessionWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "barcodeTrackingDidUpdateSession";
    payload: BarcodeTrackingSessionJSON;
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
type DataCaptureCallbackMessage = BarcodeCaptureDidScanWorkerMessage | BarcodeCaptureDidUpdateSessionWorkerMessage | BarcodeTrackingDidTapTrackedBarcode | BarcodeTrackingDidUpdateSessionWorkerMessage | DataCaptureCallbackMessage$1 | SparkScanDidScanWorkerMessage | SparkScanDidUpdateSessionWorkerMessage | BarcodeFindDidUpdateSessionWorkerMessage | BarcodeFindSearchPausedWorkerMessage | BarcodeFindSearchStoppedWorkerMessage | BarcodeFindSearchStartedWorkerMessage | BarcodeFindListUpdatedFeedback | BarcodeFindFeedback;
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
interface NativeSparkScanOverlay extends EmscriptenClassHandle<NativeSparkScanOverlay> {
    onErrorFeedbackEmitted(shouldRemoveBrush: boolean): void;
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
    BarcodeTrackingDeserializer: new () => CaptureModeDeserializerInstance;
    BarcodeTrackingListener: {
        extend: (target: "BarcodeTrackingListener", parameters: {
            didUpdateSession: (barcode_tracking: any, session: JSONParseable, frame_data: any) => void;
            onTrackedBarcodeTapped: (barcode_tracking: any, tracked_barcode: JSONParseable) => void;
        }) => new () => EmscriptenClassHandle;
    };
    BarcodeTrackingDeserializerListener: {
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
            didScan: (spark_scan: any, session: JSONParseable, frame_data: WasmFrameData) => void;
            didUpdateSession: (spark_scan: any, session: JSONParseable, frame_data: any) => void;
        }) => new () => EmscriptenClassHandle;
    };
    SparkScanDeserializerListener: {
        extend: (target: "SparkScanDeserializerListener", parameters: {
            onModeDeserializationStarted: (deserializer: any, mode: any, json: JSONParseable) => void;
            onModeDeserializationFinished: (deserializer: any, mode: any, json: JSONParseable) => void;
            onSettingsDeserializationStarted: (deserializer: any, settings: any, json: JSONParseable) => void;
            onSettingsDeserializationFinished: (deserializer: any, settings: any, json: JSONParseable) => void;
            onOverlayDeserializationStarted: (deserializer: any, overlay: NativeSparkScanOverlay, json: JSONParseable) => void;
            onOverlayDeserializationFinished: (deserializer: any, overlay: NativeSparkScanOverlay, json: JSONParseable) => void;
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
            setAllItemsFound: (argument0: boolean, argument1: string) => void;
            setInitialGuidance: (argument0: boolean, argument1: string) => void;
            setItemListUpdated: (argument0: boolean, argument1: string) => void;
            setMoveCloserGuidance: (argument0: boolean, argument1: string) => void;
            setTapShutterToPause: (argument0: boolean, argument1: string) => void;
            setTapShutterToResume: (argument0: boolean, argument1: string) => void;
        }) => new () => EmscriptenClassHandle;
    };
}
interface Module extends Module$1, BarcodeCaptureModule {
}
type EngineWorkerResponse<C extends DataCaptureActionMessageKey> = WorkerResponse<C> extends Promise<void> | void ? Promise<void> | void : {
    payload: WorkerResponse<C>;
    transferables?: Transferable[];
};

export type { AnyDataCaptureActionMessage, BarcodeCaptureDidScanWorkerMessage, BarcodeCaptureDidUpdateSessionWorkerMessage, BarcodeCaptureModule, BarcodeFind, BarcodeFindAddBasicOverlayDataCaptureAction, BarcodeFindApplySettingsDataCaptureAction, BarcodeFindBasicOverlay, BarcodeFindDataCaptureActionMessage, BarcodeFindDidUpdateSessionWorkerMessage, BarcodeFindFeedback, BarcodeFindForSettingsDataCaptureAction, BarcodeFindListUpdatedFeedback, BarcodeFindModeRemoveDataCaptureAction, BarcodeFindRemoveBasicOverlayDataCaptureAction, BarcodeFindSearchPauseDataCaptureAction, BarcodeFindSearchPausedWorkerMessage, BarcodeFindSearchStartDataCaptureAction, BarcodeFindSearchStartedWorkerMessage, BarcodeFindSearchStopDataCaptureAction, BarcodeFindSearchStoppedWorkerMessage, BarcodeFindSetEnabledDataCaptureAction, BarcodeFindSetItemListDataCaptureAction, BarcodeFindSetTransformerFunctionDataCaptureAction, BarcodeFindTransformer, BarcodeFindUpdateBasicOverlayDataCaptureAction, BarcodeTrackingDidTapTrackedBarcode, DataCaptureActionMessageKey, DataCaptureCallbackMessage, DataCaptureWorker, EngineWorkerResponse, Module, NativeSparkScanOverlay, PayloadForCommand, SparkScanDidScanWorkerMessage, SparkScanDidUpdateSessionWorkerMessage, SparkScanEmitErrorFeedbackDataCaptureAction, WorkerResponse };
