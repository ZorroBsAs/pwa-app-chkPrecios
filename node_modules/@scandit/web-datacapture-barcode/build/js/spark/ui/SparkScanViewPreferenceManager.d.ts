import { SparkScanScanningBehavior } from '../SparkScanScanningBehavior.js';

interface SparkScanViewPreference {
    scanningBehavior: SparkScanScanningBehavior;
    portraitOrientationTriggerButtonTranslateX: number;
    portraitOrientationTriggerButtonTranslateY: number;
    landscapeOrientationTriggerButtonTranslateX: number;
    landscapeOrientationTriggerButtonTranslateY: number;
    portraitOrientationMiniPreviewTranslateX: number;
    portraitOrientationMiniPreviewTranslateY: number;
    landscapeOrientationMiniPreviewTranslateX: number;
    landscapeOrientationMiniPreviewTranslateY: number;
}
declare class SparkScanViewPreferenceManager {
    private storage;
    constructor(storage: Storage);
    get scanningBehavior(): SparkScanScanningBehavior | undefined;
    set scanningBehavior(scanningBehavior: SparkScanScanningBehavior);
    get portraitOrientationTriggerButtonTranslateX(): number | undefined;
    set portraitOrientationTriggerButtonTranslateX(translateX: number);
    get portraitOrientationTriggerButtonTranslateY(): number | undefined;
    set portraitOrientationTriggerButtonTranslateY(translateY: number);
    get landscapeOrientationTriggerButtonTranslateX(): number | undefined;
    set landscapeOrientationTriggerButtonTranslateX(translateX: number);
    get landscapeOrientationTriggerButtonTranslateY(): number | undefined;
    set landscapeOrientationTriggerButtonTranslateY(translateY: number);
    get portraitOrientationMiniPreviewTranslateX(): number | undefined;
    set portraitOrientationMiniPreviewTranslateX(translateX: number);
    get portraitOrientationMiniPreviewTranslateY(): number | undefined;
    set portraitOrientationMiniPreviewTranslateY(translateY: number);
    get landscapeOrientationMiniPreviewTranslateX(): number | undefined;
    set landscapeOrientationMiniPreviewTranslateX(translateX: number);
    get landscapeOrientationMiniPreviewTranslateY(): number | undefined;
    set landscapeOrientationMiniPreviewTranslateY(translateY: number);
    private getItem;
    private setItem;
}

export { type SparkScanViewPreference, SparkScanViewPreferenceManager };
