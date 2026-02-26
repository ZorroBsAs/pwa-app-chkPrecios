import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { Color } from '@scandit/web-datacapture-core';

declare class BarcodeStatusIconContainer extends ScanditHTMLElement {
    static tag: "scandit-status-icon-container";
    private static readonly observedAttributes;
    private containerElement;
    private textContainer;
    constructor();
    set text(name: string);
    get text(): string;
    set tip(value: boolean);
    get tip(): boolean;
    set textColor(color: Color);
    get textColor(): Color;
    set expanded(value: boolean);
    set backgroundColor(color: Color);
    get backgroundColor(): Color;
    get expanded(): boolean;
    static create(): BarcodeStatusIconContainer;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
    private updateText;
    private toggleTip;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeStatusIconContainer.tag]: BarcodeStatusIconContainer;
    }
}

export { BarcodeStatusIconContainer };
