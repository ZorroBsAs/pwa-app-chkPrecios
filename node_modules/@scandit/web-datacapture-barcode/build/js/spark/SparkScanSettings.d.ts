import { LocationSelectionJSON, JSONType } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { Symbology } from '../Barcode.js';
import { ScanIntention } from '../ScanIntention.js';
import { SymbologySettingsJSON, SymbologySettings } from '../SymbologySettings.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';

interface SparkScanSettingsJSON {
    codeDuplicateFilter: number;
    locationSelection: LocationSelectionJSON;
    symbologies: Record<Symbology, SymbologySettingsJSON>;
    properties: Record<string, JSONType>;
    scanIntention: ScanIntention | null;
}
declare class SparkScanSettings implements Serializable<SparkScanSettingsJSON> {
    codeDuplicateFilter: number;
    scanIntention?: ScanIntention;
    private locationSelection;
    private properties;
    private symbologies;
    constructor();
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    toJSONObject(): SparkScanSettingsJSON;
}

export { SparkScanSettings, type SparkScanSettingsJSON };
