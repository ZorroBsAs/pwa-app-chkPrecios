import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { ArucoDictionaryPreset } from './ArucoDictionaryPreset.js';
import { ArucoMarkerJSON, ArucoMarker } from './ArucoMarker.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable.js';

type ArucoDictionaryJSON = {
    preset: ArucoDictionaryPreset | null;
    markers: ArucoMarkerJSON[] | null;
    markerSize: number | null;
};
declare class ArucoDictionary implements Serializable<ArucoDictionaryJSON> {
    private preset;
    private markers;
    private markerSize;
    static fromPreset(preset: ArucoDictionaryPreset): ArucoDictionary;
    static createWithMarkers(markerSize: number, markers: ArucoMarker[]): ArucoDictionary;
    toJSONObject(): ArucoDictionaryJSON;
}

export { ArucoDictionary, type ArucoDictionaryJSON };
