import { QuadrilateralJSON, Quadrilateral } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

interface LocalizedOnlyBarcodeJSON {
    frameId: number;
    location: QuadrilateralJSON;
}
declare class LocalizedOnlyBarcode implements Serializable<LocalizedOnlyBarcodeJSON> {
    private _frameID;
    private _location;
    get frameID(): number;
    get location(): Quadrilateral;
    private static fromJSON;
    toJSONObject(): LocalizedOnlyBarcodeJSON;
}

export { LocalizedOnlyBarcode, type LocalizedOnlyBarcodeJSON };
