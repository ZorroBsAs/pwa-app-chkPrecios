import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { Checksum, Symbology } from './Barcode.js';
import '@scandit/web-datacapture-core';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface SymbologySettingsJSON {
    activeSymbolCounts: number[];
    checksums: string[];
    colorInvertedEnabled: boolean;
    enabled: boolean;
    extensions: string[];
    ocrFallbackRegex?: string;
}
declare class SymbologySettings implements Serializable<SymbologySettingsJSON> {
    activeSymbolCounts: number[];
    checksums: Set<Checksum>;
    isColorInvertedEnabled: boolean;
    isEnabled: boolean;
    ocrFallbackRegex: string | null;
    private _symbology;
    private extensions;
    get enabledExtensions(): string[];
    get symbology(): Symbology;
    setExtensionEnabled(extension: string, enabled: boolean): void;
    toJSONObject(): SymbologySettingsJSON;
}

export { SymbologySettings, type SymbologySettingsJSON };
