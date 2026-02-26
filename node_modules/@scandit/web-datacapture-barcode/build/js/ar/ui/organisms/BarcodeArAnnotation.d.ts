import { Point, Direction } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import { BarcodeArAnnotationVariation } from './private/BarcodeArAnnotationVariation.js';

declare enum BarcodeArAnnotationTrigger {
    HighlightTap = "highlightTap",
    HighlightTapAndBarcodeScan = "highlightTapAndBarcodeScan",
    BarcodeScan = "barcodeScan"
}
interface BarcodeArAnnotation extends ScanditHTMLElement {
    annotationTrigger: BarcodeArAnnotationTrigger;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
}
declare enum BarcodeArAnnotationAnchor {
    Top = "top-center",
    Bottom = "bottom-center",
    Left = "left-center",
    Right = "right-center"
}
interface PrivateBarcodeArAnnotation extends BarcodeArAnnotation {
    direction?: Direction;
    anchor?: BarcodeArAnnotationAnchor;
    annotationVariation?: BarcodeArAnnotationVariation;
    dataset: {
        identifier: `${string}-annotation`;
        id: string;
        couldBeDeleted: "true" | "false";
        onForeground: "true" | "false";
    };
}

export { type BarcodeArAnnotation, BarcodeArAnnotationAnchor, BarcodeArAnnotationTrigger, type PrivateBarcodeArAnnotation };
