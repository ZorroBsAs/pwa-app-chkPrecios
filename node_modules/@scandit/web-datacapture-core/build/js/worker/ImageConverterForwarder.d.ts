/// <reference types="emscripten" />
import { ImageConverterInstance, ImageBuffer, BitmapWithFormat } from '../private/djinni-types/index.js';
import { W as WorkerFunctions } from '../DataCaptureContext-Dvdr7st4.js';
import '../Camera-DhGjpcjv.js';
import '../commons/Rect.js';
import '../private/Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import '../private/privateAccess.js';
import '../DataCaptureContextSettings.js';
import '../commons/JSONType.js';
import '../DataCaptureViewPlusRelated.js';
import '../NotificationPresenter/NotificationPresenter.js';
import '../NotificationPresenter/NotificationConfiguration.js';
import '../commons/Color.js';
import '../ScanditIcon.js';
import '../private/utils/ScanditHTMLElement.js';
import '../NotificationPresenter/NotificationStyle.js';
import '../commons/Anchor.js';
import '../commons/MarginsWithUnit.js';
import '../commons/NumberWithUnit.js';
import '../commons/MeasureUnit.js';
import '../commons/Orientation.js';
import '../commons/PointWithUnit.js';
import '../commons/Quadrilateral.js';
import '../private/CustomLocationsView.js';
import '../private/View.js';
import '../private/AnchorPositions.js';
import '../private/nativeHandle.js';
import '../license/OpenSourceSoftwareLicenseInfo.js';
import '../logger.js';
import '../private/FrameReaders/ColorType.js';
import '../LoadingStatus.js';
import '../private/HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import '../private/utils/AsyncStateMachine.js';
import '../tsHelper.js';

/**
 * This class is just forwards conversion request to the main thread.
 * It is meant to be used when OffscreenCanvas is not available in the worker thread.
 */
declare class ImageConverterForwarder implements ImageConverterInstance {
    private readonly workerFunctions;
    private options;
    private imageIdCounter;
    private conversions;
    constructor(workerFunctions: WorkerFunctions, options: {
        quality: number;
    });
    /**
     * The conversion will be performed in the main thread.
     */
    convertToJpeg(imageBuffer: ImageBuffer, orientation: number): Promise<Uint8Array>;
    convertToBitmap(imageBuffer: ImageBuffer): BitmapWithFormat;
    /**
     * Called by the main thread when the conversion has finished.
     */
    onConvertToJPEGResult(imageId: number, result: Uint8Array): void;
}

export { ImageConverterForwarder };
