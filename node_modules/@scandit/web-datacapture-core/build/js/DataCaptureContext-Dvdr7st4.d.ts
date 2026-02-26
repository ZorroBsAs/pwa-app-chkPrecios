/// <reference types="emscripten" />
import { a as Camera, D as DeviceCamera, l as CameraSettings, b as CameraPosition, g as FrameSource, f as FrameSourceJSON } from './Camera-DhGjpcjv.js';
import { DataCaptureContextSettingsJSON, DataCaptureContextSettings } from './DataCaptureContextSettings.js';
import { LogoStyle, FocusGestureJSON, ZoomGestureJSON, FocusGesture, ZoomGesture } from './DataCaptureViewPlusRelated.js';
import { NotificationPresenter } from './NotificationPresenter/NotificationPresenter.js';
import { Anchor } from './commons/Anchor.js';
import { MarginsWithUnitJSON, MarginsWithUnit } from './commons/MarginsWithUnit.js';
import { Orientation } from './commons/Orientation.js';
import { Point, PointJSON } from './commons/Point.js';
import { PointWithUnitJSON, PointWithUnit } from './commons/PointWithUnit.js';
import { Quadrilateral } from './commons/Quadrilateral.js';
import { Size } from './commons/Size.js';
import { Serializable } from './private/Serializable.js';
import { DidTapCustomLocationsViewListener, StateToRender, StateToRenderDomView } from './private/CustomLocationsView.js';
import { nativeHandle } from './private/nativeHandle.js';
import { AnchorPositions } from './private/AnchorPositions.js';
import { JSONType } from './commons/JSONType.js';
import { OpenSourceSoftwareLicenseInfo } from './license/OpenSourceSoftwareLicenseInfo.js';
import { Logger } from './logger.js';
import { ColorType } from './private/FrameReaders/ColorType.js';
import { RectJSON, Rect } from './commons/Rect.js';
import { ProgressInfo } from './LoadingStatus.js';
import { ScanditIcon } from './ScanditIcon.js';
import { ScanditHTMLElement } from './private/utils/ScanditHTMLElement.js';
import { ImagePlane, ImageConverter_statics, ImageConverterInstance } from './private/djinni-types/index.js';
import { HTMLElementStateJSON } from './private/HtmlElementState.js';
import { AsyncStateMachine } from './private/utils/AsyncStateMachine.js';
import { Optional, MethodSignature } from './tsHelper.js';

interface DataCaptureOverlay extends Serializable {
    [nativeHandle]?: {
        className: string;
        id: number;
    };
    toJSONObject: () => any;
}
interface DataCaptureViewListener {
    didChangeSize?: (view: DataCaptureView$1, size: Size, orientation: Orientation) => void;
}
interface DataCaptureViewJSON {
    scanAreaMargins: MarginsWithUnitJSON;
    pointOfInterest: PointWithUnitJSON;
    logoAnchor: Anchor;
    logoOffset: PointWithUnitJSON;
    logoHidden: boolean;
    logoStyle: LogoStyle;
    overlays: ReturnType<DataCaptureOverlay["toJSONObject"]>[];
    controls: ReturnType<Control["toJSONObject"]>[];
    focusGesture: FocusGestureJSON | null;
    zoomGesture: ZoomGestureJSON | null;
}
interface DataCaptureViewConnectOptions {
    camera?: Camera;
}
declare class DataCaptureView$1 implements Serializable<DataCaptureViewJSON> {
    focusGesture: FocusGesture | null;
    zoomGesture: ZoomGesture | null;
    private _scanAreaMargins;
    private _pointOfInterest;
    private _logoStyle;
    private _logoAnchor;
    private _logoOffset;
    private _context;
    private readonly overlays;
    private readonly controls;
    private gestureRecognizer;
    private containerElement;
    private cameraPaintboardElement?;
    private singleImageUploaderPaintboardElement?;
    private frameSourceListener;
    private _previewCamera;
    private isConnected;
    private get videoElement();
    private visibilityListener;
    private cameraRecoveryListener;
    private controlsElement;
    private cameraRecoveryElement;
    private errorElement;
    private canvasElement;
    private frozenFrame;
    private frozenFrameCanvas;
    private _canvasDrawer;
    private readonly listeners;
    private htmlElement?;
    private htmlElementState?;
    private lastHtmlElementState;
    private isVideoElementDetached;
    private loadingOverlay;
    private customLocationsView;
    private lastFrameSourceState;
    private singleImageUploaderView;
    private orientation;
    private hiddenProperties;
    private orientationObserver;
    private onOrientationChangeListener;
    private hintPresenter;
    private onHintPresenterUpdateHandler;
    private onViewFinderUpdateRequestedHandler;
    private onWorkerMessageHandler;
    private localizationSubscription?;
    private htmlElementDidChangeHandler;
    private htmlElementDisconnectedHandler;
    private notificationPresenter;
    constructor();
    get scanAreaMargins(): MarginsWithUnit;
    set scanAreaMargins(margins: MarginsWithUnit);
    get pointOfInterest(): PointWithUnit;
    set pointOfInterest(pointOfInterest: PointWithUnit);
    get logoStyle(): LogoStyle;
    set logoStyle(logoStyle: LogoStyle);
    get logoAnchor(): Anchor;
    set logoAnchor(logoAnchor: Anchor);
    get logoOffset(): PointWithUnit;
    set logoOffset(logoOffset: PointWithUnit);
    private get cameraRecoveryText();
    private get width();
    private get height();
    private get canvasDrawer();
    /**
     * The current context as a PrivateDataCaptureContext
     */
    private get privateContext();
    static forContext(context: DataCaptureContext | null): Promise<DataCaptureView$1>;
    showProgressBar(): void;
    hideProgressBar(): void;
    setProgressBarPercentage(percentage: number | null): void;
    setProgressBarMessage(message: string): void;
    getContext(): DataCaptureContext | null;
    setContext(context: DataCaptureContext | null): Promise<void>;
    connectToElement(element: HTMLElement, options?: DataCaptureViewConnectOptions): void;
    detachFromElement(): void;
    addOverlay(overlay: DataCaptureOverlay): Promise<void>;
    removeOverlay(overlay: DataCaptureOverlay): Promise<void>;
    addListener(listener: DataCaptureViewListener): void;
    removeListener(listener: DataCaptureViewListener): void;
    /**
     * Converts a point in the coordinate system of the last visible frame and maps it to a coordinate in the view.
     * It does *not* take into account if the frameSource is mirrored.
     */
    viewPointForFramePoint(point: Point): Point;
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Quadrilateral;
    addControl(control: Control): void;
    removeControl(control: Control): void;
    toJSONObject(): DataCaptureViewJSON;
    isCameraRecoveryVisible(): boolean;
    setCameraRecoveryVisible(visible: boolean): void;
    allowPictureInPicture(allow: boolean): Promise<void>;
    protected viewAnchorPositionsForFrameAnchorPositions(anchorPositions: AnchorPositions): AnchorPositions;
    protected setDidTapCustomLocationsViewListener(didTapViewListener: DidTapCustomLocationsViewListener): void;
    protected renderCustomLocationsView(state: StateToRender | StateToRenderDomView): void;
    getNotificationPresenter(): NotificationPresenter;
    private removeStyles;
    private onHintPresenterUpdate;
    /** Called when the hint presenter requests the viewfinder rect. */
    private onViewFinderUpdateRequested;
    private clearHtmlElementContent;
    private setupHtmlElement;
    private setupHtmlElementSingleImageUploader;
    private setupHtmlElementVisibility;
    private createStyles;
    private onOrientationChange;
    private htmlElementDidChange;
    private htmlElementDisconnected;
    private handleVideoDisplay;
    private isCanvasDrawerWithMetrics;
    private onWorkerMessage;
    /**
     * Called when the view size has changed and SDC has recalculated everything, including the viewfinder rect.
     */
    private onSDCViewSizeChangedCallback;
    private updateHintPresenterViewFinderRect;
    private drawEngineCommands;
    private displayError;
    private clearError;
    private updateControls;
    private onFrameSourceChange;
    private onCameraStateChanged;
    private setVideoElementOpacity;
    private onSingleImageUploaderSettingsChange;
    private setHiddenProperty;
    private onVisibilityChange;
    private cameraRecovery;
    private freezeFrame;
    private unfreezeFrame;
}

type ControlType = "camera-fov" | "camera" | "shutter" | "torch";
interface SerializedControl {
    type: ControlType;
}
interface PrivateBaseControl {
    install: (view: DataCaptureView$1) => Promise<boolean>;
    remove: (definitiveRemoval?: boolean) => void;
    update?: (view: DataCaptureView$1) => void;
}
interface Control extends Serializable<SerializedControl> {
}
interface PrivateControl extends Control, PrivateBaseControl {
    view: DataCaptureView$1 | null;
}

/**
 * MESSAGES (ACTIONS) SENT TO THE WORKER
 */
type DataCaptureActionMessageKey = "convertToJPEGResult" | "createContext" | "deleteFrameData" | "dispose" | "documentVisibility" | "extractCentaurusLicense" | "flushAnalytics" | "isFeatureSupported" | "loadLibrary" | "onTap" | "processFrame" | "reportCameraProperties" | "requestFrameData" | "setFrameSource" | "setLogLevel" | "updateContext" | "hintPresenterV2update" | "getViewfinderInfo" | "getOpenSourceSoftwareLicenseInfo" | "addNativeOverlay" | "removeNativeOverlay";
interface ExtractCentaurusLicenseResponse {
    centaurus: {
        licenseKey: string;
    };
}
type RequestFrameDataResponse = {
    data: Uint8ClampedArray;
    colorType: ColorType;
    frameId: FrameId;
} | {
    data: null;
    colorType: null;
    frameId: null;
};
interface IsFeatureSupportedResponse {
    supported: boolean;
}
interface GetViewfinderInfoResponse {
    isDisplayingViewfinder: boolean;
    rect: RectJSON;
}
interface GetOpenSourceSoftwareLicenseInfoResponse {
    licenseText: string;
}
type WorkerResponse<C> = C extends "processFrame" ? ProcessFrameParameters : C extends "extractCentaurusLicense" ? ExtractCentaurusLicenseResponse : C extends "requestFrameData" ? RequestFrameDataResponse : C extends "isFeatureSupported" ? IsFeatureSupportedResponse : C extends "getViewfinderInfo" ? GetViewfinderInfoResponse : C extends "getOpenSourceSoftwareLicenseInfo" ? GetOpenSourceSoftwareLicenseInfoResponse : undefined;
interface DataCaptureActionMessage {
    command: DataCaptureActionMessageKey;
    id: number;
}
type LoadLibraryDataCaptureAction = DataCaptureActionMessage & LoadLibraryParameters & {
    command: "loadLibrary";
};
type ConvertToJPEGResultDataCaptureAction = DataCaptureActionMessage & {
    command: "convertToJPEGResult";
    imageId: number;
    result: Uint8Array;
};
type CreateContextDataCaptureAction = CreateContextParameters & DataCaptureActionMessage & {
    command: "createContext";
};
type SetFrameSourceDataCaptureAction = DataCaptureActionMessage & SetFrameSourceParameters & {
    command: "setFrameSource";
};
type ProcessFrameDataCaptureAction = DataCaptureActionMessage & ProcessFrameParameters & {
    command: "processFrame";
};
type RequestFrameDataDataCaptureAction = DataCaptureActionMessage & {
    command: "requestFrameData";
    frameId: FrameId;
};
type DeleteFrameDataDataCaptureAction = DataCaptureActionMessage & {
    command: "deleteFrameData";
    frameId: FrameId;
};
type VisibilityChangeAction = DataCaptureActionMessage & {
    command: "documentVisibility";
    state: DocumentVisibilityState;
};
type IsFeatureSupportedAction = DataCaptureActionMessage & {
    command: "isFeatureSupported";
    feature: LicensedFeature;
};
type UpdateContextDataCaptureAction = DataCaptureActionMessage & {
    command: "updateContext";
    context: DataCaptureContextJSON;
    view: UpdateContextParameters["view"];
};
type DisposeDataCaptureAction = DataCaptureActionMessage & {
    command: "dispose";
};
type FlushAnalyticsDataCaptureAction = DataCaptureActionMessage & {
    command: "flushAnalytics";
};
type ReportCameraPropertiesDataCaptureAction = DataCaptureActionMessage & ReportCameraPropertiesParameters & {
    command: "reportCameraProperties";
};
type SetLogLevelDataCaptureAction = DataCaptureActionMessage & {
    command: "setLogLevel";
    level: Logger.Level;
};
type ExtractCentaurusLicenseDataCaptureAction = DataCaptureActionMessage & {
    command: "extractCentaurusLicense";
    licenseKey: string;
};
type OnTapAction = DataCaptureActionMessage & {
    command: "onTap";
    point: PointJSON;
};
type HintPresenterV2updateAction = DataCaptureActionMessage & {
    command: "hintPresenterV2update";
};
type GetViewfinderInfoAction = DataCaptureActionMessage & {
    command: "getViewfinderInfo";
};
type GetOpenSourceSoftwareLicenseInfoAction = DataCaptureActionMessage & {
    command: "getOpenSourceSoftwareLicenseInfo";
};
type AddNativeOverlayAction = DataCaptureActionMessage & {
    command: "addNativeOverlay";
    overlayHandle: {
        className: string;
        id: number;
    };
};
type RemoveNativeOverlayAction = DataCaptureActionMessage & {
    command: "removeNativeOverlay";
    overlayHandle: {
        className: string;
        id: number;
    };
};
type AnyDataCaptureActionMessage = ConvertToJPEGResultDataCaptureAction | CreateContextDataCaptureAction | DeleteFrameDataDataCaptureAction | DisposeDataCaptureAction | ExtractCentaurusLicenseDataCaptureAction | FlushAnalyticsDataCaptureAction | IsFeatureSupportedAction | LoadLibraryDataCaptureAction | OnTapAction | ProcessFrameDataCaptureAction | ReportCameraPropertiesDataCaptureAction | RequestFrameDataDataCaptureAction | SetFrameSourceDataCaptureAction | SetLogLevelDataCaptureAction | UpdateContextDataCaptureAction | VisibilityChangeAction | HintPresenterV2updateAction | GetViewfinderInfoAction | GetOpenSourceSoftwareLicenseInfoAction | AddNativeOverlayAction | RemoveNativeOverlayAction;
/**
 * MESSAGES EMITTED BY THE WORKER
 */
type DataCaptureCallbackMessageKeys = "contextDidChangeStatus" | "didStartObservingContext" | "draw" | "hideHint" | "isFeatureSupported" | "loadLibraryProgress" | "performanceMetricsReport" | "showHint" | "successFeedback" | "updateHint" | "workerTaskId" | "onFrameProcessingStarted" | "onFrameProcessingFinished" | "onFrameSkipped" | "showToast" | "hideToast" | "showGuidance" | "hideGuidance" | "startUpdateTimer" | "stopUpdateTimer" | "setViewfinderRect" | "viewSizeChanged";
interface BaseDataCaptureCallbackMessage {
    type: DataCaptureCallbackMessageKeys;
}
interface LoadLibraryProgressMessage {
    type: "loadLibraryProgress";
    payload: ProgressInfo;
}
interface ConsoleWorkerMessage {
    type: "console";
    payload: string;
}
interface ConvertToJPEGMessage {
    type: "convertToJPEG";
    imageId: number;
    width: number;
    height: number;
    data: Uint8Array;
    planes: ImagePlane[];
    orientation: number;
    quality: number;
}
interface WorkerTaskIdWorkerMessage extends BaseDataCaptureCallbackMessage {
    type: "workerTaskId";
    command: string;
    id: number;
    error?: unknown;
    payload?: unknown;
}
type DrawWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "draw";
    payload: Uint8Array;
};
type DidChangeStatusWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "contextDidChangeStatus";
    payload: ContextStatusJSON;
};
type StartObservingContextWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "didStartObservingContext";
};
type SuccessFeedbackWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "successFeedback";
};
type ShowHintWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "showHint";
    payload: {
        text: string;
        style: HintStyle;
    };
};
type UpdateHintWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "updateHint";
    payload: {
        style: HintStyle;
    };
};
type IsFeatureSupportedMessage = BaseDataCaptureCallbackMessage & {
    type: "isFeatureSupported";
    payload: {
        [key in LicensedFeature]: boolean;
    };
};
type HideHintWorkerMessage = BaseDataCaptureCallbackMessage & {
    type: "hideHint";
    payload: Record<string, never>;
};
type PerformanceMetricsReportMessage = BaseDataCaptureCallbackMessage & {
    type: "performanceMetricsReport";
    payload: PerformanceMetrics;
};
type DidTapTrackedBarcode = BaseDataCaptureCallbackMessage & {
    type: "didTapTrackedBarcode";
    payload: any;
};
type OnFrameProcessingStartedMessage = BaseDataCaptureCallbackMessage & {
    type: "onFrameProcessingStarted";
};
type OnFrameProcessingFinishedMessage = BaseDataCaptureCallbackMessage & {
    type: "onFrameProcessingFinished";
};
type OnFrameSkippedMessage = BaseDataCaptureCallbackMessage & {
    type: "onFrameSkipped";
};
type ShowToastMessage = BaseDataCaptureCallbackMessage & {
    type: "showToast";
    payload: GenericHint;
};
type HideToastMessage = BaseDataCaptureCallbackMessage & {
    type: "hideToast";
    payload: GenericHint;
};
type ShowGuidanceMessage = BaseDataCaptureCallbackMessage & {
    type: "showGuidance";
    payload: GenericHint;
};
type HideGuidanceMessage = BaseDataCaptureCallbackMessage & {
    type: "hideGuidance";
    payload: GenericHint;
};
type StartUpdateTimerMessage = BaseDataCaptureCallbackMessage & {
    type: "startUpdateTimer";
    payload: {
        duration: {
            unit: "ms";
            value: number;
        };
    };
};
type StopUpdateTimerMessage = BaseDataCaptureCallbackMessage & {
    type: "stopUpdateTimer";
};
interface ViewInfo<T extends Orientation | number = Orientation> {
    width: number;
    height: number;
    orientation: T;
    viewFinderRect: RectJSON;
}
type ViewSizeChangedMessage = BaseDataCaptureCallbackMessage & {
    type: "viewSizeChanged";
    payload: ViewInfo | null;
};
type DataCaptureCallbackMessage = ConsoleWorkerMessage | ConvertToJPEGMessage | DidChangeStatusWorkerMessage | DrawWorkerMessage | HideHintWorkerMessage | IsFeatureSupportedMessage | LoadLibraryProgressMessage | PerformanceMetricsReportMessage | ShowHintWorkerMessage | StartObservingContextWorkerMessage | SuccessFeedbackWorkerMessage | UpdateHintWorkerMessage | WorkerTaskIdWorkerMessage | OnFrameProcessingStartedMessage | OnFrameProcessingFinishedMessage | OnFrameSkippedMessage | ShowToastMessage | HideToastMessage | ShowGuidanceMessage | HideGuidanceMessage | StartUpdateTimerMessage | StopUpdateTimerMessage | ViewSizeChangedMessage;
/**
 * OTHERS
 */
type PayloadForCommand<A, C> = A extends {
    command: C;
} ? A : never;
interface DataCaptureWorker extends Omit<Worker, "postMessage"> {
    onmessage: ((this: Worker, event_: MessageEvent & {
        data: unknown;
    }) => void) | null;
    postMessage: <C extends AnyDataCaptureActionMessage["command"]>(message: PayloadForCommand<AnyDataCaptureActionMessage, C>, transfer?: Transferable[]) => void;
}
interface EmscriptenClassHandle<Self = EmscriptenClassHandle<unknown>> {
    clone: () => Self;
    delete: () => void;
    isDeleted: () => boolean;
    deleteLater: () => void;
    isAliasOf: () => Self;
}
interface DataCaptureContext$1 extends EmscriptenClassHandle {
    setCameraProperties: (deviceId: string, isFrontFacing: boolean, hasAutofocus: boolean) => void;
    addListener: (function_: unknown) => void;
    addFrameListener: (listener: unknown) => void;
    dispose: () => void;
    setFrameSource: (source: EmscriptenClassHandle) => void;
    flushAnalytics: () => void;
    isFeatureSupported: (feature: LicensedFeature) => boolean;
}
interface DataCaptureImageBufferFrameSource extends EmscriptenClassHandle {
    outputFrame: (address: number, width: number, height: number, format: unknown) => void;
}
interface GestureListener extends EmscriptenClassHandle<GestureListener> {
    onTap(point: string): void;
}
interface GestureRecognizer extends EmscriptenClassHandle {
    setGestureListener(gestureListener: GestureListener, flags: number): void;
}
interface DataCaptureView extends EmscriptenClassHandle {
    setViewSize: (w: number, h: number, orientation: Orientation) => void;
    getViewInfo: () => string;
    setNeedsRedrawDelegate: (delegate: unknown) => void;
    draw: () => void;
    getDrawCommands: () => Uint8Array;
    isViewRefreshHandlerSet: boolean;
    hintPresenterInitialized: () => boolean;
    setHintPresenter: (hintPresenter: unknown) => void;
    setHintPresenterV2: (hintPresenterV2: HintPresenterV2) => void;
    setGestureRecognizer: (recognizer: GestureRecognizer) => void;
    isDisplayingViewfinder: () => boolean;
    getViewfinderRect: () => string;
    addOverlay: (overlay: EmscriptenClassHandle) => void;
    removeOverlay: (overlay: EmscriptenClassHandle) => void;
}
interface JSONParseable extends EmscriptenClassHandle {
    toJson: () => string;
}
interface DataCaptureContextDeserializerResult extends EmscriptenClassHandle {
    getContext: () => DataCaptureContext$1;
    getView: () => DataCaptureView | undefined;
}
interface DataCaptureContextDeserializer extends EmscriptenClassHandle {
    contextFromJson: (json: string) => DataCaptureContextDeserializerResult | null;
    updateContextFromJson: (context: DataCaptureContext$1, view: DataCaptureView | undefined, json: string) => DataCaptureContextDeserializerResult | null;
    getLastError: () => string;
}
interface CaptureModeDeserializerInstance extends EmscriptenClassHandle {
    setListener: (listener: unknown) => void;
}
interface ModuleMirrorAxis {
    None: unknown;
    X: unknown;
    Y: unknown;
}
interface Vector<T = unknown> {
    push_back: (element: unknown) => void;
    get: (index: number) => T;
    size: () => number;
}
interface WasmFrameData extends EmscriptenClassHandle {
    getFrameData: () => Uint8ClampedArray;
    getWidth: () => number;
    getHeight: () => number;
    getMirrorAxis: () => unknown;
    getOrientation: () => unknown;
}
declare enum HintFont {
    Body = "body",
    Footnote = "footnote"
}
declare enum HintTextAlignment {
    Start = "start",
    Center = "center",
    End = "end"
}
declare enum HintWidth {
    Normal = "normal",
    Wider = "wider",
    FitText = "fitText"
}
declare enum HintHeight {
    Normal = "normal",
    Taller = "taller"
}
declare enum HintCornerStyle {
    Square = "square",
    Rounded = "rounded"
}
declare enum HintIcon {
    None = "none",
    Check = "check",
    ExclamationMark = "exclamationMark"
}
declare enum HintAnchor {
    Top = "top",
    Center = "center",
    AboveViewFinder = "aboveViewFinder",
    BelowViewFinder = "belowViewFinder"
}
interface HintStyle {
    textColor: string;
    textAlignment: HintTextAlignment;
    backgroundColor: string;
    hintIcon: HintIcon;
    isAnimatedToView: boolean;
    hintAnchor: HintAnchor;
    hintAnchorOffset: number;
    horizontalMargin: number;
    maxWidthFraction: number;
    textSize: number;
    textWeight: number;
    lineHeight: number;
    iconColor: string;
    maxLines: number;
    cornerRadius: number;
    fitToText: boolean;
}
declare enum GuidanceHintAnchor {
    AboveViewFinder = "aboveViewFinder",
    BelowViewFinder = "belowViewFinder"
}
declare enum GuidanceHintStyle {
    BlackOnWhite = "blackOnWhite",
    WhiteOnBlack = "whiteOnBlack",
    Transparent = "transparent"
}
interface GuidanceHint {
    text: string;
    guidanceHintStyle: GuidanceHintStyle;
    guidanceHintAnchor: GuidanceHintAnchor;
    hintStyle?: HintStyle;
    moveCloserAnimation?: boolean;
}
declare enum ToastHintStyle {
    Success = "success",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Notification = "notification"
}
interface ToastHint {
    text: string;
    tag: string;
    toastHintStyle: ToastHintStyle;
    hintStyle?: HintStyle;
}
interface GenericHint {
    text: string;
    tag?: string;
    hintStyle: Omit<HintStyle, "anchor" | "verticalOffsetRatio" | "font" | "hintWidth" | "hintHeight" | "hintCornerStyle">;
}
interface PerformanceMetrics {
    cameraOutputFrames: number;
    redrawRequestsCount: number;
    actualRedrawsCount: number;
    frameDataPoolSize: number;
    frameProcessingStartedCount: number;
    frameProcessedCount: number;
    frameSkippedCount: number;
}
declare enum LicensedFeature {
    Ocr = 0,
    HideLogo = 1,
    ShowTestLicenseMessage = 2,
    AugmentedReality = 5,
    ActivityPingStatsAddon = 8,
    ActivityPing = 9,
    Registration = 10,
    Parser = 11,
    BarcodeCapture = 14,
    Analytics = 17,
    AnalyticsBatchMode = 18,
    AnalyticsScanContent = 19,
    AnalyticsOnlineVerification = 20,
    SparkScan = 21,
    AamvaIdBarcodeVerification = 22,
    MappingForTracking = 23,
    BarcodeFind = 24,
    MandatoryRegistration = 25,
    FeatureTracking = 26,
    IdCaptureViz = 27,
    IdCaptureMrz = 28,
    IdCaptureBarcode = 29,
    BarcodeSelectionAimToScan = 30,
    BarcodeSelectionTapToScan = 31,
    BarcodeCount = 32,
    BarcodePick = 33,
    IdVerificationDataComparison = 34,
    SmartLabelBarcode = 35,
    SmartLabelText = 36,
    VoidedIdDetection = 37,
    BarcodeArFull = 38,
    BarcodeSequence = 39
}
interface HintPresenterV2 extends EmscriptenClassHandle {
    showToast: (toastHint: string) => void;
    hideToast: (tag: string) => void;
    hideAllToasts: () => void;
    showGuidance: (guidanceHint: string) => void;
    hideCurrentGuidance: () => void;
    update: () => void;
}
interface PlatformHintPresenter extends EmscriptenClassHandle {
    setHintPresenter(presenter: HintPresenterV2): void;
    showToast(toast: string): void;
    hideToast(toast: string): void;
    showGuidance(guidanceHint: string): void;
    hideGuidance(guidanceHint: string): void;
    startUpdateTimer(intervalMs: number): void;
    stopUpdateTimer(): void;
}
interface Module extends EmscriptenModule {
    ImageConverter: ImageConverter_statics;
    ImageConverterInstance: ImageConverterInstance;
    callMain: () => void;
    canvas: OffscreenCanvas | undefined;
    __emscripten_proxy_main?: Record<number | string | symbol, unknown>;
    mainScriptUrlOrBlob: string;
    DataCaptureContextDeserializer: new (fsFolderPath: string, deviceId: string, deviceModel: string, domain: string, parentDomain: string, modeDeserializer: Vector, delayedRegistration: boolean, highEndBlurryRecognition: boolean, resourcePath: string) => DataCaptureContextDeserializer;
    DataCaptureContextListener: {
        extend: (target: "DataCaptureContextListener", parameters: {
            didChangeStatus: (context: DataCaptureContext$1, contextStatus: {
                toJson: () => string;
            }) => void;
            didStartObservingContext: (context: DataCaptureContext$1) => void;
            didStopObservingContext: (context: DataCaptureContext$1) => void;
        }) => new () => EmscriptenClassHandle;
    };
    DataCaptureContextFrameListener: {
        extend: (target: "DataCaptureContextFrameListener", parameters: {
            onObservationStarted: (context: DataCaptureContext$1) => void;
            onObservationStopped: (context: DataCaptureContext$1) => void;
            onFrameProcessingStarted: (context: DataCaptureContext$1, frameData: WasmFrameData) => void;
            onFrameProcessingFinished: (context: DataCaptureContext$1, frameData: WasmFrameData) => void;
            onFrameSkipped: (context: DataCaptureContext$1, frameData: WasmFrameData) => void;
        }) => new () => EmscriptenClassHandle;
    };
    HintPresenter: {
        extend: (target: "HintPresenter", parameters: {
            showHint: (hint: string, style: string) => void;
            updateHint: (style: string) => void;
            hideHint: () => void;
        }) => new () => EmscriptenClassHandle;
    };
    PlatformHintPresenter: {
        extend: (target: "PlatformHintPresenter", parameters: {
            setHintPresenter(presenter: HintPresenterV2): void;
            showToast(toastHint: string): void;
            hideToast(toastHint: string): void;
            showGuidance(guidanceHint: string): void;
            hideGuidance(guidanceHint: string): void;
            startUpdateTimer(intervalMs: number): void;
            stopUpdateTimer(): void;
        }) => new () => PlatformHintPresenter;
    };
    HintPresenterV2: new (platformHintPresenter: PlatformHintPresenter) => HintPresenterV2;
    ImageBufferFrameSource: new (mirroredAxis: unknown, isCameraFrameSource: boolean, orientation?: number) => DataCaptureImageBufferFrameSource;
    ImageBufferFormat: {
        Grayscale8: unknown;
        Rgb888: unknown;
        Rgba8888: unknown;
    };
    Axis: ModuleMirrorAxis;
    NeedsRedrawDelegate: {
        extend: (target: "NeedsRedrawDelegate", parameters: {
            setNeedsRedrawIn: (inMs: number) => void;
        }) => new () => EmscriptenClassHandle;
    };
    GestureRecognizer: {
        extend: (target: "GestureRecognizer", parameters: {
            setGestureListener(gestureListener: GestureListener, flags: number): void;
        }) => new () => GestureRecognizer;
    };
    VectorDataCaptureModeDeserializer: new () => Vector;
    allocateUint8Array: (length: number) => number;
    deleteUint8Array: (adress: number) => void;
    DataDecoding: {
        extend: (target: "DataDecoding", options: {
            decode: (rawData: ArrayBuffer, encodingRanges: string) => string;
        }) => new () => EmscriptenClassHandle;
    };
    setDataDecoding: (decoder: unknown) => void;
    LicenseUtils: {
        getBlinkIdLicenseKey: (scanditLicense: string) => string;
    };
    Feedback: {
        extend: (target: "Feedback", parameters: {
            emit: () => void;
        }) => new () => EmscriptenClassHandle;
    };
    dispose: () => void;
    LicenseFeature: LicensedFeature;
    addBarcodeFindToContext: (context: DataCaptureContext$1, mode: EmscriptenClassHandle) => void;
    removeBarcodeFindFromContext: (context: DataCaptureContext$1, mode: EmscriptenClassHandle) => void;
    addBarcodeFindBasicOverlayToView: (view: DataCaptureView, overlay: EmscriptenClassHandle) => void;
    removeBarcodeFindBasicOverlayFromView: (view: DataCaptureView, overlay: EmscriptenClassHandle) => void;
    addBarcodeArToContext: (context: DataCaptureContext$1, mode: EmscriptenClassHandle) => void;
    removeBarcodeArFromContext: (context: DataCaptureContext$1, mode: EmscriptenClassHandle) => void;
    OpenSourceSoftwareLicenseInfo: {
        getLicenseText(): string;
    };
}
type AugmentedWorker<M extends EmscriptenModule> = Worker & {
    Module: M;
    OffscreenCanvas: new (w: number, h: number) => OffscreenCanvas;
};
type EngineWorkerResponse<C extends DataCaptureActionMessageKey> = WorkerResponse<C> extends Promise<void> | void ? Promise<void> | void : {
    payload: WorkerResponse<C>;
    transferables?: Transferable[];
};
interface ModuleHandler<M extends Module> {
    get: () => M;
    set: (v: M) => void;
}

interface LoadLibraryParameters {
    libraryLocation: string;
    locationPath: string;
    writableDataPathOverride?: string;
    indexedDBTimeoutMs: number;
    verifyResponseHash: boolean;
    onProgress?: (info: ProgressInfo) => void;
    referredOrigin?: string;
    fixedWasmMemory: number | null;
    simdSupport: boolean;
    threadsSupport: boolean;
}
interface CreateContextParameters {
    context: DataCaptureContextJSON;
    deviceId: string;
    delayedRegistration: boolean;
    highEndBlurryRecognition: boolean;
    appName: string | null;
    parentDomain: string;
}
interface UpdateContextParameters {
    context: DataCaptureContextJSON;
    view: {
        width: number;
        height: number;
        visible: boolean;
        orientation: Orientation;
    } | null;
}
interface SetFrameSourceParameters {
    mirrorAxis: PrivateMirrorAxis;
    isCameraFrameSource: boolean;
}
type ProcessFrameParameters = FrameCapture;
interface ReportCameraPropertiesParameters {
    deviceId: string;
    hasAutofocus: boolean;
    isFrontFacing: boolean;
}
interface WorkerFunctions {
    getOffscreenCanvas: () => OffscreenCanvas | undefined;
    postMessage: (message: DataCaptureCallbackMessage, transfer?: Transferable[]) => void;
}
/**
 * DataCaptureEngine is an abstraction of the engine, it is created by the engine worker
 * and should be used as a singleton. It calls the underlying engine methods directly.
 */
declare class DataCaptureEngine<M extends Module> {
    private static get3dPartyLicenseKeyMethodName;
    context: DataCaptureContext$1;
    lastUsedModuleMirrorAxis: unknown;
    view: DataCaptureView | undefined;
    hintPresenterV2: HintPresenterV2 | null;
    /**
     * Maximum number of frames to keep in the pool.
     * Set to 5 to balance between:
     * - Providing sufficient buffering for frame listener callbacks that may arrive slightly out-of-order
     * - Minimizing memory overhead in the worker thread
     * - At 30 fps, 5 frames = ~167ms of retention, sufficient for most listener callbacks
     * - For higher frame rates, FIFO eviction prevents unbounded growth
     */
    protected readonly MAX_NUMBER_OF_IMAGES_IN_FRAME_DATA_POOL: number;
    protected readonly moduleHandler: ModuleHandler<M>;
    protected readonly redrawInterval: number;
    protected readonly redrawRequests: number[];
    protected readonly workerFunctions: WorkerFunctions;
    protected _isDrawLoopRunning: boolean;
    protected contextDeserializer: DataCaptureContextDeserializer | undefined;
    /**
     * Frame data pool that stores copies of frame data for access by listeners.
     * Frame data is stored with frameId as key, typically using performance.now() for high-precision timing.
     *
     * Frame ID Generation & Management:
     * - frameId comes from camera frame sources (typically performance.now() in milliseconds with decimal precision)
     * - Frames are stored in insertion order (Map preserves insertion order in JavaScript)
     * - Memory is managed through two complementary mechanisms:
     *   1. Bounded pool size (MAX_NUMBER_OF_IMAGES_IN_FRAME_DATA_POOL) with FIFO eviction of oldest frames
     *   2. Immediate deletion after transfer via requestFrameData() to give callers control over lifetime
     * - For the deleteFrameData() API, frames marked for deletion are cleaned up on next prepareFrameForListener call
     * - This combination prevents both unbounded memory growth and memory leaks from unrequested frames
     */
    protected frameDataPool: Map<FrameId, {
        data: Uint8ClampedArray;
        colorType: ColorType;
        frameId: FrameId;
        width: number;
        height: number;
    }>;
    protected lastFrameColorType: ColorType;
    protected lastFrameId: FrameId | null;
    protected imageFrameSource?: DataCaptureImageBufferFrameSource;
    protected libraryLoadingPromise: Promise<void> | undefined;
    protected loopTimeoutId?: ReturnType<typeof setTimeout>;
    protected resourcePath: string;
    protected writableDataPath: string;
    protected poorMansBenchmarkLogs: boolean;
    protected parentDomain: string;
    protected readonly writableDataPathStandard: string;
    protected readonly resourceFilesSubfolder: string;
    protected performanceMetricsReporterTimer: ReturnType<typeof setTimeout> | number | undefined;
    protected lastMetricsReportTime: number;
    protected readonly metricsReportInterval: number;
    protected performanceMetrics: PerformanceMetrics;
    protected frameProcessingStartedCount: number;
    protected frameProcessingFinishedCount: number;
    protected gestureRecognizer: GestureRecognizer | null;
    private gestureListener;
    private webPlatformHintPresenter;
    private webImageConverterInstance;
    private lastViewInfo;
    constructor(moduleHandler: ModuleHandler<M>, workerFunctions: WorkerFunctions);
    get Module(): M;
    set isDrawLoopRunning(newValue: boolean);
    get isDrawLoopRunning(): boolean;
    /**
     * Prepares frame data for listener callbacks by pooling it and cleaning up marked frames.
     * Called on session update for tracking modes and on didScan for scan modes.
     * @param frameData - The frame data to prepare for listener access.
     * @returns The loadable frame data metadata.
     */
    prepareFrameForListener(frameData: WasmFrameData): PrivateLoadableFrameData;
    createContext(createContextJSON: CreateContextParameters): EngineWorkerResponse<"createContext">;
    convertToJPEGResult(imageId: number, result: Uint8Array): void;
    /**
     * Returns the ImageConverterInstance to be used in the worker thread. Depending on the availability of
     * OffscreenCanvas, a different implementation is returned.
     */
    protected getImageConverterInstance(options: {
        quality: number;
    }): ImageConverterInstance;
    onTap(point: PointJSON): void;
    hintPresenterV2Update(): void;
    private lastFrameProcessingStartedCount;
    private lastFrameProcessingFinishedCount;
    startReportingPerformanceMetrics(): void;
    private scheduleMetricsReporting;
    private checkAndReportMetrics;
    reportPerformanceMetrics(): Promise<void>;
    deleteFrameData(frameId: FrameId): void;
    dispose(): EngineWorkerResponse<"dispose">;
    private cleanupMetricsReporting;
    flushAnalytics(): void;
    extractCentaurusLicense(scanditLicenseKey: string): EngineWorkerResponse<"extractCentaurusLicense">;
    getModeDeserializers(): Vector;
    loadLibrary(parameters: LoadLibraryParameters): EngineWorkerResponse<"loadLibrary">;
    processFrame(parameters: ProcessFrameParameters): EngineWorkerResponse<"processFrame">;
    reportCameraProperties(properties: ReportCameraPropertiesParameters): EngineWorkerResponse<"reportCameraProperties">;
    /**
     * Request frame data from the pool.
     * Converts grayscale to RGBA in the worker if needed.
     * Frames are immediately deleted after transfer to prevent memory accumulation.
     * @param frameId - The ID of the frame to retrieve.
     * @returns The frame data, with the frame deleted from the pool immediately after.
     */
    requestFrameData(frameId: FrameId): EngineWorkerResponse<"requestFrameData">;
    scheduleRedraw(view: DataCaptureView, redrawInMs: number): void;
    sendViewRefreshCommands(commands: Uint8Array): void;
    setFrameSource(mirrorAxis: PrivateMirrorAxis, isCameraFrameSource: boolean): EngineWorkerResponse<"setFrameSource">;
    /**
     * The draw loop check at regular interval if any redraw request were made by the engine.
     * If a redraw is necessary, it gathers and sends drawing commands to the main thread.
     */
    startDrawLoop(view: DataCaptureView): void;
    updateContext(contextUpdateParameters: UpdateContextParameters): EngineWorkerResponse<"updateContext">;
    notifyMainThreadOnViewInfoChanged(view?: DataCaptureView): void;
    protected getViewInfo(view?: DataCaptureView | null): ViewInfo | null;
    protected getOrientationFromNumber(orientation: number): Orientation;
    /**
     * Called before updateContextFromJson
     *
     * @protected
     * @param {UpdateContextParameters} contextUpdateParameters
     * @returns {UpdateContextParameters}
     */
    protected onBeforeUpdateContextHook(contextUpdateParameters: UpdateContextParameters): UpdateContextParameters;
    onDocumentVisibilityChange(state: DocumentVisibilityState): void;
    isFeatureSupported(feature: LicensedFeature): EngineWorkerResponse<"isFeatureSupported">;
    getViewfinderInfo(): EngineWorkerResponse<"getViewfinderInfo">;
    getOpenSourceSoftwareLicenseInfo(): EngineWorkerResponse<"getOpenSourceSoftwareLicenseInfo">;
    protected getWasmDynamicLibraries(coreWasmURI: string): string[];
    protected getWasmCoreExpectedHash(simdSupport: boolean, threadsSupport: boolean): string;
    protected getWasmCoreFileName(simdSupport: boolean, threadsSupport: boolean): string;
    protected getWasmMetadata(): Record<string, {
        bytes: number;
    }>;
    protected getWasmSideModuleFileName(): string;
    private _loadProgressCallback;
    /**
     * Redraw requests are scheduled at [now + redrawInMs], so when pushed they must be sorted
     * in chronological order so that we can later easily check if we need to redraw by checking
     * the first element.
     * @param redrawInMs
     */
    private addRedrawRequest;
    private contextDidChangeStatus;
    private didStartObservingContext;
    private mapMirrorAxisOnModule;
    protected setView(view: DataCaptureView | undefined): void;
    /**
     * Add a native overlay to the view without passing from the deserializer.
     * must be implemented in the specific module.
     * @param event - The message event containing the overlay handle.
     */
    addNativeOverlay(event: MessageEvent<AnyDataCaptureActionMessage>): void;
    /**
     * Remove a native overlay from the view.
     * must be implemented in the specific module.
     * @param event - The message event containing the overlay handle.
     */
    removeNativeOverlay(event: MessageEvent<AnyDataCaptureActionMessage>): void;
    private setViewRefreshHandler;
    private setupDataDecoding;
    private start;
    private getWritableDataPath;
    private numOfMBToPages;
    private setup;
}

declare enum MeteringMode {
    CONTINUOUS = "continuous",
    MANUAL = "manual",
    NONE = "none",
    SINGLE_SHOT = "single-shot"
}
declare enum CameraResolutionConstraint {
    ULTRA_HD = 0,
    FULL_HD = 1,
    HD = 2,
    SD = 3,
    NONE = 4
}
interface ExtendedMediaTrackCapabilities extends MediaTrackCapabilities {
    exposureCompensation?: DoubleRange;
    exposureMode?: MeteringMode[];
    exposureTime?: DoubleRange;
    focusDistance?: DoubleRange;
    focusMode?: MeteringMode[];
    torch?: boolean;
    zoom?: DoubleRange;
}
interface ExtendedMediaTrackConstraintSet extends MediaTrackConstraintSet {
    exposureCompensation?: ConstrainDouble | number;
    exposureMode?: MeteringMode;
    exposureTime?: ConstrainDouble | number;
    focusDistance?: ConstrainDouble | number;
    focusMode?: MeteringMode;
    torch?: boolean;
    zoom?: ConstrainDouble | number;
}
interface GUI {
    isCameraRecoveryVisible: () => boolean;
    setCameraRecoveryVisible: (visible: boolean) => void;
}
/**
 * Branded type for frame IDs to improve type safety.
 *
 * Frame IDs are high-resolution timestamps generated via performance.now() using getTimestamp().
 * Using a branded type prevents accidental mixing with other numeric IDs and
 * makes the intent of numeric values explicit in type signatures.
 *
 * Example:
 * ```typescript
 * // ✓ Correct: explicitly marked as a frame ID
 * const frameId: FrameId = getTimestamp() as FrameId;
 *
 * // ✗ TypeScript error: number is not assignable to FrameId
 * const wrongId: FrameId = 12345;
 * ```
 *
 * Benefits:
 * - Prevents confusion between frame IDs and other numeric identifiers
 * - Makes it immediately clear in function signatures that a value is a frame ID
 * - Compiler catches accidental type mismatches at compile time
 */
declare const FrameIdBrand: unique symbol;
type FrameId = number & {
    readonly [FrameIdBrand]: "FrameId";
};
/**
 * Creates a branded FrameId using the current high-resolution timestamp.
 * @returns A branded FrameId value
 */
declare function createFrameId(): FrameId;
interface FrameCapture {
    colorType?: ColorType;
    data: Uint8ClampedArray;
    frameId: FrameId;
    height: number;
    width: number;
}
declare enum CameraManagerEvent {
    CAMERA_PROPERTIES = "cameraProperties",
    CAMERA_ACCESS_ERROR = "cameraAccessError"
}
type CameraManagerEventParameters<C> = C extends CameraManagerEvent.CAMERA_PROPERTIES ? ReportCameraPropertiesParameters : C extends CameraManagerEvent.CAMERA_ACCESS_ERROR ? any : never;
/**
 * A barcode picker utility class used to handle camera interaction.
 */
declare class CameraManager {
    private static readonly autofocusIntervalMs;
    private static readonly cameraAccessTimeoutMs;
    private static readonly getCapabilitiesTimeoutMs;
    private static readonly manualFocusWaitTimeoutMs;
    private static readonly manualToAutofocusResumeTimeoutMs;
    private static readonly noCameraErrorParameters;
    private static readonly notReadableErrorParameters;
    private static readonly videoMetadataCheckIntervalMs;
    private static readonly videoMetadataCheckTimeoutMs;
    private static MIRRORED_CLASS_NAME;
    private static _instance;
    activeCamera?: DeviceCamera;
    activeCameraSettings?: CameraSettings;
    canvas: HTMLCanvasElement;
    gui: GUI;
    selectedCamera?: DeviceCamera;
    videoElement: HTMLVideoElement;
    private constraint;
    private clipArea?;
    private readonly checkCameraVideoStreamAccessIfVisibleListener;
    private readonly handleWebGLContextLostListener;
    private readonly listeners;
    private readonly mirrorImageOverrides;
    private readonly postStreamInitializationListener;
    private readonly triggerFatalError;
    private readonly triggerManualFocusListener;
    private readonly triggerZoomMoveListener;
    private readonly triggerZoomStartListener;
    private readonly videoResizeListener;
    private readonly videoTrackEndedListener;
    private readonly videoTrackMuteListener;
    private _canvas2dContext;
    private _canvasWebGLContext;
    private _synchronousFrameHandling;
    private _frameReaderOptions;
    private _glFrameReaders;
    private _frameReaderType;
    private _mediaStream?;
    private abortedCameraInitializationResolveCallback?;
    private autofocusInterval;
    private cameraAccessRejectCallback?;
    private cameraAccessTimeout;
    private cameraInitializationPromise?;
    private cameraPosition;
    private cameraSetupPromise?;
    private getCapabilitiesTimeout;
    private manualFocusWaitTimeout;
    private manualToAutofocusResumeTimeout;
    private mediaTrackCapabilities?;
    private mediaTrackCapabilitiesPromise?;
    private mediaTrackCapabilitiesPromiseResolver?;
    private pinchToZoomDistance?;
    private pinchToZoomEnabled;
    private pinchToZoomInitialZoom;
    private selectedCameraSettings?;
    private tapToFocusEnabled;
    private torchEnabled;
    private torchToggleEnabled;
    private videoMetadataCheckInterval;
    private isWebGLSupported;
    private clippedFrameRequestID?;
    private isVideoStreamPaused;
    private handleVideoPauseHandler;
    constructor();
    get mediaStream(): MediaStream | undefined;
    set mediaStream(stream: MediaStream | undefined);
    get synchronousFrameHandling(): boolean;
    private get canvas2dContext();
    private get canvasWebGLContext();
    static instance(): CameraManager;
    recycle(pixelsData: Uint8ClampedArray): void;
    getCurrentFrame(): FrameCapture | undefined;
    requestVideoFrame(scheduledFunction: FrameRequestCallback | VideoFrameRequestCallback, videoElement?: HTMLVideoElement): number;
    cancelVideoFrame(id: number, videoElement?: HTMLVideoElement): void;
    addListener<E extends CameraManagerEvent>(event: CameraManagerEvent, listener: (details: CameraManagerEventParameters<E>) => void): void;
    applyCameraSettings(cameraSettings?: CameraSettings): Promise<void>;
    captureImage(): FrameCapture | null;
    initializeCameraWithSettings(camera?: DeviceCamera, cameraSettings?: CameraSettings): Promise<void>;
    isMirrorImageEnabled(): boolean;
    isPinchToZoomEnabled(): boolean;
    isTapToFocusEnabled(): boolean;
    isTorchAvailable(): Promise<boolean>;
    playVideo(): Promise<void>;
    reinitializeCamera(): Promise<void>;
    removeListener<E extends CameraManagerEvent>(event: CameraManagerEvent, listenerToRemove?: (details: CameraManagerEventParameters<E>) => void): void;
    setCameraPosition(cameraPosition: CameraPosition): Promise<void>;
    setExposure(exposure: {
        compensation?: number;
        time?: number;
    }): Promise<void>;
    setFocus(manualLensPosition: number): Promise<void>;
    setFrameRate(frameRate: {
        min?: number;
        max?: number;
    }): Promise<void>;
    setInitialCameraPosition(cameraPosition: CameraPosition): void;
    setInteractionOptions(torchToggleEnabled: boolean, tapToFocusEnabled: boolean, pinchToZoomEnabled: boolean): void;
    setMirrorImageEnabled(enabled: boolean, override: boolean): void;
    setPinchToZoomEnabled(enabled: boolean): void;
    setSelectedCamera(camera?: DeviceCamera): void;
    setSelectedCameraSettings(cameraSettings?: CameraSettings): void;
    setTapToFocusEnabled(enabled: boolean): void;
    setTorchEnabled(enabled: boolean): Promise<void>;
    setZoom(zoomFactor: number): Promise<void>;
    setupCameras(): Promise<void>;
    pauseStream(): void;
    resumeStream(): void;
    stopStream(cameraInitializationFailure?: boolean): Promise<void>;
    stopVideoTracks(): void;
    toggleTorch(): Promise<void>;
    updateCanvasVideoImage(): void;
    waitForCapabilities(): Promise<void>;
    setFrameReaderType(type: ColorType): void;
    allowPictureInPicture(allow: boolean): Promise<void>;
    setFrameHandling(synchronous: boolean): void;
    setClipArea(clipArea?: Rect): Promise<void>;
    /**
     * Converts a rectangle in DataCaptureView coordinates to camera frame coordinates.
     */
    private frameRectFromViewRect;
    private accessAutoselectedCamera;
    private getFrameReaderOptions;
    private getFrameReader;
    private accessInitialCamera;
    /**
     * When a context has been created for a canvas, it is not possible to get another one from another type.
     * This function re-creates a new canvas based on the existing one.
     */
    private recreateCanvas;
    private captureImageFor2dContext;
    private areVideoAndWebGLSizeMismatching;
    private captureImageForWebGLContext;
    private checkCameraAccess;
    private checkCameraVideoStreamAccessIfVisible;
    private checkVideoMetadata;
    private disablePinchToZoomListeners;
    private disableTapToFocusListeners;
    private emit;
    private enablePinchToZoomListeners;
    private enableTapToFocusListeners;
    private getActiveCamera;
    private getInitialCameraResolutionConstraint;
    private handleCameraInitializationError;
    private handleVideoResize;
    private handleWebGLContextLost;
    private initializeCameraAndCheckUpdatedSettings;
    private initializeCameraForResolution;
    private initializeStreamForResolution;
    private isVideoAndContextStateValid;
    private postStreamInitialization;
    private recoverStreamIfNeeded;
    private reportCameraProperties;
    private setCameraAccessTimeout;
    private setupAutofocus;
    private setupCameraStreamVideo;
    private setupCamerasAndStream;
    private storeStreamCapabilities;
    private triggerAutoFocus;
    private triggerFocusMode;
    private triggerManualFocus;
    private triggerManualFocusForContinuous;
    private triggerManualFocusForSingleShot;
    private triggerZoomMove;
    private triggerZoomStart;
    private updateActiveCameraCurrentResolution;
    private updateStreamForResolution;
    private videoTrackEndedRecovery;
    private videoTrackMuteRecovery;
    private clipMediaStreamIfNeeded;
    private drawClippedFrame;
    private cleanupClippedStream;
    connectedCallback(mountLocation: HTMLElement): void;
    disconnectedCallback(): void;
    getVideoElement(): HTMLVideoElement;
    private handleVideoPause;
}

interface FrameData {
    readonly width: number;
    readonly height: number;
    readonly isFrameSourceMirrored: boolean;
    toBlob(type?: string, quality?: number): Promise<Blob | null>;
    getData(): Promise<Uint8ClampedArray | null>;
}
type PrivateLoadableFrameData = Omit<FrameData, "getData" | "toBlob"> & {
    frameId: FrameId;
};
/**
 * Adds some function to the passed frame data object to let the user load the frame data.
 */
declare function convertToPublicFrameData(loadableFrameData: PrivateLoadableFrameData, context: DataCaptureContext): FrameData;

interface ModuleLoader {
    moduleName: string;
    load(options: ModuleLoaderOptions): Promise<any>;
}

type CommandAndPayload<A, C> = A extends {
    command: C;
} ? A : never;
type WorkerCommandPayload<C> = Omit<CommandAndPayload<AnyDataCaptureActionMessage, C>, "command" | "id">;
type WorkerListener = (event: DataCaptureCallbackMessage) => any;
interface DataCaptureLoaderOptions {
    libraryLocation: string;
    verifyResponseHash: boolean;
    loadProgressNotifier?: (info: ProgressInfo) => void;
    logLevel?: Logger.Level;
    highEndBlurryRecognition?: boolean;
    simdSupport: boolean;
    threadsSupport: boolean;
}
/**
 * The DataCaptureLoader class is used by the main thread, it instantiates the worker
 * and sends commands to it. It represents thus the main communication channel
 * between the main thread and the engine running in the worker.
 */
declare class DataCaptureLoader {
    highEndBlurryRecognition?: boolean;
    protected verifyResponseHash: boolean;
    protected simdSupport: boolean;
    protected threadsSupport: boolean;
    protected _dataCaptureWorker?: DataCaptureWorker;
    protected readonly libraryLocation: string;
    protected workerCommandId: number;
    protected readonly workerTasks: Map<number, {
        resolve: (...arguments_: any[]) => any;
        reject: (...arguments_: any[]) => any;
        command: string;
    }>;
    protected readonly workerListeners: WorkerListener[];
    protected workerMessageListener: (event_: MessageEvent<DataCaptureCallbackMessage>) => void;
    protected constructor(options: DataCaptureLoaderOptions);
    get dataCaptureWorker(): DataCaptureWorker;
    protected get name(): string;
    protected get fixedWasmMemory(): number | null;
    static create(options: DataCaptureLoaderOptions): Promise<DataCaptureLoader>;
    private getIndexedDBTimeoutMs;
    load(): Promise<WorkerResponse<"loadLibrary">>;
    /**
     * Send a task (i.e. a command) to the worker. Every task sent has a corresponding Promise object which
     * gets resolved when the worker has processed the request. The tasks are identified by an id which is
     * sent along with the data by both sides.
     */
    workerCommand<C extends DataCaptureActionMessageKey>(command: C, payload: WorkerCommandPayload<C>, transferables?: Transferable[]): Promise<WorkerResponse<C>>;
    terminateDataCaptureWorker(disposeContext?: boolean): Promise<void>;
    addWorkerListener(listener: WorkerListener): void;
    removeWorkerListener(listener: WorkerListener): void;
    getOptions(): Pick<DataCaptureLoaderOptions, "libraryLocation" | "simdSupport" | "threadsSupport" | "verifyResponseHash">;
    protected onWorkerMessage(event_: MessageEvent<DataCaptureCallbackMessage>): void;
}

declare enum HintPresenterEvents {
    Update = "hintpresenterupdate",
    ViewFinderUpdateRequested = "hintpresenterviewfinderupdaterequested"
}
declare class HintPresenter extends ScanditHTMLElement {
    static readonly tag: "scandit-hints";
    private intervalId;
    private root;
    private _viewFinderRect;
    private onDidToastHideHandler;
    constructor();
    private static createStyleElement;
    static register(): void;
    static create(): HintPresenter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setViewFinderRect(rect: Rect | null): void;
    handleMessage(message: DataCaptureCallbackMessage): Promise<void>;
    private setHintStyleToToast;
    private onDidToastHide;
    private getToastElementFromIdOrTag;
    showToast(toast: GenericHint): Promise<void>;
    showToastWithCustomIcon(hintStyle: GenericHint, icon: ScanditIcon): Promise<void>;
    hideToast(hintStyle: GenericHint): Promise<void>;
    private showGuidance;
    private hideGuidance;
    private startUpdateTimer;
    private stopUpdateTimer;
    /**
     * Whenever a toast is shown, we need to ensure that the view finder rect is set. If not, we dispatch an event to
     * let the view know about it.
     */
    private ensureViewFinderRectIsSet;
    private idFromHint;
}
declare global {
    interface HTMLElementTagNameMap {
        [HintPresenter.tag]: HintPresenter;
    }
    interface HTMLElementEventMap {
        [HintPresenterEvents.Update]: CustomEvent<void>;
    }
}

interface DataCaptureContextListener {
    didChangeStatus?: (context: DataCaptureContext, contextStatus: ContextStatus) => void;
    didStartObservingContext?: (context: DataCaptureContext) => void;
    didChangeFrameSource?: (context: DataCaptureContext, frameSource: FrameSource | null) => void;
}
interface ContextStatusJSON {
    code: number;
    isValid: boolean;
    message: string;
}
declare class ContextStatus {
    private _message;
    private _code;
    private _isValid;
    private static fromJSON;
    get message(): string;
    get code(): number;
    get isValid(): boolean;
}
declare enum PrivateMirrorAxis {
    None = "None",
    X = "X",
    Y = "Y"
}

type DataCaptureContextState = "unconfigured" | "configuring" | "configured" | "creating-context" | "ready";
type Change = {
    type: "modeEnabled";
    newValue: boolean;
} | {
    type: "addControl";
    newValue: any;
} | {
    type: "addOverlay";
    newValue: DataCaptureOverlay;
    view: DataCaptureView$1;
} | {
    type: "cameraSettings";
    newValue: any;
} | {
    type: "frameSourceState";
    newValue: any;
} | {
    type: "removeControl";
    newValue: any;
} | {
    type: "removeOverlay";
    newValue: DataCaptureOverlay;
    view: DataCaptureView$1;
} | {
    type: "singleImageModeUploaderSettings";
    newValue: any;
} | {
    type: "torchState";
    newValue: any;
} | {
    type: "viewChange";
    newValue: {
        orientation: Orientation;
    } & Partial<HTMLElementStateJSON>;
} | {
    type: "viewSet";
    newValue: DataCaptureView$1 | null;
};
type PrivateChangeSet = Change[];
interface DataCaptureMode extends Serializable {
    isEnabled(): boolean;
    setEnabled(enabled: boolean): Promise<void>;
    context: Optional<DataCaptureContext>;
}
interface PrivateDataCaptureMode extends DataCaptureMode {
    type: "barcodeCapture" | "idCapture";
    skipSerialization?: boolean;
    [nativeHandle]?: symbol;
    _context: Optional<DataCaptureContext>;
    attachedToContext: (context: DataCaptureContext) => Promise<void>;
    detachedFromContext: () => Promise<void>;
    _synchronousFrameFlow?: boolean;
}
interface DataCaptureModeJSON<S = JSONType> {
    type: "barcodeCapture" | "barcodeTracking" | "idCapture" | "parser" | "sparkScan" | "barcodeFind" | "barcodeAr" | "labelCapture";
    enabled: boolean;
    settings: S;
}
interface PrivateDataCaptureComponent {
    _context: DataCaptureContext;
}
type DataCaptureComponentJSON = JSONType;
interface DataCaptureComponent extends Serializable<DataCaptureComponentJSON> {
    readonly id: string;
}
interface PrivateDataCaptureContextOptions {
    deviceName?: string | null;
    dataCaptureInstance?: DataCaptureLoader;
    delayedRegistration?: boolean;
    licenseKey?: string;
    settings?: DataCaptureContextSettings;
}
interface PrivateDataCaptureContext<W extends (...parameters: any[]) => unknown = DataCaptureLoader["workerCommand"]> {
    _frameSource?: FrameSource | null;
    _useSynchronousFrameFlow: boolean;
    capabilityInfo: PrivateCapabilityInfo;
    modes: Set<DataCaptureMode>;
    components: DataCaptureComponent[];
    createContext: () => Promise<void>;
    update: (changeSet?: PrivateChangeSet, { updateContext }?: {
        updateContext?: boolean;
    }) => Promise<void>;
    addNativeOverlay: (overlay: DataCaptureOverlay) => Promise<void>;
    removeNativeOverlay: (overlay: DataCaptureOverlay) => Promise<void>;
    addComponent: (component: DataCaptureComponent) => Promise<void>;
    dataCaptureInstance: DataCaptureLoader;
    sendFrameToProcessor: (capture: FrameCapture) => Promise<WorkerResponse<"processFrame">>;
    subscribeToWorkerMessages: (listener: (message: DataCaptureCallbackMessage) => void) => void;
    unsubscribeToWorkerMessages: (listener: (message: DataCaptureCallbackMessage) => void) => void;
    hasEnabledMode: () => boolean;
    hasModes: () => boolean;
    workerCommand: MethodSignature<W>;
    performanceMark: MethodSignature<DataCaptureContext["performanceMark"]>;
    isFeatureSupported: (feature: LicensedFeature) => Promise<boolean>;
    new (): DataCaptureContext;
    updateListeners: Set<(change: Change) => void>;
    updateCameraFrameFlow: (synchronous: boolean) => void;
    getView: () => DataCaptureView$1 | null;
}
interface DataCaptureContextCreationOptions {
    libraryLocation: string;
    moduleLoaders: ModuleLoader[];
    deviceName?: string;
    settings?: DataCaptureContextSettings;
    logLevel?: Logger.Level;
}
/**
 * Configuration options for initializing the DataCapture SDK.
 *
 * @public
 */
interface ModuleLoaderOptions {
    licenseKey: string;
    libraryLocation: string;
    moduleLoaders: ModuleLoader[];
    logLevel: Logger.Level;
}
interface RuntimeEnvironment {
    deviceOS: string;
    browser: string;
    browserVersion: string;
    deviceModelName: string;
}
interface PrivateCapabilityInfo {
    simdSupport: boolean;
    threadsSupport: boolean;
}
interface DataCaptureContextJSON extends RuntimeEnvironment {
    framework: string;
    settings: DataCaptureContextSettingsJSON;
    licenseKey: string;
    deviceName: string;
    frameSource: FrameSourceJSON | null;
    modes: DataCaptureModeJSON[];
    components: DataCaptureComponentJSON[];
    view: DataCaptureViewJSON | null;
}
type PrivateFrameHandlerResponse = {
    action: "continue" | "skip";
    frame: FrameCapture;
};
type PrivateFrameHandler = (frame: FrameCapture) => Promise<PrivateFrameHandlerResponse>;
declare class DataCaptureContext implements Serializable<DataCaptureContextJSON> {
    static deviceID: string;
    protected static stateMachine: AsyncStateMachine<DataCaptureContextState>;
    protected static mainDataCaptureLoader: DataCaptureLoader | undefined;
    protected static dataCaptureLoaders: Map<string, DataCaptureLoader>;
    protected static libraryLocation: string | undefined;
    private static userLicenseKey;
    /**
     * Threads and SIMD support detected during initialization
     */
    protected static capabilityInfo: PrivateCapabilityInfo | undefined;
    private _asyncImageConverterInstance;
    private static get moduleLicenseTextProviders();
    private readonly framework;
    private readonly runtimeEnvironment;
    private settings;
    private licenseKey;
    private deviceName;
    private _frameSource;
    private _view;
    private readonly modes;
    private readonly components;
    private listeners;
    private readonly updateListeners;
    private readonly cameraPropertiesReportListener;
    private readonly cameraAccessErrorListener;
    private readonly onWorkerMessageListener;
    private readonly onVisibilityChangeListener;
    private dataCaptureInstance;
    private readonly pendingWorkerMessageListeners;
    private delayedRegistration;
    private highEndBlurryRecognition;
    private readonly _frameHandlers;
    /**
     * When synchronous, only one frame is processed at a time by the capture mode, the frame source will wait until the
     * frame data is back to send the next frame.
     *
     * IdCapture uses the synchronous flow because BlinkID only processes one frame at a time.
     * MatrixScan and other barcode modes usually use the asynchronous flow because they can use multi-threading.
     */
    private _useSynchronousFrameFlow;
    private static _sharedInstance;
    static get sharedInstance(): DataCaptureContext;
    /**
     * Get the current state of the DataCaptureContext initialization
     */
    protected static get currentState(): DataCaptureContextState;
    /**
     * Check if the context is ready for use
     */
    protected static get isReady(): boolean;
    /**
     * Check if initialization is in progress
     */
    protected static get isInitializing(): boolean;
    /**
     * Add a listener to state changes
     */
    protected static addStateListener(listener: (currentState: DataCaptureContextState, previousState: DataCaptureContextState, context?: any) => void): void;
    /**
     * Remove a state change listener
     */
    protected static removeStateListener(listener: (currentState: DataCaptureContextState, previousState: DataCaptureContextState, context?: any) => void): void;
    private initializeWithOptions;
    get frameSource(): FrameSource | null;
    private get workerCommand();
    static forLicenseKey(licenseKey: string, options: DataCaptureContextCreationOptions): Promise<DataCaptureContext>;
    private static internalConfigure;
    /**
     * Initialize the DataCapture SDK for Electron applications using a license data path.
     * This method handles the Electron-specific license key retrieval logic.
     *
     * @param licenseDataPath - Path to the license data file in the Electron app
     * @param options - Configuration options for the DataCapture SDK
     * @returns Promise resolving to the DataCaptureContext instance
     */
    static forLicenseKeyInElectronPath(licenseDataPath: string, options: DataCaptureContextCreationOptions): Promise<DataCaptureContext>;
    private static updateViewsWithProgress;
    private static getOverridesFromQueryString;
    private static validateOptions;
    private static loadModules;
    static getOpenSourceSoftwareLicenseInfo(): Promise<OpenSourceSoftwareLicenseInfo>;
    /**
     * Disconnect the current frame source from the context and connect the new one. This process can happen multiple
     * times for the same frame source because of its initialisation (The mirroring info of a camera is only available
     * when it has started for example).
     * Trigger the "didChangeFrameSource" listeners only if the new frame source is different than the old one.
     */
    setFrameSource(frameSource: FrameSource | null): Promise<void>;
    addListener(listener: DataCaptureContextListener): void;
    flushAnalytics(): Promise<void>;
    removeListener(listener: DataCaptureContextListener): void;
    addMode(mode: DataCaptureMode): Promise<void>;
    removeMode(mode: DataCaptureMode): Promise<void>;
    setMode(mode: DataCaptureMode): Promise<void>;
    removeCurrentMode(): Promise<void>;
    removeAllModes(): Promise<void>;
    dispose(): Promise<void>;
    applySettings(settings: DataCaptureContextSettings): Promise<void>;
    toJSONObject(): DataCaptureContextJSON;
    private getView;
    private setView;
    private getAppName;
    private urlToHostname;
    private getParentDomain;
    private createContext;
    private subscribeToVisibilityChange;
    private unsubscribeToVisibilityChange;
    private requestFrameData;
    private performanceMark;
    private sendFrameToProcessor;
    private sendFrameToHandlers;
    private sendFrameToSDC;
    private registerFrameHandler;
    private unregisterFrameHandler;
    private onVisibilityChange;
    private getImageConverterInstance;
    private onWorkerMessage;
    /**
     * This method is only called from the worker thread when OffscreenCanvas is not available there.
     */
    private convertImageToJPEG;
    private subscribeToCameraManagerEvents;
    private reportCameraProperties;
    private onCameraAccessError;
    private update;
    private updateContext;
    private getViewInfo;
    private getMirrorAxisForFrameSource;
    private addComponent;
    private addNativeOverlay;
    private removeNativeOverlay;
    private subscribeToWorkerMessages;
    private unsubscribeToWorkerMessages;
    private hasEnabledMode;
    /**
     * Some capture modes process frames synchronously, like IdCapture. Other can process multiple frames
     * in parallel, like MatrixScan. We inform the CameraManager how to process frames.
     */
    private updateCameraFrameFlow;
    protected isFeatureSupported(feature: LicensedFeature): Promise<boolean>;
}

export { type GetViewfinderInfoResponse as $, convertToPublicFrameData as A, type ModuleLoader as B, type Control as C, type DataCaptureContextState as D, type DataCaptureLoaderOptions as E, type FrameData as F, DataCaptureLoader as G, HintPresenter as H, type PerformanceMetrics as I, type FrameId as J, DataCaptureEngine as K, type Module as L, type ModuleLoaderOptions as M, type GenericHint as N, type FrameCapture as O, type PrivateChangeSet as P, type AnyDataCaptureActionMessage as Q, type AugmentedWorker as R, type ModuleHandler as S, type DataCaptureCallbackMessage as T, type DataCaptureActionMessageKey as U, type ViewInfo as V, type WorkerFunctions as W, type EngineWorkerResponse as X, type ExtractCentaurusLicenseResponse as Y, type RequestFrameDataResponse as Z, type IsFeatureSupportedResponse as _, type ControlType as a, type HintStyle as a$, type GetOpenSourceSoftwareLicenseInfoResponse as a0, type WorkerResponse as a1, type LoadLibraryDataCaptureAction as a2, type ConvertToJPEGResultDataCaptureAction as a3, type CreateContextDataCaptureAction as a4, type SetFrameSourceDataCaptureAction as a5, type ProcessFrameDataCaptureAction as a6, type RequestFrameDataDataCaptureAction as a7, type DeleteFrameDataDataCaptureAction as a8, type VisibilityChangeAction as a9, type ShowGuidanceMessage as aA, type HideGuidanceMessage as aB, type StartUpdateTimerMessage as aC, type StopUpdateTimerMessage as aD, type ViewSizeChangedMessage as aE, type PayloadForCommand as aF, type DataCaptureWorker as aG, type EmscriptenClassHandle as aH, type DataCaptureContext$1 as aI, type DataCaptureImageBufferFrameSource as aJ, type GestureListener as aK, type GestureRecognizer as aL, type DataCaptureView as aM, type JSONParseable as aN, type DataCaptureContextDeserializerResult as aO, type DataCaptureContextDeserializer as aP, type CaptureModeDeserializerInstance as aQ, type ModuleMirrorAxis as aR, type Vector as aS, type WasmFrameData as aT, HintFont as aU, HintTextAlignment as aV, HintWidth as aW, HintHeight as aX, HintCornerStyle as aY, HintIcon as aZ, HintAnchor as a_, type IsFeatureSupportedAction as aa, type UpdateContextDataCaptureAction as ab, type DisposeDataCaptureAction as ac, type FlushAnalyticsDataCaptureAction as ad, type ReportCameraPropertiesDataCaptureAction as ae, type SetLogLevelDataCaptureAction as af, type ExtractCentaurusLicenseDataCaptureAction as ag, type OnTapAction as ah, type HintPresenterV2updateAction as ai, type GetViewfinderInfoAction as aj, type GetOpenSourceSoftwareLicenseInfoAction as ak, type AddNativeOverlayAction as al, type RemoveNativeOverlayAction as am, type DataCaptureCallbackMessageKeys as an, type SuccessFeedbackWorkerMessage as ao, type ShowHintWorkerMessage as ap, type UpdateHintWorkerMessage as aq, type IsFeatureSupportedMessage as ar, type HideHintWorkerMessage as as, type PerformanceMetricsReportMessage as at, type DidTapTrackedBarcode as au, type OnFrameProcessingStartedMessage as av, type OnFrameProcessingFinishedMessage as aw, type OnFrameSkippedMessage as ax, type ShowToastMessage as ay, type HideToastMessage as az, type Change as b, GuidanceHintAnchor as b0, GuidanceHintStyle as b1, type GuidanceHint as b2, ToastHintStyle as b3, type ToastHint as b4, LicensedFeature as b5, type HintPresenterV2 as b6, type PlatformHintPresenter as b7, type LoadLibraryParameters as b8, type CreateContextParameters as b9, type UpdateContextParameters as ba, type SetFrameSourceParameters as bb, type ProcessFrameParameters as bc, type ReportCameraPropertiesParameters as bd, type PrivateBaseControl as be, type PrivateControl as bf, MeteringMode as bg, CameraResolutionConstraint as bh, type ExtendedMediaTrackCapabilities as bi, type ExtendedMediaTrackConstraintSet as bj, type GUI as bk, createFrameId as bl, CameraManagerEvent as bm, type CameraManagerEventParameters as bn, CameraManager as bo, HintPresenterEvents as bp, type DataCaptureMode as c, type PrivateDataCaptureMode as d, type DataCaptureModeJSON as e, type PrivateDataCaptureComponent as f, type DataCaptureComponentJSON as g, type DataCaptureComponent as h, type PrivateDataCaptureContextOptions as i, type PrivateDataCaptureContext as j, type DataCaptureContextCreationOptions as k, type PrivateCapabilityInfo as l, type DataCaptureContextJSON as m, type PrivateFrameHandlerResponse as n, type PrivateFrameHandler as o, DataCaptureContext as p, type DataCaptureContextListener as q, type ContextStatusJSON as r, ContextStatus as s, PrivateMirrorAxis as t, type DataCaptureOverlay as u, type DataCaptureViewListener as v, type DataCaptureViewJSON as w, type DataCaptureViewConnectOptions as x, DataCaptureView$1 as y, type PrivateLoadableFrameData as z };
