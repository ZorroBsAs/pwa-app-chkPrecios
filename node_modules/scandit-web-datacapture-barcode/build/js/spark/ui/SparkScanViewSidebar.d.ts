import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanScanningBehavior } from '../SparkScanScanningBehavior.js';
import { SparkScanViewHandMode } from './SparkScanViewHandMode.js';
import { targetModeButtonVisibleAttribute, scanningBehaviorButtonVisibleAttribute, torchButtonVisibleAttribute, soundModeButtonVisibleAttribute, hapticModeButtonVisibleAttribute, handModeButtonVisibleAttribute, targetModeEnabledAttribute, scanningBehaviorAttribute, torchEnabledAttribute, soundEnabledAttribute, hapticEnabledAttribute, handModeAttribute } from './constants/attributes.js';
import { sidebarButtonTapEvent } from './constants/events.js';
import { sparkScanViewSidebarTag } from './constants/tags.js';

type SparkScanViewSidebarButtonType = "handModeButton" | "hapticModeButton" | "scanningBehaviorButton" | "soundModeButton" | "targetModeButton" | "torchButton";
declare class SparkScanViewSidebar extends ScanditHTMLElement {
    private static readonly observedAttributes;
    private targetModeButton?;
    private targetModeButtonIcon?;
    private scanningBehaviorButton?;
    private scanningBehaviorButtonIcon?;
    private torchButton?;
    private torchButtonIcon?;
    private soundModeButton?;
    private soundModeButtonIcon?;
    private hapticModeButton?;
    private hapticModeButtonIcon?;
    private handModeButton?;
    private handModeButtonIcon?;
    private targetModeButtonTapListener;
    private scanningBehaviorButtonTapListener;
    private torchButtonTapListener;
    private soundModeButtonTapListener;
    private hapticModeButtonTapListener;
    private handModeButtonTapListener;
    private computedStyle;
    get [targetModeButtonVisibleAttribute](): boolean;
    set [targetModeButtonVisibleAttribute](targetModeButtonVisible: boolean);
    get [scanningBehaviorButtonVisibleAttribute](): boolean;
    set [scanningBehaviorButtonVisibleAttribute](scanningBehaviorButtonVisible: boolean);
    get [torchButtonVisibleAttribute](): boolean;
    set [torchButtonVisibleAttribute](torchButtonVisible: boolean);
    get [soundModeButtonVisibleAttribute](): boolean;
    set [soundModeButtonVisibleAttribute](soundModeButtonVisible: boolean);
    get [hapticModeButtonVisibleAttribute](): boolean;
    set [hapticModeButtonVisibleAttribute](hapticModeButtonVisible: boolean);
    get [handModeButtonVisibleAttribute](): boolean;
    set [handModeButtonVisibleAttribute](handModeButtonVisible: boolean);
    get [targetModeEnabledAttribute](): boolean;
    set [targetModeEnabledAttribute](targetModeEnabled: boolean);
    get [scanningBehaviorAttribute](): SparkScanScanningBehavior;
    set [scanningBehaviorAttribute](scanningBehavior: SparkScanScanningBehavior);
    get [torchEnabledAttribute](): boolean;
    set [torchEnabledAttribute](torchEnabled: boolean);
    get [soundEnabledAttribute](): boolean;
    set [soundEnabledAttribute](soundEnabled: boolean);
    get [hapticEnabledAttribute](): boolean;
    set [hapticEnabledAttribute](hapticEnabled: boolean);
    get [handModeAttribute](): SparkScanViewHandMode;
    set [handModeAttribute](handMode: SparkScanViewHandMode);
    get allButtonsHidden(): boolean;
    get visibleButtonCount(): number;
    static create(): SparkScanViewSidebar;
    private render;
    private connectedCallback;
    private disconnectedCallback;
    private attributeChangedCallback;
    private onTargetModeButtonTap;
    private onScanningBehaviorButtonTap;
    private onTorchButtonTap;
    private onSoundModeButtonTap;
    private onHapticModeButtonTap;
    private onHandModeButtonTap;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewSidebarTag]: SparkScanViewSidebar;
    }
    interface HTMLElementEventMap {
        [sidebarButtonTapEvent]: CustomEvent<{
            tapped: SparkScanViewSidebarButtonType;
            enabled: boolean;
        }>;
    }
}

export { SparkScanViewSidebar };
