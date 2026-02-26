import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanScanningBehavior } from '../SparkScanScanningBehavior.js';
import { targetModeButtonVisibleAttribute, scanningBehaviorButtonVisibleAttribute, barcodeFindButtonVisibleAttribute, labelCaptureButtonVisibleAttribute, cameraSwitchButtonVisibleAttribute, targetModeEnabledAttribute, scanningBehaviorAttribute } from './constants/attributes.js';
import { toolbarButtonTapEvent, toolbarVisibilityChangeEvent } from './constants/events.js';
import { sparkScanViewToolbarTag } from './constants/tags.js';

type SparkScanViewToolbarButtonType = "scanningBehaviorButton" | "targetModeButton" | "barcodeFindButton" | "labelCaptureButton" | "cameraSwitchButton";
declare class SparkScanViewToolbar extends ScanditHTMLElement {
    private static readonly observedAttributes;
    private targetModeButton?;
    private targetModeButtonIcon?;
    private scanningBehaviorButton?;
    private scanningBehaviorButtonIcon?;
    private cameraSwitchButton?;
    private cameraSwitchButtonIcon?;
    private barcodeFindButton?;
    private labelCaptureButton?;
    private targetModeButtonTapListener;
    private scanningBehaviorButtonTapListener;
    private barcodeFindButtonTapListener;
    private labelCaptureButtonTapListener;
    private cameraSwitchButtonTapListener;
    private computedStyle;
    get [targetModeButtonVisibleAttribute](): boolean;
    set [targetModeButtonVisibleAttribute](targetModeButtonVisible: boolean);
    get [scanningBehaviorButtonVisibleAttribute](): boolean;
    set [scanningBehaviorButtonVisibleAttribute](scanningBehaviorButtonVisible: boolean);
    get [barcodeFindButtonVisibleAttribute](): boolean;
    set [barcodeFindButtonVisibleAttribute](barcodeFindButtonVisible: boolean);
    get [labelCaptureButtonVisibleAttribute](): boolean;
    set [labelCaptureButtonVisibleAttribute](labelCaptureButtonVisible: boolean);
    get [cameraSwitchButtonVisibleAttribute](): boolean;
    set [cameraSwitchButtonVisibleAttribute](cameraSwitchButtonVisible: boolean);
    get [targetModeEnabledAttribute](): boolean;
    set [targetModeEnabledAttribute](targetModeEnabled: boolean);
    get [scanningBehaviorAttribute](): SparkScanScanningBehavior;
    set [scanningBehaviorAttribute](scanningBehavior: SparkScanScanningBehavior);
    get visibleButtonCount(): number;
    get visibleModeButtonCount(): number;
    get allVisibleButtonsCount(): number;
    static create(): SparkScanViewToolbar;
    enableCameraSwitchButton(enabled: boolean): void;
    private render;
    private connectedCallback;
    private disconnectedCallback;
    private attributeChangedCallback;
    private onTargetModeButtonTap;
    private onScanningBehaviorButtonTap;
    private onBarcodeFindButtonTap;
    private onLabelCaptureButtonTap;
    private onCameraSwitchButtonTap;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewToolbarTag]: SparkScanViewToolbar;
    }
    interface HTMLElementEventMap {
        [toolbarButtonTapEvent]: CustomEvent<{
            tapped: SparkScanViewToolbarButtonType;
            enabled: boolean;
        }>;
        [toolbarVisibilityChangeEvent]: CustomEvent<undefined>;
    }
}

export { SparkScanViewToolbar };
