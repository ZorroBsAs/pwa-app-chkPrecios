import { Barcode } from '../Barcode.js';
import { BarcodeArHighlight } from './ui/organisms/BarcodeArHighlight.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';

interface BarcodeArHighlightProvider {
    highlightForBarcode(barcode: Barcode, callback: (highlight: BarcodeArHighlight) => void): Promise<void>;
}

export type { BarcodeArHighlightProvider };
