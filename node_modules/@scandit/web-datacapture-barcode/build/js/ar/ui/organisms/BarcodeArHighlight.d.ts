import { Brush, ScanditIcon, Point } from '@scandit/web-datacapture-core';
import { Barcode } from '../../../Barcode.js';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';

interface BarcodeArHighlight extends ScanditHTMLElement {
    barcode: Barcode;
    brush: Brush;
    icon: ScanditIcon | null;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
    width?: number;
    height?: number;
}
interface PrivateBarcodeArHighlight extends BarcodeArHighlight {
    dataset: {
        identifier: `${string}-highlight`;
        id: string;
        couldBeDeleted: "true" | "false";
        onForeground: "true" | "false";
    };
}

export type { BarcodeArHighlight, PrivateBarcodeArHighlight };
