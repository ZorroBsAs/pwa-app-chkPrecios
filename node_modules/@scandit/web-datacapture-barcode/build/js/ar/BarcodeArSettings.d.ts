import { JSONType } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { Symbology } from '../Barcode.js';
import { SymbologySettingsJSON, SymbologySettings } from '../SymbologySettings.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface BarcodeArSettingsJSON {
    symbologies: Record<Symbology, SymbologySettingsJSON>;
    properties: Record<string, JSONType>;
}
declare class BarcodeArSettings implements Serializable<BarcodeArSettingsJSON> {
    private properties;
    private symbologies;
    constructor();
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    toJSONObject(): BarcodeArSettingsJSON;
}

export { BarcodeArSettings, type BarcodeArSettingsJSON };
