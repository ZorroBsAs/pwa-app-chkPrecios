import { ScanditHTMLElement, Point } from '@scandit/web-datacapture-core';
import { Barcode } from '../../../Barcode.js';
import { BarcodeArAnnotation, BarcodeArAnnotationTrigger } from './BarcodeArAnnotation.js';
import { BarcodeArInfoAnnotation } from './BarcodeArInfoAnnotation.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './private/BarcodeArAnnotationVariation.js';
import '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import '../atoms/BarcodeArInfoAnnotationBodyComponent.js';
import '../atoms/BarcodeArInfoAnnotationFooter.js';
import '../atoms/BarcodeArInfoAnnotationHeader.js';

declare class BarcodeArResponsiveAnnotation extends ScanditHTMLElement implements BarcodeArAnnotation {
    static tag: "scandit-barcode-ar-responsive-annotation";
    private _barcode;
    private closeUp;
    private farAway;
    private static _threshold;
    private _annotationVariation;
    protected static register(): void;
    static create(barcode: Barcode, closeUp: BarcodeArInfoAnnotation | null, farAway: BarcodeArInfoAnnotation | null): BarcodeArResponsiveAnnotation;
    private get currentAnnotation();
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(trigger: BarcodeArAnnotationTrigger);
    private set anchor(value);
    private get anchor();
    get barcode(): Barcode;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
    private get annotationVariation();
    private set annotationVariation(value);
    private updateAnnotationVisibility;
    static get threshold(): number;
    static set threshold(threshold: number);
    private connectedCallback;
    private disconnectedCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArResponsiveAnnotation.tag]: BarcodeArResponsiveAnnotation;
    }
}

export { BarcodeArResponsiveAnnotation };
