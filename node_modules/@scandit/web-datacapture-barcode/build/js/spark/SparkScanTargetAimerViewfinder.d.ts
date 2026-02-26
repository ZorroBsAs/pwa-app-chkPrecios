import { ViewfinderTypeTargetAimer, NumberWithUnitJSON, Viewfinder, NumberWithUnit } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

interface SparkScanTargetAimerViewfinderJSON {
    type: ViewfinderTypeTargetAimer;
    radius: NumberWithUnitJSON;
}
declare class SparkScanTargetAimerViewfinder implements Viewfinder, Serializable<SparkScanTargetAimerViewfinderJSON> {
    radius: NumberWithUnit;
    private readonly type;
    toJSONObject(): SparkScanTargetAimerViewfinderJSON;
}

export { SparkScanTargetAimerViewfinder, type SparkScanTargetAimerViewfinderJSON };
