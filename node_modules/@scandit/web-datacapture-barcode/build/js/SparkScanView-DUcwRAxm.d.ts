import { Color, DataCaptureContext } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanScanningMode } from './spark/SparkScanScanningMode.js';
import { SparkScan } from './spark/SparkScan.js';
import { SparkScanFeedbackDelegate } from './spark/SparkScanFeedbackDelegate.js';
import { SparkScanViewSettings } from './spark/ui/SparkScanViewSettings.js';
import { sparkScanViewTag } from './spark/ui/constants/tags.js';
import { SparkScanViewState } from './spark/ui/SparkScanViewState.js';

interface SparkScanViewUiListener {
    didChangeScanningMode?(scanningMode: SparkScanScanningMode): void;
    didChangeViewState?(state: SparkScanViewState): void;
    didTapBarcodeFindButton?(view: SparkScanView): void;
    didTapLabelCaptureButton?(view: SparkScanView): void;
}

declare class SparkScanView extends ScanditHTMLElement {
    private _targetModeButtonVisible;
    private _scanningBehaviorButtonVisible;
    private _torchControlVisible;
    private _zoomSwitchControlVisible;
    private _previewSizeControlVisible;
    private _barcodeFindButtonVisible;
    private _labelCaptureButtonVisible;
    private _cameraSwitchButtonVisible;
    private _previewCloseControlVisible;
    private _triggerButtonVisible;
    private _isTorchAvailable;
    private _isZoomAvailable;
    private _isConnected;
    private _sizingMode;
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(value: boolean);
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(value: boolean);
    get torchControlVisible(): boolean;
    set torchControlVisible(value: boolean);
    get zoomSwitchControlVisible(): boolean;
    set zoomSwitchControlVisible(value: boolean);
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(value: boolean);
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(value: boolean);
    get labelCaptureButtonVisible(): boolean;
    set labelCaptureButtonVisible(value: boolean);
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(value: boolean);
    get previewCloseControlVisible(): boolean;
    set previewCloseControlVisible(value: boolean);
    get triggerButtonVisible(): boolean;
    set triggerButtonVisible(value: boolean);
    triggerButtonCollapsedColor?: Color;
    triggerButtonExpandedColor?: Color;
    triggerButtonAnimationColor?: Color;
    triggerButtonTintColor?: Color;
    toolbarBackgroundColor?: Color;
    toolbarIconActiveTintColor?: Color;
    toolbarIconInactiveTintColor?: Color;
    feedbackDelegate: SparkScanFeedbackDelegate;
    get dataCaptureContext(): DataCaptureContext | null;
    set dataCaptureContext(context: DataCaptureContext | null);
    get sparkScan(): SparkScan | null;
    set sparkScan(sparkScan: SparkScan | null);
    private resizeObserver;
    private onResizeHandler;
    private settings;
    private presenter;
    private miniPreview;
    private triggerButton;
    private visualFeedback;
    private miniPreviewTimeout;
    private orientationObserver;
    private miniPreviewPointerUpListener;
    private miniPreviewPointerMoveListener;
    private miniPreviewButtonTapListener;
    private miniPreviewDragListener;
    private miniPreviewDragEndListener;
    private miniPreviewVisibilityChangeListener;
    private triggerButtonPointerDownListener;
    private triggerButtonTapListener;
    private triggerButtonLongPressStartListener;
    private triggerButtonLongPressEndListener;
    private triggerButtonDragListener;
    private toolbarButtonTapListener;
    private clickOutsideListener;
    private visibilityChangeListener;
    private orientationChangeListener;
    private holdingToScan;
    private get _targetModeEnabledMessage();
    private get _targetModeDisabledMessage();
    private get _continuousModeEnabledMessage();
    private get _continuousModeDisabledMessage();
    private get _scanPausedMessage();
    private get _torchEnabledMessage();
    private get _torchDisabledMessage();
    private get _zoomedInMessage();
    private get _zoomedOutMessage();
    set sparkScanViewSettings(sparkScanViewSettings: SparkScanViewSettings | null);
    get sparkScanViewSettings(): SparkScanViewSettings | null;
    static forElement(element: Element, context: DataCaptureContext, sparkScan: SparkScan, sparkScanViewSettings?: SparkScanViewSettings): SparkScanView;
    static register(): void;
    private static create;
    private static createStyleElement;
    prepareScanning(): Promise<void>;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    showToast(message: string): void;
    setListener(listener: SparkScanViewUiListener | null): void;
    setTriggerButtonImage(image?: HTMLImageElement | SVGElement): void;
    private setWidthAndHeightCssStyleProperties;
    private onResize;
    /**
     * Checks if the parent element is too small to contain the expanded MiniPreview
     * and updates the sizing mode accordingly. In unconstrained mode, elements
     * use position:fixed and are positioned relative to the viewport instead of the parent.
     */
    private updateSizingMode;
    /**
     * Auto-prepare scanning when properties are set and element is connected
     */
    private _maybeAutoPrepareScanning;
    private connectedCallback;
    private disconnectedCallback;
    private setTorchAvailable;
    private setZoomAvailable;
    private switchToIdleState;
    private switchToActiveState;
    private switchToInactiveState;
    private switchToErrorState;
    private onMiniPreviewPointerUp;
    private onMiniPreviewPointerMove;
    private onMiniPreviewButtonTap;
    private onMiniPreviewDrag;
    private onMiniPreviewDragEnd;
    private onMiniPreviewVisibilityChange;
    private onTriggerButtonPointerDown;
    private onTriggerButtonTap;
    private onTriggerButtonLongPressStart;
    private onTriggerButtonLongPressEnd;
    private onTriggerButtonDrag;
    private onToolbarButtonTap;
    private onClickOutside;
    private onVisibilityChange;
    private onTargetModeButtonTap;
    private onScanningBehaviorButtonTap;
    private onBarcodeFindButtonTap;
    private onLabelCaptureButtonTap;
    private onCameraSwitchButtonTap;
    private onTorchButtonTap;
    private onMiniPreviewTimeoutFinished;
    private onOrientationChange;
    private targetModeButtonTapped;
    private scanningBehaviorButtonTapped;
    private torchButtonTapped;
    private cameraSwitchButtonTapped;
    private getDefaultCssVariableValue;
    private setTriggerButtonPressedColor;
    private readonly miniPreviewListeners;
    private readonly triggerButtonListeners;
    private addMiniPreviewListeners;
    private removeMiniPreviewListeners;
    private addTriggerButtonListeners;
    private removeTriggerButtonListeners;
    private repositionElementsIfOutOfBounds;
    private repositionMiniPreviewIfOutOfBounds;
    private repositionTriggerButtonIfOutOfBounds;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewTag]: SparkScanView;
    }
}

export { type SparkScanViewUiListener as S, SparkScanView as a };
