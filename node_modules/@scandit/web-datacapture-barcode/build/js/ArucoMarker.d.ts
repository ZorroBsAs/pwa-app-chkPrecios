import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable.js';

type ArucoMarkerJSON = {
    markerData: string;
    markerSize: number;
};
declare class ArucoMarker implements Serializable<ArucoMarkerJSON> {
    private markerData;
    private markerSize;
    get size(): number;
    get data(): string;
    static create(markerSize: number, markerData: string): ArucoMarker;
    toJSONObject(): ArucoMarkerJSON;
}

export { ArucoMarker, type ArucoMarkerJSON };
