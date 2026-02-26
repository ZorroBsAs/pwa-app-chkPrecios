/// <reference types="emscripten" />
import { K as DataCaptureEngine, L as Module, Q as AnyDataCaptureActionMessage, R as AugmentedWorker, S as ModuleHandler, T as DataCaptureCallbackMessage, U as DataCaptureActionMessageKey, X as EngineWorkerResponse } from '../DataCaptureContext-Dvdr7st4.js';
import '../Camera-DhGjpcjv.js';
import '../commons/Rect.js';
import '../private/Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import '../private/privateAccess.js';
import '../DataCaptureContextSettings.js';
import '../commons/JSONType.js';
import '../DataCaptureViewPlusRelated.js';
import '../NotificationPresenter/NotificationPresenter.js';
import '../NotificationPresenter/NotificationConfiguration.js';
import '../commons/Color.js';
import '../ScanditIcon.js';
import '../private/utils/ScanditHTMLElement.js';
import '../NotificationPresenter/NotificationStyle.js';
import '../commons/Anchor.js';
import '../commons/MarginsWithUnit.js';
import '../commons/NumberWithUnit.js';
import '../commons/MeasureUnit.js';
import '../commons/Orientation.js';
import '../commons/PointWithUnit.js';
import '../commons/Quadrilateral.js';
import '../private/CustomLocationsView.js';
import '../private/View.js';
import '../private/AnchorPositions.js';
import '../private/nativeHandle.js';
import '../license/OpenSourceSoftwareLicenseInfo.js';
import '../logger.js';
import '../private/FrameReaders/ColorType.js';
import '../LoadingStatus.js';
import '../private/djinni-types/index.js';
import '../private/HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import '../private/utils/AsyncStateMachine.js';
import '../tsHelper.js';

declare class WorkerMain<E extends DataCaptureEngine<M>, M extends Module> {
    dataCaptureInstance: E;
    onMessageListener: (event: MessageEvent<AnyDataCaptureActionMessage>) => boolean;
    private readonly workerSelf;
    constructor(workerSelf: AugmentedWorker<M>, module: ModuleHandler<M>);
    listenToMessages(): void;
    postMessage(message: DataCaptureCallbackMessage, transfer?: Transferable[]): void;
    getOffscreenCanvas(): OffscreenCanvas | undefined;
    isOffscreenCanvasSupported(): boolean;
    hasPayload(result: unknown): result is {
        payload: unknown;
    };
    hasTransferables(result: unknown): result is {
        transferables: Transferable[];
    };
    respondWith<C extends DataCaptureActionMessageKey>(command: C, requestId: number, executor: () => EngineWorkerResponse<C>): Promise<void>;
    /**
     * Messages received from the main thread (actions to undertake)
     */
    onMessage(event: MessageEvent<AnyDataCaptureActionMessage>): boolean;
}

export { WorkerMain };
