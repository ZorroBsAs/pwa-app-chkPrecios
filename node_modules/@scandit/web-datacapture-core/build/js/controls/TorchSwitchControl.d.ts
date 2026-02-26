/// <reference types="emscripten" />
import { C as Control, a as ControlType } from '../DataCaptureContext-Dvdr7st4.js';
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

declare class TorchSwitchControl implements Control {
    protected readonly type: ControlType;
    private readonly customImage;
    private torchSwitchIconButton;
    private TorchSwitchIconButtonClass;
    private view;
    private onTorchToggled;
    private get currentCamera();
    get torchOffImage(): string | null;
    set torchOffImage(torchOffImage: string | null);
    get torchOffPressedImage(): string | null;
    set torchOffPressedImage(torchOffPressedImage: string | null);
    get torchOnImage(): string | null;
    set torchOnImage(torchOnImage: string | null);
    get torchOnPressedImage(): string | null;
    set torchOnPressedImage(torchOnPressedImage: string | null);
    toJSONObject(): {
        type: ControlType;
    };
    private applyCustomImagesToButton;
    private updateButtonState;
    private handleTorchToggled;
    private canShow;
    private setTorchState;
}

export { TorchSwitchControl };
