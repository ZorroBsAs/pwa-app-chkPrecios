import { SparkScanScanningBehavior } from '../SparkScanScanningBehavior.js';
import { SparkScanViewHandMode } from './SparkScanViewHandMode.js';

interface SparkScanViewPreference {
    scanningBehavior: SparkScanScanningBehavior;
    soundEnabled: boolean;
    hapticEnabled: boolean;
    handMode: SparkScanViewHandMode;
    portraitOrientationTriggerButtonTranslateY: number;
    landscapeOrientationTriggerButtonTranslateY: number;
}
declare class SparkScanViewPreferenceManager {
    private storage;
    constructor(storage: Storage);
    get scanningBehavior(): SparkScanScanningBehavior | undefined;
    set scanningBehavior(scanningBehavior: SparkScanScanningBehavior);
    get soundEnabled(): boolean | undefined;
    set soundEnabled(soundEnabled: boolean);
    get hapticEnabled(): boolean | undefined;
    set hapticEnabled(hapticEnabled: boolean);
    get handMode(): SparkScanViewHandMode | undefined;
    set handMode(handMode: SparkScanViewHandMode);
    get portraitOrientationTriggerButtonTranslateY(): number | undefined;
    set portraitOrientationTriggerButtonTranslateY(translateY: number);
    get landscapeOrientationTriggerButtonTranslateY(): number | undefined;
    set landscapeOrientationTriggerButtonTranslateY(translateY: number);
    private getItem;
    private setItem;
}

export { type SparkScanViewPreference, SparkScanViewPreferenceManager };
