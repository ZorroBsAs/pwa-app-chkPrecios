/// <reference types="emscripten" />
import { N as GenericHint } from '../../../DataCaptureContext-Dvdr7st4.js';
import { ScanditIcon } from '../../../ScanditIcon.js';
import { ScanditHTMLElement } from '../../utils/ScanditHTMLElement.js';
import '../../../Camera-DhGjpcjv.js';
import '../../../commons/Rect.js';
import '../../Serializable.js';
import '../../../commons/Point.js';
import '../../../commons/Size.js';
import '../../privateAccess.js';
import '../../../DataCaptureContextSettings.js';
import '../../../commons/JSONType.js';
import '../../../DataCaptureViewPlusRelated.js';
import '../../../NotificationPresenter/NotificationPresenter.js';
import '../../../NotificationPresenter/NotificationConfiguration.js';
import '../../../commons/Color.js';
import '../../../NotificationPresenter/NotificationStyle.js';
import '../../../commons/Anchor.js';
import '../../../commons/MarginsWithUnit.js';
import '../../../commons/NumberWithUnit.js';
import '../../../commons/MeasureUnit.js';
import '../../../commons/Orientation.js';
import '../../../commons/PointWithUnit.js';
import '../../../commons/Quadrilateral.js';
import '../../CustomLocationsView.js';
import '../../View.js';
import '../../AnchorPositions.js';
import '../../nativeHandle.js';
import '../../../license/OpenSourceSoftwareLicenseInfo.js';
import '../../../logger.js';
import '../../FrameReaders/ColorType.js';
import '../../../LoadingStatus.js';
import '../../djinni-types/index.js';
import '../../HtmlElementState.js';
import '../../../commons/SizeWithUnit.js';
import '../../utils/AsyncStateMachine.js';
import '../../../tsHelper.js';

declare enum ToastEvents {
    DidShow = "didshow",
    DidHide = "didhide"
}
type DidShowEvent = CustomEvent<{
    target: Toast;
}>;
type DidHideEvent = CustomEvent<{
    target: Toast;
}>;
declare class Toast extends ScanditHTMLElement {
    static readonly tag: "scandit-toast-hint";
    private toast;
    private _hintStyle;
    private _customIcon;
    private currentAnimation;
    private _exclamationIcon;
    private _checkIcon;
    private animationDuration;
    private _currentAnimationDirection;
    constructor();
    private static createStyleElement;
    get hintStyle(): GenericHint["hintStyle"] | null;
    set hintStyle(hintStyle: GenericHint["hintStyle"]);
    get customIcon(): ScanditIcon | null;
    set customIcon(icon: ScanditIcon | null);
    private get showAnimation();
    private get hideAnimation();
    static create(): Toast;
    static register(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    connectedCallback(): void;
    private toggle;
    private render;
}
declare global {
    interface HTMLElementTagNameMap {
        [Toast.tag]: Toast;
    }
    interface HTMLElementEventMap {
        [ToastEvents.DidShow]: DidShowEvent;
        [ToastEvents.DidHide]: DidHideEvent;
    }
}

export { type DidHideEvent, type DidShowEvent, Toast, ToastEvents };
