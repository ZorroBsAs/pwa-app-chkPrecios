import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanViewToastType } from './SparkScanViewToast.js';
import { zoomFactorAttribute, previewSizeControlVisibleAttribute, zoomSwitchControlVisibleAttribute } from './constants/attributes.js';
import { miniPreviewButtonTapEvent, miniPreviewSwipeUpEvent, miniPreviewSwipeDownEvent } from './constants/events.js';
import { sparkScanViewMiniPreviewTag } from './constants/tags.js';

declare enum SparkScanViewMiniPreviewButtonType {
    ResizeButton = "resizeButton",
    ZoomButton = "zoomButton"
}
declare class SparkScanViewMiniPreview extends ScanditHTMLElement {
    static observedAttributes: (keyof SparkScanViewMiniPreview)[];
    host: HTMLElement;
    private toast;
    private resizeButton?;
    private resizeButtonIcon?;
    private zoomButton?;
    private overlay;
    private swiping;
    private resizeButtonTapListener;
    private zoomButtonTapListener;
    private pointerDownListener;
    private pointerMoveListener;
    private pointerUpListener;
    private fadeOutAnimation;
    private replayFadeOutTimeout;
    private viewportFitCoverEnabled;
    private previousPointerEvent?;
    get visible(): boolean;
    set visible(visible: boolean);
    get expanded(): boolean;
    set expanded(expanded: boolean);
    get [zoomFactorAttribute](): number;
    set [zoomFactorAttribute](zoomFactor: number);
    get darkened(): boolean;
    set darkened(darkened: boolean);
    get orientation(): OrientationType;
    set orientation(orientation: OrientationType);
    get [previewSizeControlVisibleAttribute](): boolean;
    set [previewSizeControlVisibleAttribute](previewSizeControlVisible: boolean);
    get [zoomSwitchControlVisibleAttribute](): boolean;
    set [zoomSwitchControlVisibleAttribute](zoomSwitchControlVisible: boolean);
    static create(): SparkScanViewMiniPreview;
    showToast(type: SparkScanViewToastType, message: string, duration: number): void;
    hideToast(): void;
    zoomIn(): void;
    zoomOut(): void;
    fadeOut(): Promise<void>;
    cancelFadeOut(): void;
    rewindAnimation(): Promise<void>;
    private render;
    private onResizeButtonTap;
    private onZoomButtonTap;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private getViewportFitCoverEnabled;
    private connectedCallback;
    private disconnectedCallback;
    private attributeChangedCallback;
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
        }>;
        [miniPreviewSwipeUpEvent]: CustomEvent;
        [miniPreviewSwipeDownEvent]: CustomEvent;
    }
}

export { SparkScanViewMiniPreview, SparkScanViewMiniPreviewButtonType };
