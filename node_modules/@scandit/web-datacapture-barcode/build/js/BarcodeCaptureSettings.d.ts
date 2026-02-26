import { LocationSelectionJSON, JSONType, LocationSelection } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { ArucoDictionaryJSON, ArucoDictionary } from './ArucoDictionary.js';
import { Symbology, CompositeType } from './Barcode.js';
import { ScanIntention } from './ScanIntention.js';
import { SymbologySettingsJSON, SymbologySettings } from './SymbologySettings.js';
import './ArucoDictionaryPreset.js';
import './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface BarcodeCaptureSettingsJSON {
    codeDuplicateFilter: number;
    enabledCompositeTypes: string[];
    locationSelection: LocationSelectionJSON | null;
    symbologies: Record<Symbology, SymbologySettingsJSON>;
    properties: Record<string, JSONType>;
    scanIntention: ScanIntention | null;
    arucoDictionary: ArucoDictionaryJSON | null;
}
declare class BarcodeCaptureSettings implements Serializable<BarcodeCaptureSettingsJSON> {
    codeDuplicateFilter: number;
    locationSelection: LocationSelection | null;
    enabledCompositeTypes: CompositeType[];
    scanIntention?: ScanIntention;
    private properties;
    private symbologies;
    private _arucoDictionary;
    constructor();
    get enabledSymbologies(): Symbology[];
    private get compositeTypeDescriptions();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    enableSymbologiesForCompositeTypes(compositeTypes: CompositeType[]): void;
    setArucoDictionary(dictionary: ArucoDictionary): void;
    toJSONObject(): BarcodeCaptureSettingsJSON;
}

export { BarcodeCaptureSettings, type BarcodeCaptureSettingsJSON };
