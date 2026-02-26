import { DataCaptureContext, CameraSettings, Camera } from '@scandit/web-datacapture-core';
import { a as BarcodeArListener, B as BarcodeAr } from '../BarcodeAr-02zxFUGP.js';
import { BarcodeArSession } from './BarcodeArSession.js';
import { BarcodeArView } from './BarcodeArView.js';
import { BarcodeArViewSettings } from './BarcodeArViewSettings.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './BarcodeArSettings.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../SymbologySettings.js';
import './BarcodeArFeedback.js';
import '../TrackedBarcode.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './BarcodeArAnnotationProvider.js';
import './ui/organisms/BarcodeArAnnotation.js';
import './ui/organisms/private/BarcodeArAnnotationVariation.js';
import './BarcodeArHighlightProvider.js';
import './ui/organisms/BarcodeArHighlight.js';
import './BarcodeArViewUiListener.js';

declare class BarcodeArPresenter implements BarcodeArListener {
    private readonly view;
    private context;
    private viewSettings;
    private readonly cameraSettings;
    private torchState;
    private cameraSupportMap;
    private zoomFactor;
    private cameras;
    readonly barcodeAr: BarcodeAr;
    constructor(view: BarcodeArView, context: DataCaptureContext, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings, cameraSettings: CameraSettings);
    get currentCamera(): Camera;
    isCameraMirrored(): boolean;
    prepare(): Promise<void>;
    dispose(): Promise<void>;
    startSearching(): Promise<void>;
    stopSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    emitTappedFeedback(): void;
    didUpdateSession(_: BarcodeAr, session: BarcodeArSession): void;
    private isTorchAvailableForCurrentCamera;
    onTorchButtonClicked(): Promise<void>;
    onZoomButtonClicked(): Promise<void>;
    onCameraSwitchButtonClicked(): Promise<void>;
}

export { BarcodeArPresenter };
