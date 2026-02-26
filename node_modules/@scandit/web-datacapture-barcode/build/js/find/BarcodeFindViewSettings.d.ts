import { ColorJSON, Color } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

interface BarcodeFindViewSettingsJSON {
    inListItemColor: ColorJSON;
    notInListItemColor: ColorJSON;
    soundEnabled: boolean;
    hapticEnabled: boolean;
}
declare class BarcodeFindViewSettings implements Serializable<BarcodeFindViewSettingsJSON> {
    inListItemColor: Color;
    notInListItemColor: Color;
    hapticEnabled: boolean;
    soundEnabled: boolean;
    constructor(inListItemColor: Color, notInListItemColor: Color, soundEnabled: boolean, hapticEnabled: boolean);
    private static fromJSON;
    toJSONObject(): BarcodeFindViewSettingsJSON;
}

export { BarcodeFindViewSettings, type BarcodeFindViewSettingsJSON };
