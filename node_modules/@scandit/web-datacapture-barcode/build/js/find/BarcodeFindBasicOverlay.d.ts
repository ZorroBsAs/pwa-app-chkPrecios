import { Optional, DataCaptureView } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { BarcodeFind } from './BarcodeFind.js';
import './BarcodeFindFeedback.js';
import './BarcodeFindItem.js';
import './BarcodeFindSession.js';
import '../TrackedBarcode.js';
import '../Barcode.js';
import '../EncodingRange.js';
import '../StructuredAppendData.js';
import './BarcodeFindTransformer.js';
import './BarcodeFindSettings.js';
import '../SymbologySettings.js';

interface BarcodeFindBasicOverlayJSON {
    type: string;
    shouldShowScanAreaGuides: boolean;
    shouldShowHint: boolean;
    userGuidanceEnabled: boolean;
    textForAllItemsFoundSuccessfullyHint: string | null;
    textForPointAtBarcodesToSearchHint: string | null;
    textForMoveCloserToBarcodesHint: string | null;
    textForTapShutterToPauseScreenHint: string | null;
    textForTapShutterToResumeScreenHint: string | null;
    textForItemListUpdatedHint: string | null;
    textForItemListUpdatedWhenPausedHint: string | null;
}
declare class BarcodeFindBasicOverlay implements Serializable<BarcodeFindBasicOverlayJSON> {
    private type;
    private shouldShowScanAreaGuides;
    private userGuidanceEnabled;
    private barcodeFind;
    private view;
    private textForAllItemsFoundSuccessfullyHint;
    private textForPointAtBarcodesToSearchHint;
    private textForMoveCloserToBarcodesHint;
    private textForTapShutterToPauseScreenHint;
    private textForTapShutterToResumeScreenHint;
    private textForItemListUpdatedHint;
    private textForItemListUpdatedWhenPausedHint;
    private shouldShowHint;
    static withBarcodeFind(barcodeFind: BarcodeFind, view: Optional<DataCaptureView>): Promise<BarcodeFindBasicOverlay>;
    setShouldShowScanAreaGuides(value: boolean): Promise<void>;
    getShouldShowScanAreaGuides(): boolean;
    setUserGuidanceEnabled(enable: boolean): Promise<void>;
    setTextForAllItemsFoundSuccessfullyHint(text: string): Promise<void>;
    setTextForPointAtBarcodesToSearchHint(text: string): Promise<void>;
    setTextForMoveCloserToBarcodesHint(text: string): Promise<void>;
    setTextForTapShutterToPauseScreenHint(text: string): Promise<void>;
    setTextForTapShutterToResumeScreenHint(text: string): Promise<void>;
    setTextForItemListUpdatedHint(text: string): Promise<void>;
    setTextForItemListUpdatedWhenPausedHint(text: string): Promise<void>;
    setShouldShowHint(enable: boolean): Promise<void>;
    toJSONObject(): BarcodeFindBasicOverlayJSON;
    private notify;
}

export { BarcodeFindBasicOverlay, type BarcodeFindBasicOverlayJSON };
