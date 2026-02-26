import { Quadrilateral, Anchor, Point, QuadrilateralJSON, AnchorPositionsJSON } from '@scandit/web-datacapture-core';
import { Barcode, BarcodeJSON } from './Barcode.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './EncodingRange.js';
import './StructuredAppendData.js';

interface TrackedBarcodeJSON {
    barcode: BarcodeJSON;
    deltaTime: number;
    identifier: string;
    location: QuadrilateralJSON;
    anchorPositions: AnchorPositionsJSON;
    shouldAnimateFromPreviousToNextState: boolean;
}
declare class TrackedBarcode {
    private _barcode;
    private _identifier;
    private _location;
    private _anchorPositions;
    private _shouldAnimateFromPreviousToNextState;
    private sessionFrameSequenceID?;
    get barcode(): Barcode;
    get identifier(): number;
    get location(): Quadrilateral;
    get shouldAnimateFromPreviousToNextState(): boolean;
    get anchorPositions(): Quadrilateral;
    private static fromJSON;
    getAnchorPosition(anchor: Anchor): Point;
}

export { TrackedBarcode, type TrackedBarcodeJSON };
