import { BarcodeFindViewSettings } from '../find/BarcodeFindViewSettings.js';
import '@scandit/web-datacapture-core';
import '@scandit/web-datacapture-core/build/js/private/Serializable';

declare const defaultBarcodeFind: {
    CameraSettings: {
        settings: any;
    };
    BarcodeFindViewSettings: {
        settings: BarcodeFindViewSettings;
    };
};
type BarcodeFindDefaults = typeof defaultBarcodeFind;

export { type BarcodeFindDefaults, defaultBarcodeFind };
