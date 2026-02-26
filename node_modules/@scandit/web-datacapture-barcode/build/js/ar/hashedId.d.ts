import { Barcode } from '../Barcode.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

declare function hashedId(barcode: Barcode): string;

export { hashedId };
