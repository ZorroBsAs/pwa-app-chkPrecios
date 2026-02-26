import { Anchor, DataCaptureView, DataCaptureContext, CameraSettings, NotificationPresenter } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import { B as BarcodeAr } from '../BarcodeAr-02zxFUGP.js';
import { BarcodeArAnnotationProvider } from './BarcodeArAnnotationProvider.js';
import { BarcodeArHighlightProvider } from './BarcodeArHighlightProvider.js';
import { BarcodeArViewSettings } from './BarcodeArViewSettings.js';
import { BarcodeArAnnotation } from './ui/organisms/BarcodeArAnnotation.js';
import { BarcodeArHighlight } from './ui/organisms/BarcodeArHighlight.js';
import { Barcode } from '../Barcode.js';
import { BarcodeArViewUiListener } from './BarcodeArViewUiListener.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './BarcodeArSettings.js';
import '../SymbologySettings.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import './BarcodeArFeedback.js';
import './BarcodeArSession.js';
import '../TrackedBarcode.js';
import './ui/organisms/private/BarcodeArAnnotationVariation.js';

declare class BarcodeArView extends ScanditHTMLElement {
    static tag: "scandit-barcode-ar-view";
    annotationProvider?: BarcodeArAnnotationProvider;
    highlightProvider?: BarcodeArHighlightProvider;
    private dataCaptureView;
    private barcodeArViewSettings;
    private presenter;
    private layout;
    private torchSwitchIconButton;
    private cameraSwitchButton;
    private zoomButton;
    private _shouldShowTorchControl;
    private _isTorchAvailable;
    private onTorchButtonClickHandler;
    private onCameraSwitchButtonHandler;
    private onZoomButtonHandler;
    private onLayoutPointerDownHandler;
    private onInfoAnnotationTapHandler;
    private backdrop;
    private pendingDeletionTimeout;
    listener?: BarcodeArViewUiListener;
    set shouldShowZoomControl(value: boolean);
    get shouldShowZoomControl(): boolean;
    set shouldShowCameraSwitchControl(value: boolean);
    get shouldShowCameraSwitchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get shouldShowTorchControl(): boolean;
    set torchControlPosition(anchor: Anchor);
    get torchControlPosition(): Anchor;
    set zoomControlPosition(anchor: Anchor);
    get zoomControlPosition(): Anchor;
    set cameraSwitchControlPosition(anchor: Anchor);
    get cameraSwitchControlPosition(): Anchor;
    static createWithSettings(elementOrDataCaptureView: HTMLElement | DataCaptureView, context: DataCaptureContext, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings, cameraSettings?: CameraSettings): Promise<BarcodeArView>;
    static create(elementOrDataCaptureView: HTMLElement | DataCaptureView, context: DataCaptureContext, barcodeAr: BarcodeAr): Promise<BarcodeArView>;
    private static register;
    private static createStyleElement;
    getHighlightForBarcode(barcode: Barcode): BarcodeArHighlight | null;
    getAnnotationForBarcode(barcode: Barcode): BarcodeArAnnotation | null;
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    reset(): void;
    getNotificationPresenter(): NotificationPresenter;
    private setTorchAvailable;
    private toggleTorchIcon;
    private onTorchButtonClick;
    private onCameraSwitchButtonClick;
    private onZoomButtonClick;
    private changeZoomButtonIcon;
    private connectedCallback;
    private disconnectedCallback;
    private isPopoverAnnotation;
    private isAnnotation;
    private areMultiplePopoverAllowed;
    private onLayoutPointerDown;
    private handleHighlightClick;
    private handlePopoverHighlightClick;
    private handleAnnotationClick;
    private handleClickOutside;
    private onInfoAnnotationTap;
    private showBarcodeArPopover;
    private hideBarcodeArPopover;
    private hideBackdropIfNoPopovers;
    private toggleBarcodeArPopover;
    /**
     * Used in the presenter when stop is called
     * to avoid dom nodes hanging.
     * @private
     */
    private deleteAllViews;
    private deletePendingViews;
    private identifierForHighlight;
    private identifierForAnnotation;
    private onHighlightsOrAnnotationForTrackedBarcode;
    private onAnnotation;
    private updateExistingAnnotation;
    private setupNewAnnotation;
    private getAnnotationVariationForQuad;
    private onHighlight;
    private queryHighlightByDataIdentifier;
    private queryAnnotationByDataIdentifier;
    private queryHighlightByDataId;
    private queryAnnotationByDataId;
    private updateRemovedTrackedBarcodes;
    private render;
    private updateHighlightPosition;
    private updateBrushSize;
    private getTransformOrigin;
    private calculateAnnotationPosition;
    private updateAnnotationPosition;
    private normalizedViewPointFromFrameAnchorPositions;
    private calculateRotationAngle;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArView.tag]: BarcodeArView;
    }
}

export { BarcodeArView };
