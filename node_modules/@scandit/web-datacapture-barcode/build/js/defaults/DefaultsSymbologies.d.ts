import { Symbology, PrivateCompositeTypeDescription } from '../Barcode.js';
import { SymbologyDescription } from '../SymbologyDescription.js';
import { SymbologySettings } from '../SymbologySettings.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import '../Range.js';

interface SymbologiesDefaults {
    SymbologySettings: {
        [key in Symbology]: SymbologySettings;
    };
    SymbologyDescriptions: SymbologyDescription[];
    CompositeTypeDescriptions: PrivateCompositeTypeDescription[];
}
declare const defaultSymbologies: SymbologiesDefaults;

export { type SymbologiesDefaults, defaultSymbologies };
