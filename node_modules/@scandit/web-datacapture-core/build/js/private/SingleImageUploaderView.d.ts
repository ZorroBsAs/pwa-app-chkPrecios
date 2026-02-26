/// <reference types="emscripten" />
import { SingleImageUploaderSettings } from '../SingleImageUploaderSettings.js';
import { J as FrameId } from '../DataCaptureContext-Dvdr7st4.js';
import { View } from './View.js';
import 'csstype';
import './Serializable.js';
import '../Camera-DhGjpcjv.js';
import '../commons/Rect.js';
import '../commons/Point.js';
import '../commons/Size.js';
import './privateAccess.js';
import '../DataCaptureContextSettings.js';
import '../commons/JSONType.js';
import '../DataCaptureViewPlusRelated.js';
import '../NotificationPresenter/NotificationPresenter.js';
import '../NotificationPresenter/NotificationConfiguration.js';
import '../commons/Color.js';
import '../ScanditIcon.js';
import './utils/ScanditHTMLElement.js';
import '../NotificationPresenter/NotificationStyle.js';
import '../commons/Anchor.js';
import '../commons/MarginsWithUnit.js';
import '../commons/NumberWithUnit.js';
import '../commons/MeasureUnit.js';
import '../commons/Orientation.js';
import '../commons/PointWithUnit.js';
import '../commons/Quadrilateral.js';
import './CustomLocationsView.js';
import './AnchorPositions.js';
import './nativeHandle.js';
import '../license/OpenSourceSoftwareLicenseInfo.js';
import '../logger.js';
import './FrameReaders/ColorType.js';
import '../LoadingStatus.js';
import './djinni-types/index.js';
import './HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import './utils/AsyncStateMachine.js';
import '../tsHelper.js';

interface ImageDimensions {
    width: number;
    height: number;
}
interface SingleImageUploaderViewCapture {
    data: Uint8ClampedArray;
    frameId: FrameId;
    width: number;
    height: number;
}
declare class SingleImageUploaderView implements View {
    private static readonly componentName;
    private static readonly DEFAULT_DOM_ATTRIBUTE;
    canUploadFile: boolean;
    private _mounted;
    private _loading;
    private _htmlRoot;
    private _settings;
    private _canvas;
    private _canvasContext;
    private _onInputCheck;
    private _onBeforeFileRead;
    private _onImageLoadError;
    private _onFileReaderError;
    private _onCaptureReady;
    private _resizedImageSizeLimit;
    private _inputElement;
    private _buttonElement;
    private _informationElement;
    private _chooseImageText;
    private _localizationSubscription;
    private _onLocalizationUpdated;
    constructor(settings: SingleImageUploaderSettings);
    private get canvas();
    private get canvasContext();
    mount(htmlRoot: HTMLElement): void;
    unmount(): void;
    setButtonState(state: "disabled" | "enabled"): void;
    getButtonState(): "disabled" | "enabled";
    onInputCheck(listener: EventListener): void;
    onBeforeFileRead(listener: (event: Event) => Promise<void> | void): void;
    onImageLoadError(listener: EventListener): void;
    onFileReaderError(listener: EventListener): void;
    onCaptureReady(listener: (capture: SingleImageUploaderViewCapture) => void): void;
    onAfterImageProcessed(): void;
    private onLocalizationUpdated;
    private setLoading;
    private getResizedImageDimensions;
    private onImageLoad;
    private onFileReaderLoad;
    private onFileUpload;
}

export { type ImageDimensions, SingleImageUploaderView, type SingleImageUploaderViewCapture };
