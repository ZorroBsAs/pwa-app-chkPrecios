import { Barcode } from '../Barcode.js';
import { B as BarcodeAr } from '../BarcodeAr-02zxFUGP.js';
import { BarcodeArHighlight } from './ui/organisms/BarcodeArHighlight.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import './BarcodeArSettings.js';
import '../SymbologySettings.js';
import './BarcodeArFeedback.js';
import './BarcodeArSession.js';
import '../TrackedBarcode.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';

interface BarcodeArViewUiListener {
    didTapHighlightForBarcode(barcodeAr: BarcodeAr, barcode: Barcode, highlight: BarcodeArHighlight): void;
}

export type { BarcodeArViewUiListener };
