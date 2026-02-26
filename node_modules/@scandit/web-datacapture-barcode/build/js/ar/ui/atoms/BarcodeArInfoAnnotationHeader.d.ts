import { Color, Optional, ScanditIcon } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class BarcodeArInfoAnnotationHeader extends ScanditHTMLElement {
    static tag: "scandit-barcode-ar-info-annotation-header";
    protected containerElement: HTMLElement;
    protected textElement: HTMLElement;
    protected _defaultBackgroundColor: Color;
    protected _defaultTextColor: Color;
    static create(): BarcodeArInfoAnnotationHeader;
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
        [BarcodeArInfoAnnotationHeader.tag]: BarcodeArInfoAnnotationHeader;
    }
}

export { BarcodeArInfoAnnotationHeader };
