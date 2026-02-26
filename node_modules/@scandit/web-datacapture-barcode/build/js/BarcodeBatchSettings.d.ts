import { JSONType } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { ArucoDictionaryJSON, ArucoDictionary } from './ArucoDictionary.js';
import { Symbology } from './Barcode.js';
import { SymbologySettingsJSON, SymbologySettings } from './SymbologySettings.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface BarcodeBatchSettingsJSON {
    symbologies: Record<Symbology, SymbologySettingsJSON>;
    properties: Record<string, JSONType>;
    arucoDictionary: ArucoDictionaryJSON | null;
}
declare class BarcodeBatchSettings implements Serializable<BarcodeBatchSettingsJSON> {
    private properties;
    private symbologies;
    private _arucoDictionary;
    constructor();
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setArucoDictionary(dictionary: ArucoDictionary): void;
    toJSONObject(): BarcodeBatchSettingsJSON;
}

export { BarcodeBatchSettings, type BarcodeBatchSettingsJSON };
