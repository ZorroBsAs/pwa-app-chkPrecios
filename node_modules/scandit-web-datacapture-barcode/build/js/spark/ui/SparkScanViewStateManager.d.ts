import { TorchState } from 'scandit-web-datacapture-core';
import { SparkScanPreviewBehavior } from '../SparkScanPreviewBehavior.js';
import { SparkScanScanningBehavior } from '../SparkScanScanningBehavior.js';
import { SparkScanScanningMode } from '../SparkScanScanningMode.js';
import { SparkScanViewHandMode } from './SparkScanViewHandMode.js';
import { SparkScanViewPreferenceManager } from './SparkScanViewPreferenceManager.js';
import { SparkScanViewSettings } from './SparkScanViewSettings.js';
import { SparkScanViewState } from './SparkScanViewState.js';
import 'scandit-web-datacapture-core/build/js/private/Serializable';
import './SparkScanToastSettings.js';

declare class SparkScanViewStateManager {
    state: SparkScanViewState;
    scanningMode: SparkScanScanningMode;
    zoomFactor: number;
    holdingToScan: boolean;
    torchState: TorchState;
    private viewSettings;
    private preferenceManager;
    constructor(viewSettings: SparkScanViewSettings, preferenceManager: SparkScanViewPreferenceManager);
    get targetModeEnabled(): boolean;
    get scanningBehavior(): SparkScanScanningBehavior;
    set scanningBehavior(scanningBehavior: SparkScanScanningBehavior);
    get previewBehavior(): SparkScanPreviewBehavior;
    set previewBehavior(previewBehavior: SparkScanPreviewBehavior);
    get soundEnabled(): boolean;
    set soundEnabled(soundEnabled: boolean);
    get hapticEnabled(): boolean;
    set hapticEnabled(hapticEnabled: boolean);
    get handMode(): SparkScanViewHandMode;
    set handMode(handMode: SparkScanViewHandMode);
    get zoomedIn(): boolean;
    get zoomedOut(): boolean;
    get rightHandModeEnabled(): boolean;
    get leftHandModeEnabled(): boolean;
    get idleState(): boolean;
    get torchEnabled(): boolean;
    get continuousModeEnabled(): boolean;
    get portraitOrientationTriggerButtonTranslateY(): number | undefined;
    set portraitOrientationTriggerButtonTranslateY(translateY: number);
    get landscapeOrientationTriggerButtonTranslateY(): number | undefined;
    set landscapeOrientationTriggerButtonTranslateY(translateY: number);
}

export { SparkScanViewStateManager };
