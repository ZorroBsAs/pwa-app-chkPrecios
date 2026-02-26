import { Point } from '@scandit/web-datacapture-core';
import { GestureRecognizerListener } from '@scandit/web-datacapture-core/build/js/private/GestureRecognizer/GestureRecognizer.js';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare enum FindLayoutEvents {
    onTap = "onlayouttap"
}
type OnTapLayoutCustomEvent = CustomEvent<{
    point: Point;
    target: HTMLElement;
}>;
declare class FindLayout extends ScanditHTMLElement implements GestureRecognizerListener {
    static tag: "scandit-find-layout";
    private orientationObserver;
    private onOrientationChangeHandler;
    private readonly absoluteContainer;
    private gestureRecognizer;
    constructor();
    private get cardListContainer();
    private get main();
    static create(): FindLayout;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    toggleVisibility(selector: string, toggle: boolean): void;
    onTap(point: Point, event: Event): void;
    private onOrientationChange;
}
declare global {
    interface HTMLElementTagNameMap {
        [FindLayout.tag]: FindLayout;
    }
    interface HTMLElementEventMap {
        [FindLayoutEvents.onTap]: OnTapLayoutCustomEvent;
    }
}

export { FindLayout, FindLayoutEvents, type OnTapLayoutCustomEvent };
