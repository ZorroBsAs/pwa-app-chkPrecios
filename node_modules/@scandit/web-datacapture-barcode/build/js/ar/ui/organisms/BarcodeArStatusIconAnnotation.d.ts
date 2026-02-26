import { ScanditIcon, Color, Point } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import { BarcodeArAnnotation, BarcodeArAnnotationTrigger } from './BarcodeArAnnotation.js';
import { Barcode } from '../../../Barcode.js';
import './private/BarcodeArAnnotationVariation.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';

declare enum BarcodeArStatusIconAnnotationAnchor {
    Top = "top-center",
    Bottom = "bottom-center",
    Left = "left-center",
    Right = "right-center"
}
declare class BarcodeArStatusIconAnnotation extends ScanditHTMLElement implements BarcodeArAnnotation {
    static tag: "scandit-barcode-ar-status-icon-annotation";
    annotationTrigger: BarcodeArAnnotationTrigger;
    anchor: BarcodeArStatusIconAnnotationAnchor;
    private readonly statusIconContainer;
    private onToggleListener;
    private _barcode;
    private _backgroundColor;
    private _icon;
    constructor();
    get barcode(): Barcode;
    protected set barcode(barcode: Barcode);
    set text(text: string);
    get text(): string;
    set hasTip(value: boolean);
    get hasTip(): boolean;
    set icon(icon: ScanditIcon | null);
    get icon(): ScanditIcon | null;
    set backgroundColor(color: Color);
    get backgroundColor(): Color;
    set textColor(color: Color);
    get textColor(): Color;
    static create(barcode: Barcode): BarcodeArStatusIconAnnotation;
    private static register;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private onToggle;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArStatusIconAnnotation.tag]: BarcodeArStatusIconAnnotation;
    }
}

export { BarcodeArStatusIconAnnotation, BarcodeArStatusIconAnnotationAnchor };
