import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import { expandedTriggerButtonTapEvent } from './constants/events.js';
import { sparkScanViewExpandedTriggerButtonTag } from './constants/tags.js';

declare class SparkScanViewExpandedTriggerButton extends ScanditHTMLElement {
    private static readonly observedAttributes;
    private messageElement?;
    private fadeOutAnimation?;
    private fadeInAnimation?;
    private fadeOutAnimationFinishListener;
    private pointerDownListener;
    get message(): string;
    set message(message: string);
    get active(): boolean;
    set active(active: boolean);
    static create(): SparkScanViewExpandedTriggerButton;
    private render;
    private onFadeOutAnimationFinish;
    private onPointerDown;
    private connectedCallback;
    private disconnectedCallback;
    private attributeChangedCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewExpandedTriggerButtonTag]: SparkScanViewExpandedTriggerButton;
    }
    interface HTMLElementEventMap {
        [expandedTriggerButtonTapEvent]: CustomEvent<{
            clientX: number;
            clientY: number;
        }>;
    }
}

export { SparkScanViewExpandedTriggerButton };
