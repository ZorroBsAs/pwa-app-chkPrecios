import { DataCaptureContext, CameraSettings, FrameData } from '@scandit/web-datacapture-core';
import { PrivateBarcodeFindListener, BarcodeFind } from './BarcodeFind.js';
import { BarcodeFindItem } from './BarcodeFindItem.js';
import { BarcodeFindSession } from './BarcodeFindSession.js';
import { BarcodeFindView } from './BarcodeFindView.js';
import { BarcodeFindViewSettings } from './BarcodeFindViewSettings.js';
import { BarcodeFindViewUiListener } from './BarcodeFindViewUiListener.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './BarcodeFindFeedback.js';
import './BarcodeFindTransformer.js';
import './BarcodeFindSettings.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../SymbologySettings.js';
import '../TrackedBarcode.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';

declare enum ViewState {
    Started = "started",
    Paused = "paused",
    Stopped = "stopped"
}
declare class BarcodeFindPresenter implements PrivateBarcodeFindListener {
    viewState: ViewState;
    barcodeFindView: BarcodeFindView;
    context: DataCaptureContext;
    viewSettings: BarcodeFindViewSettings;
    cameraSettings: CameraSettings;
    barcodeFind: BarcodeFind;
    isTorchAvailable: boolean;
    barcodeFindViewUiListener: BarcodeFindViewUiListener | null;
    private torchState;
    private sessionState;
    private customerItemsListState;
    constructor(barcodeFindView: BarcodeFindView, context: DataCaptureContext, barcodeFind: BarcodeFind, viewSettings: BarcodeFindViewSettings, cameraSettings: CameraSettings);
    prepare(): Promise<void>;
    dispose(): Promise<void>;
    didPauseSearch(foundItems: BarcodeFindItem[]): Promise<void>;
    didStartSearch(): Promise<void>;
    didStopSearch(foundItems: BarcodeFindItem[]): Promise<void>;
    onSetItemList(items: BarcodeFindItem[]): Promise<void>;
    onDidUpdateSession(_: BarcodeFind, session: BarcodeFindSession, _frameData: FrameData): void;
    onShutterButtonClicked(): Promise<void>;
    onTorchButtonClicked(): Promise<void>;
    onDotClick(trackedBarcodeIdentifier: string): void;
    onFinishButtonClicked(): void;
    onFindListUpdatedFeedback(): void;
    onFeedback(): void;
    private pauseSearching;
    private startSearching;
    private stopSearching;
}

export { BarcodeFindPresenter, ViewState };
