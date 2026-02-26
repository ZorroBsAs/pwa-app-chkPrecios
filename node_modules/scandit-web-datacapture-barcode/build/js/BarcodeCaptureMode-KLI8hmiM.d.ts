import { CaptureModeDeserializerInstance, JSONParseable, WasmFrameData } from 'scandit-web-datacapture-core/build/js/worker/dataCaptureWorkerRelated';
import { WorkerFunctions as WorkerFunctions$1, ModuleHandler, Vector } from 'scandit-web-datacapture-core/build/js/worker/index';
import { DataCaptureEngine as DataCaptureEngine$1 } from 'scandit-web-datacapture-core/build/js/worker/index.js';
import { Module, DataCaptureCallbackMessage, BarcodeCaptureModule } from './worker/dataCaptureWorkerRelated.js';
import { BarcodeFindBasicOverlayJSON } from './find/BarcodeFindBasicOverlay.js';
import { BarcodeFindItemJSON } from './find/BarcodeFindItem.js';
import { BarcodeFindSettingsJSON } from './find/BarcodeFindSettings.js';
import { ParserComponent } from './worker/ParserComponent.js';

declare class BarcodeFindMode {
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private barcodeFind;
    private basicOverlay;
    private transparentGuidanceHintStyle;
    private customerTransformation;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    forSettings(settings: BarcodeFindSettingsJSON): Promise<void>;
    barcodeFindFeedback(): void;
    start(): void;
    stop(): void;
    pause(): void;
    setEnabled(enabled: boolean): void;
    setItemList(list: BarcodeFindItemJSON[]): void;
    removeMode(): Promise<void>;
    addBasicOverlay(): void;
    removeBasicOverlay(): void;
    applySettings(findSettings: BarcodeFindSettingsJSON): Promise<void>;
    updateBasicOverlay(json: BarcodeFindBasicOverlayJSON): void;
    setTransformerFunction(transformation?: ((data: string) => string) | null): void;
    private successFeedback;
    private listUpdatedFeedback;
    private setToast;
    private setGuidance;
    private createWebFindGuidanceHandler;
}

declare class BarcodeTrackingMode {
    barcodeTrackingDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private trackingListenerSet;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    barcodeTrackingDidUpdateSession(session: JSONParseable): void;
    getTrackingDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    protected onTrackedBarcodeTapped(trackedBarcode: JSONParseable): void;
}

declare class SparkScanMode {
    sparkScanDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private captureListenerSet;
    private sparkScanOverlay?;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    sparkScanDidUpdateSession(session: JSONParseable): void;
    getSparkScanDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    emitErrorFeedback(shouldRemoveBrush: boolean): void;
    successFeedback(): void;
    protected sparkScanDidScan(session: JSONParseable, frameData: WasmFrameData): void;
}

interface WorkerFunctions extends WorkerFunctions$1 {
    postMessage: (message: DataCaptureCallbackMessage, transfer?: Transferable[]) => void;
    getOffscreenCanvas: () => OffscreenCanvas | undefined;
}
interface BarcodeCommand {
    command: string;
}
/**
 * DataCaptureEngine is an abstraction of the engine, it is created by the engine worker
 * and should be used as a singleton. It calls the underlying engine methods directly.
 */
declare class DataCaptureEngine extends DataCaptureEngine$1<BarcodeCaptureModule> {
    barcodeFindMode: BarcodeFindMode;
    protected parserMode: ParserComponent;
    protected barcodeCaptureMode: BarcodeCaptureMode;
    protected barcodeTrackingMode: BarcodeTrackingMode;
    protected sparkScanMode: SparkScanMode;
    protected workerFunctions: WorkerFunctions;
    constructor(moduleHandler: ModuleHandler<BarcodeCaptureModule>, workerFunctions: WorkerFunctions);
    getModeDeserializers(): Vector;
    sparkScanEmitErrorFeedback(shouldRemoveBrush: boolean): void;
    protected getWasmSideModuleFileName(): string;
    protected getWasmCoreFileName(simdSupport: boolean, multithreadSupport: boolean): string;
    protected getWasmCoreExpectedHash(simdSupport: boolean, multithreadSupport: boolean): string;
    protected getWasmMetadata(): Record<string, {
        bytes: number;
    }>;
}

declare class BarcodeCaptureMode {
    barcodeCaptureDeserializer: CaptureModeDeserializerInstance;
    barcodeTrackingDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private captureListenerSet;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    barcodeCaptureDidUpdateSession(session: JSONParseable): void;
    barcodeTrackingDidUpdateSession(session: JSONParseable): void;
    getCaptureDeserializer(): CaptureModeDeserializerInstance;
    getTrackingDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    successFeedback(): void;
    protected barcodeCaptureDidScan(session: JSONParseable, frameData: WasmFrameData): void;
}

export { BarcodeFindMode as B, DataCaptureEngine as D, SparkScanMode as S, type WorkerFunctions as W, BarcodeTrackingMode as a, type BarcodeCommand as b, BarcodeCaptureMode as c };
