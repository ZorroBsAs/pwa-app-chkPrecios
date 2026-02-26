import { Barcode } from '../Barcode.js';
import { SparkScanBarcodeFeedback } from './SparkScanBarcodeFeedback.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface SparkScanFeedbackDelegate {
    getFeedbackForBarcode(barcode: Barcode): SparkScanBarcodeFeedback | null;
}

export type { SparkScanFeedbackDelegate };
