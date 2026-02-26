import { JSONType } from 'scandit-web-datacapture-core';
import { Serializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { Symbology } from './Barcode.js';
import { SymbologySettingsJSON, SymbologySettings } from './SymbologySettings.js';
import './EncodingRange.js';
import './StructuredAppendData.js';

/**
 * @deprecated Setting a scenario is no longer recommended.
 */
declare enum BarcodeTrackingScenario {
    A = "A"
}
interface BarcodeTrackingSettingsJSON {
    /**
     * @deprecated Setting a scenario is no longer recommended.
     */
    scenario: string | null;
    symbologies: Record<Symbology, SymbologySettingsJSON>;
    properties: Record<string, JSONType>;
}
declare class BarcodeTrackingSettings implements Serializable<BarcodeTrackingSettingsJSON> {
    private scenario;
    private properties;
    private symbologies;
    constructor();
    get enabledSymbologies(): Symbology[];
    /**
     * @deprecated Setting a scenario is no longer recommended, use the constructor instead.
     */
    static forScenario(scenario: BarcodeTrackingScenario): BarcodeTrackingSettings;
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    toJSONObject(): BarcodeTrackingSettingsJSON;
}

export { BarcodeTrackingScenario, BarcodeTrackingSettings, type BarcodeTrackingSettingsJSON };
