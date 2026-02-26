import { Serializable } from 'scandit-web-datacapture-core/build/js/private/Serializable';
import { SparkScanPreviewBehavior } from './SparkScanPreviewBehavior.js';
import { SparkScanScanningBehavior } from './SparkScanScanningBehavior.js';

interface SparkScanScanningModeJSON {
    type: "default" | "target";
    scanningBehavior: SparkScanScanningBehavior;
    previewBehavior: SparkScanPreviewBehavior;
}
declare abstract class SparkScanScanningMode implements Serializable<SparkScanScanningModeJSON> {
    readonly scanningBehavior: SparkScanScanningBehavior;
    readonly previewBehavior: SparkScanPreviewBehavior;
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior: SparkScanPreviewBehavior);
    abstract toJSONObject(): SparkScanScanningModeJSON;
    protected abstract copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected abstract changeMode(): SparkScanScanningMode;
}
declare class SparkScanScanningModeDefault extends SparkScanScanningMode {
    toJSONObject(): SparkScanScanningModeJSON;
    protected copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected changeMode(): SparkScanScanningMode;
}
declare class SparkScanScanningModeTarget extends SparkScanScanningMode {
    toJSONObject(): SparkScanScanningModeJSON;
    protected copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected changeMode(): SparkScanScanningMode;
}

export { SparkScanScanningMode, SparkScanScanningModeDefault, type SparkScanScanningModeJSON, SparkScanScanningModeTarget };
