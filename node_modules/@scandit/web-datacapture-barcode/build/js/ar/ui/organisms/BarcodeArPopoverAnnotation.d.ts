import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { BarcodeArPopoverAnnotationButton } from './BarcodeArPopoverAnnotationButton.js';
import { Point } from '@scandit/web-datacapture-core';
import { Barcode } from '../../../Barcode.js';
import { BarcodeArAnnotation, BarcodeArAnnotationTrigger } from './BarcodeArAnnotation.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './private/BarcodeArAnnotationVariation.js';

interface BarcodeArPopoverAnnotationListener {
    onPopoverButtonTapped?(popover: BarcodeArPopoverAnnotation, button: BarcodeArPopoverAnnotationButton, buttonIndex: number): void;
    onPopoverTapped?(popover: BarcodeArPopoverAnnotation): void;
}
declare enum BarcodeArPopoverAnnotationAnchor {
    Top = "top-center",
    Bottom = "bottom-center",
    Left = "left-center",
    Right = "right-center"
}
declare class BarcodeArPopoverAnnotation extends ScanditHTMLElement implements BarcodeArAnnotation {
    static tag: "scandit-barcode-ar-popover-annotation";
    isEntirePopoverTappable: boolean;
    private _barcode;
    annotationTrigger: BarcodeArAnnotationTrigger;
    listener?: BarcodeArPopoverAnnotationListener;
    private onPointerUpListener;
    anchor: BarcodeArPopoverAnnotationAnchor;
    constructor();
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
    get barcode(): Barcode;
    protected set barcode(barcode: Barcode);
    protected set direction(direction: string);
    protected get direction(): string;
    static register(): void;
    static create(barcode: Barcode): BarcodeArPopoverAnnotation;
    private static createStyleElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onPointerUp;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArPopoverAnnotation.tag]: BarcodeArPopoverAnnotation;
    }
}

export { BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, type BarcodeArPopoverAnnotationListener };
