import { Color, Optional, ScanditIcon } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class BarcodeArInfoAnnotationFooter extends ScanditHTMLElement {
    static tag: "scandit-barcode-ar-info-annotation-footer";
    protected containerElement: HTMLElement;
    protected textElement: HTMLElement;
    protected _defaultBackgroundColor: Color;
    protected _defaultTextColor: Color;
    static create(): BarcodeArInfoAnnotationFooter;
    protected static register(): void;
    constructor();
    set icon(icon: Optional<ScanditIcon>);
    get icon(): Optional<ScanditIcon>;
    get backgroundColor(): Color;
    set backgroundColor(value: Color);
    get text(): string;
    set text(value: string);
    get textColor(): Color;
    set textColor(value: Color);
    get textSize(): number;
    set textSize(value: number);
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArInfoAnnotationFooter.tag]: BarcodeArInfoAnnotationFooter;
    }
}

export { BarcodeArInfoAnnotationFooter };
