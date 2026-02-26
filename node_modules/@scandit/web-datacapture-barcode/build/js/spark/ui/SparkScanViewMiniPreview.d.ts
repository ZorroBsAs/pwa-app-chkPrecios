import { Point } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanMiniPreviewSize } from './SparkScanMiniPreviewSize.js';
import { SparkScanViewToastType } from './SparkScanViewToast.js';
import { SparkScanViewToolbar } from './SparkScanViewToolbar.js';
import { zoomFactorAttribute, torchEnabledAttribute, previewSizeControlVisibleAttribute, zoomSwitchControlVisibleAttribute, torchControlVisibleAttribute, previewCloseControlVisibleAttribute } from './constants/attributes.js';
import { miniPreviewButtonTapEvent, miniPreviewVisibilityChangeEvent } from './constants/events.js';
import { sparkScanViewMiniPreviewTag } from './constants/tags.js';
import '../SparkScanScanningBehavior.js';

declare enum SparkScanViewMiniPreviewButtonType {
    ResizeButton = "resizeButton",
    ZoomButton = "zoomButton",
    TorchButton = "torchButton",
    CloseButton = "closeButton"
}
declare class SparkScanViewMiniPreview extends ScanditHTMLElement {
    static observedAttributes: (keyof SparkScanViewMiniPreview)[];
    host: HTMLElement;
    toolbar?: SparkScanViewToolbar | null;
    private toast;
    private resizeButton?;
    private resizeButtonIcon?;
    private zoomButton?;
    private torchButton?;
    private torchButtonIcon?;
    private closeButton?;
    private buttonContainerList?;
    private resizeButtonTapListener;
    private zoomButtonTapListener;
    private torchButtonTapListener;
    private closeButtonTapListener;
    private pointerDownListener;
    private longPressStartListener;
    private toolbarVisibilityChangeListener;
    private longPressEndListener;
    private dragEndListener;
    private fadeOutAnimation;
    private replayFadeOutTimeout;
    private dragController;
    private longPressController;
    private lastKnownTranslate?;
    private rootElement;
    get visible(): boolean;
    set visible(visible: boolean);
    get size(): SparkScanMiniPreviewSize;
    set size(size: SparkScanMiniPreviewSize);
    get expanded(): boolean;
    set useViewportBounds(value: boolean);
    get [zoomFactorAttribute](): number;
    set [zoomFactorAttribute](zoomFactor: number);
    get darkened(): boolean;
    set darkened(darkened: boolean);
    get orientation(): OrientationType;
    set orientation(orientation: OrientationType);
    get [torchEnabledAttribute](): boolean;
    set [torchEnabledAttribute](torchEnabled: boolean);
    get [previewSizeControlVisibleAttribute](): boolean;
    set [previewSizeControlVisibleAttribute](previewSizeControlVisible: boolean);
    get [zoomSwitchControlVisibleAttribute](): boolean;
    set [zoomSwitchControlVisibleAttribute](zoomSwitchControlVisible: boolean);
    get [torchControlVisibleAttribute](): boolean;
    set [torchControlVisibleAttribute](torchControlVisible: boolean);
    get [previewCloseControlVisibleAttribute](): boolean;
    set [previewCloseControlVisibleAttribute](previewCloseControlVisible: boolean);
    get cover(): boolean;
    set cover(cover: boolean);
    get pressed(): boolean;
    set pressed(pressed: boolean);
    static create(): SparkScanViewMiniPreview;
    repositionIfOutOfBounds(): void;
    showToast(type: SparkScanViewToastType, message: string, duration: number): void;
    hideToast(): void;
    zoomIn(): void;
    zoomOut(): void;
    fadeOut(): Promise<void>;
    cancelFadeOut(): void;
    rewindAnimation(): Promise<void>;
    translateTo(point: Point): void;
    private render;
    private onResizeButtonTap;
    private onZoomButtonTap;
    private onTorchButtonTap;
    private onCloseButtonTap;
    private onPointerDown;
    private onLongPressStart;
    private onLongPressEnd;
    private onDragEnd;
    private onToolbarVisibilityChange;
    private connectedCallback;
    private disconnectedCallback;
    private getNextTranslate;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewMiniPreviewTag]: SparkScanViewMiniPreview;
    }
    interface HTMLElementEventMap {
        [miniPreviewButtonTapEvent]: CustomEvent<{
            tapped: SparkScanViewMiniPreviewButtonType.ResizeButton;
            expanded: boolean;
        } | {
            tapped: SparkScanViewMiniPreviewButtonType.ZoomButton;
            zoomFactor: number;
        } | {
            tapped: SparkScanViewMiniPreviewButtonType.TorchButton;
            enabled: boolean;
        } | {
            tapped: SparkScanViewMiniPreviewButtonType.CloseButton;
        }>;
        [miniPreviewVisibilityChangeEvent]: CustomEvent<{
            visible: boolean;
        }>;
    }
}

export { SparkScanViewMiniPreview, SparkScanViewMiniPreviewButtonType };
