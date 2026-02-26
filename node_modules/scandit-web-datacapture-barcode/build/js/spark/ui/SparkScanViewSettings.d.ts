import { TorchState } from 'scandit-web-datacapture-core';
import { Serializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { SparkScanScanningModeJSON, SparkScanScanningMode } from '../SparkScanScanningMode.js';
import { SparkScanToastSettingsJSON, SparkScanToastSettings } from './SparkScanToastSettings.js';
import { SparkScanViewHandMode } from './SparkScanViewHandMode.js';
import '../SparkScanPreviewBehavior.js';
import '../SparkScanScanningBehavior.js';

interface SparkScanViewSettingsJSON {
    defaultHandMode: SparkScanViewHandMode;
    defaultScanningMode: SparkScanScanningModeJSON;
    defaultTorchState: TorchState;
    hapticEnabled: boolean;
    holdToScanEnabled: boolean;
    inactiveStateTimeout: number;
    soundEnabled: boolean;
    toastSettings: SparkScanToastSettingsJSON;
    triggerButtonCollapseTimeout: number;
    visualFeedbackEnabled: boolean;
    zoomFactorIn: number;
    zoomFactorOut: number;
}
declare class SparkScanViewSettings implements Serializable<SparkScanViewSettingsJSON> {
    defaultHandMode: SparkScanViewHandMode;
    defaultScanningMode: SparkScanScanningMode;
    defaultTorchState: TorchState;
    hapticEnabled: boolean;
    holdToScanEnabled: boolean;
    inactiveStateTimeout: number;
    soundEnabled: boolean;
    toastSettings: SparkScanToastSettings;
    triggerButtonCollapseTimeout: number;
    visualFeedbackEnabled: boolean;
    zoomFactorIn: number;
    zoomFactorOut: number;
    constructor();
    toJSONObject(): SparkScanViewSettingsJSON;
}

export { SparkScanViewSettings, type SparkScanViewSettingsJSON };
