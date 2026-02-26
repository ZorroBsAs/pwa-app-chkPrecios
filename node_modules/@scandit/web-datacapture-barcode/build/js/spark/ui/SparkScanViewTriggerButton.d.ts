import { Point } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { triggerButtonTapEvent, triggerButtonHoldStartEvent, triggerButtonHoldEndEvent } from './constants/events.js';
import { sparkScanViewTriggerButtonTag } from './constants/tags.js';

declare class SparkScanViewTriggerButton extends ScanditHTMLElement {
    private _pointerDownListener;
    private _pointerUpListener;
    private _dragController;
    private _longPressController;
    private _longPressStartListener;
    private _pulse;
    private _pulseAnimation?;
    private _holdStart?;
    get minimized(): boolean;
    set minimized(minimized: boolean);
    get expanded(): boolean;
    set expanded(expanded: boolean);
    get pressed(): boolean;
    set pressed(pressed: boolean);
    get visible(): boolean;
    set visible(visible: boolean);
    set useViewportBounds(value: boolean);
    static create(): SparkScanViewTriggerButton;
    connectedCallback(): void;
    disconnectedCallback(): void;
    repositionIfOutOfBounds(): void;
    translateTo(point: Point): void;
    setImage(image?: HTMLImageElement | SVGElement): void;
    startPulsating(): void;
    stopPulsating(): void;
    private render;
    private onPointerDown;
    private onPointerUp;
    private onLongPressStart;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewTriggerButtonTag]: SparkScanViewTriggerButton;
    }
    interface HTMLElementEventMap {
        [triggerButtonTapEvent]: CustomEvent;
        [triggerButtonHoldStartEvent]: CustomEvent;
        [triggerButtonHoldEndEvent]: CustomEvent;
    }
}

export { SparkScanViewTriggerButton };
