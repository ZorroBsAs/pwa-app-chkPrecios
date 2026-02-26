import { Barcode } from '../Barcode.js';
import { BarcodeArAnnotation } from './ui/organisms/BarcodeArAnnotation.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './ui/organisms/private/BarcodeArAnnotationVariation.js';

interface BarcodeArAnnotationProvider {
    annotationForBarcode(barcode: Barcode, callback: (annotation: BarcodeArAnnotation) => void): Promise<void>;
}

export type { BarcodeArAnnotationProvider };
