import { WorkerFunctions as WorkerFunctions$1, ModuleHandler, Vector } from '@scandit/web-datacapture-core/build/js/worker/index';
import { DataCaptureEngine as DataCaptureEngine$1 } from '@scandit/web-datacapture-core/build/js/worker/index.js';
import { Module, BarcodeCaptureModule, DataCaptureCallbackMessage } from './worker/dataCaptureWorkerRelated.js';
import { BarcodeArSettingsJSON } from './ar/BarcodeArSettings.js';
import { CaptureModeDeserializerInstance, JSONParseable, WasmFrameData } from '@scandit/web-datacapture-core/build/js/worker/dataCaptureWorkerRelated';
import { BarcodeFindBasicOverlayJSON } from './find/BarcodeFindBasicOverlay.js';
import { BarcodeFindItemJSON } from './find/BarcodeFindItem.js';
import { BarcodeFindSettingsJSON } from './find/BarcodeFindSettings.js';
import { Property } from './worker/PropertyBehaviorSubject.js';

declare class BarcodeBatchMode {
    barcodeBatchDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private trackingListenerSet;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    barcodeBatchDidUpdateSession(session: JSONParseable): void;
    getBatchDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    protected onTrackedBarcodeTapped(trackedBarcode: JSONParseable): void;
}

declare class BarcodeCaptureMode {
    barcodeCaptureDeserializer: CaptureModeDeserializerInstance;
    barcodeBatchDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private captureListenerSet;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    barcodeCaptureDidUpdateSession(session: JSONParseable): void;
    barcodeBatchDidUpdateSession(session: JSONParseable): void;
    getCaptureDeserializer(): CaptureModeDeserializerInstance;
    getTrackingDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    successFeedback(): void;
    protected barcodeCaptureDidScan(session: JSONParseable, frameData: WasmFrameData): void;
}

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

declare class SparkScanMode {
    sparkScanDeserializer: CaptureModeDeserializerInstance;
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private captureListenerSet;
    private sparkScanOverlay?;
    private propertyPushSource;
    private sparkScan?;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    sparkScanDidUpdateSession(session: JSONParseable): void;
    getSparkScanDeserializer(): CaptureModeDeserializerInstance;
    setup(): void;
    emitErrorFeedback(shouldRemoveBrush: boolean): void;
    overlayReadyForDraw(): void;
    analyticsManagerPropertyChanged(property: Property): void;
    successFeedback(): void;
    selectItemWithSmartScanSelection(): void;
    removeMode(): Promise<void>;
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
    sparkScanMode: SparkScanMode;
    barcodeArMode: BarcodeArMode;
    protected barcodeCaptureMode: BarcodeCaptureMode;
    protected barcodeBatchMode: BarcodeBatchMode;
    protected workerFunctions: WorkerFunctions;
    constructor(moduleHandler: ModuleHandler<BarcodeCaptureModule>, workerFunctions: WorkerFunctions);
    getModeDeserializers(): Vector;
    protected getWasmSideModuleFileName(): string;
    protected getWasmCoreFileName(simdSupport: boolean, multithreadSupport: boolean): string;
    protected getWasmCoreExpectedHash(simdSupport: boolean, multithreadSupport: boolean): string;
    protected getWasmMetadata(): Record<string, {
        bytes: number;
    }>;
}

declare class BarcodeArMode {
    private readonly Module;
    private readonly coreEngine;
    private readonly workerFunctions;
    private barcodeAr;
    constructor(coreEngine: DataCaptureEngine, Module: Module, workerFunctions: WorkerFunctions);
    forSettings(settings: BarcodeArSettingsJSON): Promise<void>;
    start(): void;
    pause(): void;
    stop(): void;
    setEnabled(enabled: boolean): void;
    removeMode(): Promise<void>;
    applySettings(checkSettingsJSON: BarcodeArSettingsJSON): void;
}

export { BarcodeBatchMode as B, DataCaptureEngine as D, SparkScanMode as S, type WorkerFunctions as W, BarcodeCaptureMode as a, BarcodeFindMode as b, type BarcodeCommand as c, BarcodeArMode as d };
