import { Color } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

interface SparkScanToastSettingsJSON {
    continuousModeDisabledMessage: string | null;
    continuousModeEnabledMessage: string | null;
    scanPausedMessage: string | null;
    toastBackgroundColor: string | null;
    toastEnabled: boolean;
    toastTextColor: string | null;
    torchDisabledMessage: string | null;
    torchEnabledMessage: string | null;
    zoomedInMessage: string | null;
    zoomedOutMessage: string | null;
}
declare class SparkScanToastSettings implements Serializable<SparkScanToastSettingsJSON> {
    continuousModeDisabledMessage: string | null;
    continuousModeEnabledMessage: string | null;
    scanPausedMessage: string | null;
    targetModeDisabledMessage: string | null;
    targetModeEnabledMessage: string | null;
    toastBackgroundColor: Color | null;
    toastEnabled: boolean;
    toastTextColor: Color | null;
    torchDisabledMessage: string | null;
    torchEnabledMessage: string | null;
    zoomedInMessage: string | null;
    zoomedOutMessage: string | null;
    toJSONObject(): SparkScanToastSettingsJSON;
}

export { SparkScanToastSettings, type SparkScanToastSettingsJSON };
