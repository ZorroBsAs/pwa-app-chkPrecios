import { Point, Color, Optional } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { Barcode } from '../../../Barcode.js';
import { BarcodeArInfoAnnotationBodyComponent } from '../atoms/BarcodeArInfoAnnotationBodyComponent.js';
import { BarcodeArInfoAnnotationFooter } from '../atoms/BarcodeArInfoAnnotationFooter.js';
import { BarcodeArInfoAnnotationHeader } from '../atoms/BarcodeArInfoAnnotationHeader.js';
import { BarcodeArAnnotation, BarcodeArAnnotationTrigger } from './BarcodeArAnnotation.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './private/BarcodeArAnnotationVariation.js';

declare enum BarcodeArInfoAnnotationAnchor {
    Top = "top-center",
    Bottom = "bottom-center",
    Left = "left-center",
    Right = "right-center"
}
declare enum BarcodeArInfoAnnotationWidthPreset {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare enum BarcodeArInfoAnnotationEvent {
    InfoAnnotationTap = "BarcodeArInfoAnnotationEventTap"
}
interface BarcodeArInfoAnnotationListener {
    onInfoAnnotationHeaderTapped?(annotation: BarcodeArInfoAnnotation): void;
    onInfoAnnotationFooterTapped?(annotation: BarcodeArInfoAnnotation): void;
    onInfoAnnotationLeftIconTapped?(annotation: BarcodeArInfoAnnotation, element: BarcodeArInfoAnnotationBodyComponent, elementIndex: number): void;
    onInfoAnnotationRightIconTapped?(annotation: BarcodeArInfoAnnotation, element: BarcodeArInfoAnnotationBodyComponent, elementIndex: number): void;
    onInfoAnnotationTapped?(annotation: BarcodeArInfoAnnotation): void;
}
declare class BarcodeArInfoAnnotation extends ScanditHTMLElement implements BarcodeArAnnotation {
    static tag: "scandit-barcode-ar-info-annotation";
    isEntireAnnotationTappable: boolean;
    annotationTrigger: BarcodeArAnnotationTrigger;
    listener?: BarcodeArInfoAnnotationListener;
    private _barcode;
    private _widthPreset;
    get barcode(): Barcode;
    private set barcode(value);
    private onPointerUpListener;
    private onSlotChangeListener;
    private containerElement;
    private highlightableElementListenerMap;
    constructor();
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
    set anchor(annotationAnchor: BarcodeArInfoAnnotationAnchor);
    get anchor(): BarcodeArInfoAnnotationAnchor;
    set widthPreset(variant: BarcodeArInfoAnnotationWidthPreset);
    get widthPreset(): BarcodeArInfoAnnotationWidthPreset;
    get backgroundColor(): Color;
    set backgroundColor(value: Color);
    set body(bodies: BarcodeArInfoAnnotationBodyComponent[]);
    get body(): BarcodeArInfoAnnotationBodyComponent[];
    set header(header: Optional<BarcodeArInfoAnnotationHeader>);
    get header(): Optional<BarcodeArInfoAnnotationHeader>;
    set footer(footer: Optional<BarcodeArInfoAnnotationFooter>);
    get footer(): Optional<BarcodeArInfoAnnotationFooter>;
    set hasTip(value: boolean);
    get hasTip(): boolean;
    static create(barcode: Barcode): BarcodeArInfoAnnotation;
    protected static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onSlotChange;
    private updateArrowColor;
    private makeHighlightable;
    private onPointerUp;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArInfoAnnotation.tag]: BarcodeArInfoAnnotation;
    }
    interface HTMLElementEventMap {
        [BarcodeArInfoAnnotationEvent.InfoAnnotationTap]: CustomEvent;
    }
}

export { BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationEvent, type BarcodeArInfoAnnotationListener, BarcodeArInfoAnnotationWidthPreset };
