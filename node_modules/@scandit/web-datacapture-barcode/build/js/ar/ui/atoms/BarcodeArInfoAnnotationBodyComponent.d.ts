import { Optional, ScanditIcon, Color } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class BarcodeArInfoAnnotationBodyComponent extends ScanditHTMLElement {
    static tag: "scandit-barcode-ar-info-annotation-body";
    isLeftIconTappable: boolean;
    isRightIconTappable: boolean;
    private textElement;
    private containerElement;
    constructor();
    set rightIcon(icon: Optional<ScanditIcon>);
    get rightIcon(): Optional<ScanditIcon>;
    set leftIcon(icon: Optional<ScanditIcon>);
    get leftIcon(): Optional<ScanditIcon>;
    get text(): string;
    set text(value: string);
    get textSize(): number;
    set textSize(value: number);
    get textAlignment(): string;
    set textAlignment(value: string);
    get textColor(): Color;
    set textColor(color: Color);
    static create(): BarcodeArInfoAnnotationBodyComponent;
    protected static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArInfoAnnotationBodyComponent.tag]: BarcodeArInfoAnnotationBodyComponent;
    }
}

export { BarcodeArInfoAnnotationBodyComponent };
