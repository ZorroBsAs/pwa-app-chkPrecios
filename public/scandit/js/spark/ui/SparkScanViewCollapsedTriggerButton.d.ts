import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import { collapsedTriggerButtonTapEvent } from './constants/events.js';
import { sparkScanViewCollapsedTriggerButtonTag } from './constants/tags.js';

declare class SparkScanViewCollapsedTriggerButton extends ScanditHTMLElement {
    private pointerDownListener;
    static create(): SparkScanViewCollapsedTriggerButton;
    private render;
    private onPointerDown;
    private connectedCallback;
    private disconnectedCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewCollapsedTriggerButtonTag]: SparkScanViewCollapsedTriggerButton;
    }
    interface HTMLElementEventMap {
        [collapsedTriggerButtonTapEvent]: CustomEvent<{
            clientX: number;
            clientY: number;
        }>;
    }
}

export { SparkScanViewCollapsedTriggerButton };
