/// <reference types="emscripten" />
import { ScanditHTMLElement } from '../../utils/ScanditHTMLElement.js';

/**
 * Layout container for view controls positioned using the Anchor enum.
 * Supports 9 positions: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right.
 * Controls are positioned via slot attribute corresponding to their anchor position.
 */
declare class ControlsLayout extends ScanditHTMLElement {
    static tag: "scandit-controls-layout";
    constructor();
    static create(): ControlsLayout;
    static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [ControlsLayout.tag]: ControlsLayout;
    }
}

export { ControlsLayout };
