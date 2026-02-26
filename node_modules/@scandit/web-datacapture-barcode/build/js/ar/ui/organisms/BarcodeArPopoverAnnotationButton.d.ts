import { Color, ScanditIcon } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class BarcodeArPopoverAnnotationButton extends ScanditHTMLElement {
    static tag: "scandit-barcode-ar-popover-button-annotation";
    private containerElement;
    constructor();
    set textSize(size: number);
    get textSize(): number;
    set textColor(color: Color);
    get textColor(): Color;
    get text(): string;
    set disabled(value: boolean);
    get disabled(): boolean;
    private static register;
    static create(icon: ScanditIcon, text?: string): BarcodeArPopoverAnnotationButton;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArPopoverAnnotationButton.tag]: BarcodeArPopoverAnnotationButton;
    }
}

export { BarcodeArPopoverAnnotationButton };
