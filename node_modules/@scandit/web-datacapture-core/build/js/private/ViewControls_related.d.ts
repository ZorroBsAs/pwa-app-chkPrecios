/// <reference types="emscripten" />
import { g as FrameSource } from '../Camera-DhGjpcjv.js';
import { y as DataCaptureView, C as Control, p as DataCaptureContext } from '../DataCaptureContext-Dvdr7st4.js';
import { CameraFOVSwitchControl } from '../controls/CameraFOVSwitchControl.js';
import { CameraSwitchControl } from '../controls/CameraSwitchControl.js';
import { TorchSwitchControl } from '../controls/TorchSwitchControl.js';
import '../commons/Rect.js';
import './Serializable.js';
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
import './View.js';
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

interface PrivateControl {
    type: "camera-fov" | "camera" | "torch";
    view: DataCaptureView | null;
}
interface TorchSwitchControlIcon {
    on: {
        idle: string | null;
        pressed: string | null;
    };
    off: {
        idle: string | null;
        pressed: string | null;
    };
}
interface CameraSwitchControlIcon {
    idle: string | null;
    pressed: string | null;
}
interface CameraFOVSwitchControlIcon {
    wide: {
        idle: string | null;
        pressed: string | null;
    };
    ultraWide: {
        idle: string | null;
        pressed: string | null;
    };
}
interface PrivateControlWidget {
    install: () => Promise<boolean>;
    remove: (definitiveRemoval?: boolean) => void;
}
declare enum ButtonState {
    Idle = "idle",
    Pressed = "pressed"
}
declare abstract class ButtonControlWidget<C extends Control> {
    protected domHost: HTMLElement;
    protected state: ButtonState;
    protected button: HTMLButtonElement | undefined;
    protected isHover: boolean;
    protected onTouchStartListener: (event?: Event) => void;
    protected onMouseEnterListener: (event?: Event) => void;
    protected onMouseLeaveListener: (event?: Event) => void;
    protected onClickListener: (event?: Event) => void;
    protected control: C;
    private controlTypeToAriaLabelMap;
    constructor(control: C, domHost: HTMLElement);
    protected get frameSource(): FrameSource | null | undefined;
    protected get context(): DataCaptureContext | null | undefined;
    install(): Promise<boolean>;
    remove(definitiveRemoval?: boolean): void;
    protected hide(): void;
    protected show(): void;
    protected setupButton(): HTMLButtonElement;
    protected setup(): void;
    private onTouchStart;
    private onMouseEnter;
    private onMouseLeave;
    private onClick;
    private updateButtonBackground;
    protected abstract getImageFromState(): string | null;
    protected abstract buttonClicked(): Promise<void>;
    protected abstract canShow(): Promise<boolean>;
}
declare class PrivateTorchControlWidget extends ButtonControlWidget<TorchSwitchControl> implements PrivateControlWidget {
    constructor(control: TorchSwitchControl, domHost: HTMLElement);
    protected buttonClicked(): Promise<void>;
    protected canShow(): Promise<boolean>;
    protected getImageFromState(): string | null;
    protected setup(): void;
    private isTorchAvailable;
    private retrieveTorchState;
}
declare class CameraSwitchControlWidget extends ButtonControlWidget<CameraSwitchControl> implements PrivateControlWidget {
    private isTransitioning;
    constructor(control: CameraSwitchControl, domHost: HTMLElement);
    protected canShow(): Promise<boolean>;
    protected getImageFromState(): string | null;
    protected buttonClicked(): Promise<void>;
    protected setup(): void;
    private getNextDeviceCamera;
    private switchCameras;
}
declare class PrivateCameraFOVSwitchControlWidget extends ButtonControlWidget<CameraFOVSwitchControl> implements PrivateControlWidget {
    private isTransitioning;
    constructor(control: CameraFOVSwitchControl, domHost: HTMLElement);
    install(): Promise<boolean>;
    protected canShow(): Promise<boolean>;
    protected getImageFromState(): string | null;
    protected buttonClicked(): Promise<void>;
    protected setup(): void;
    private setInitialCamera;
    private isUltraWideBackCamera;
    private getAlternativeCamera;
    private switchCameras;
}

export { ButtonState, type CameraFOVSwitchControlIcon, type CameraSwitchControlIcon, CameraSwitchControlWidget, PrivateCameraFOVSwitchControlWidget, type PrivateControl, type PrivateControlWidget, PrivateTorchControlWidget, type TorchSwitchControlIcon };
