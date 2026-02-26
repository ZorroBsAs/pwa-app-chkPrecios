import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { SparkScanPreviewBehavior } from './SparkScanPreviewBehavior.js';
import { SparkScanScanningBehavior } from './SparkScanScanningBehavior.js';

interface SparkScanScanningModeJSON {
    type: "default" | "target";
    scanningBehavior: SparkScanScanningBehavior;
    previewBehavior: SparkScanPreviewBehavior;
}
interface SparkScanScanningModeAnalyticsJSON {
    type: "default" | "target";
    settings: {
        scanning_behavior: SparkScanScanningBehavior;
        preview_behavior: SparkScanPreviewBehavior;
    };
}
declare abstract class SparkScanScanningMode implements Serializable<SparkScanScanningModeJSON> {
    readonly scanningBehavior: SparkScanScanningBehavior;
    readonly previewBehavior: SparkScanPreviewBehavior;
    protected readonly type: SparkScanScanningModeJSON["type"];
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior: SparkScanPreviewBehavior);
    toJSONObject(): SparkScanScanningModeJSON;
    protected toAnalyticsJSONObject(): SparkScanScanningModeAnalyticsJSON;
    protected abstract copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected abstract changeMode(): SparkScanScanningMode;
}
declare class SparkScanScanningModeDefault extends SparkScanScanningMode {
    protected copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected changeMode(): SparkScanScanningMode;
}
declare class SparkScanScanningModeTarget extends SparkScanScanningMode {
    protected copyWith(scanningBehavior?: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior): SparkScanScanningMode;
    protected changeMode(): SparkScanScanningMode;
}

export { SparkScanScanningMode, type SparkScanScanningModeAnalyticsJSON, SparkScanScanningModeDefault, type SparkScanScanningModeJSON, SparkScanScanningModeTarget };
