import { TorchState, CameraPosition, BrushJSON, Brush } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { SparkScanMiniPreviewSize } from './SparkScanMiniPreviewSize.js';
import { SparkScanScanningModeJSON, SparkScanScanningMode } from '../SparkScanScanningMode.js';
import { SparkScanToastSettingsJSON, SparkScanToastSettings } from './SparkScanToastSettings.js';
import '../SparkScanPreviewBehavior.js';
import '../SparkScanScanningBehavior.js';

interface SparkScanViewSettingsJSON {
    defaultScanningMode: SparkScanScanningModeJSON;
    defaultTorchState: TorchState;
    defaultMiniPreviewSize: SparkScanMiniPreviewSize;
    defaultCameraPosition: CameraPosition;
    hapticEnabled: boolean;
    holdToScanEnabled: boolean;
    inactiveStateTimeout: number;
    soundEnabled: boolean;
    toastSettings: SparkScanToastSettingsJSON;
    triggerButtonCollapseTimeout: number;
    visualFeedbackEnabled: boolean;
    zoomFactorIn: number;
    zoomFactorOut: number;
    smartSelectionCandidateBrush?: BrushJSON | null;
}
declare class SparkScanViewSettings implements Serializable<SparkScanViewSettingsJSON> {
    defaultScanningMode: SparkScanScanningMode;
    defaultTorchState: TorchState;
    defaultMiniPreviewSize: SparkScanMiniPreviewSize;
    defaultCameraPosition: CameraPosition;
    hapticEnabled: boolean;
    holdToScanEnabled: boolean;
    inactiveStateTimeout: number;
    soundEnabled: boolean;
    toastSettings: SparkScanToastSettings;
    triggerButtonCollapseTimeout: number;
    visualFeedbackEnabled: boolean;
    zoomFactorIn: number;
    zoomFactorOut: number;
    smartSelectionCandidateBrush: Brush | null;
    constructor();
    toJSONObject(): SparkScanViewSettingsJSON;
}

export { SparkScanViewSettings, type SparkScanViewSettingsJSON };
