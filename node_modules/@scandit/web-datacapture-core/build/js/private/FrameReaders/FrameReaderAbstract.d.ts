/// <reference types="emscripten" />
import { O as FrameCapture } from '../../DataCaptureContext-Dvdr7st4.js';
import { ColorType } from './ColorType.js';
import { WatermarkStack } from './WatermarkStack.js';
import { Optional } from '../../tsHelper.js';
import '../../Camera-DhGjpcjv.js';
import '../../commons/Rect.js';
import '../Serializable.js';
import '../../commons/Point.js';
import '../../commons/Size.js';
import '../privateAccess.js';
import '../../DataCaptureContextSettings.js';
import '../../commons/JSONType.js';
import '../../DataCaptureViewPlusRelated.js';
import '../../NotificationPresenter/NotificationPresenter.js';
import '../../NotificationPresenter/NotificationConfiguration.js';
import '../../commons/Color.js';
import '../../ScanditIcon.js';
import '../utils/ScanditHTMLElement.js';
import '../../NotificationPresenter/NotificationStyle.js';
import '../../commons/Anchor.js';
import '../../commons/MarginsWithUnit.js';
import '../../commons/NumberWithUnit.js';
import '../../commons/MeasureUnit.js';
import '../../commons/Orientation.js';
import '../../commons/PointWithUnit.js';
import '../../commons/Quadrilateral.js';
import '../CustomLocationsView.js';
import '../View.js';
import '../AnchorPositions.js';
import '../nativeHandle.js';
import '../../license/OpenSourceSoftwareLicenseInfo.js';
import '../../logger.js';
import '../../LoadingStatus.js';
import '../djinni-types/index.js';
import '../HtmlElementState.js';
import '../../commons/SizeWithUnit.js';
import '../utils/AsyncStateMachine.js';

interface PoolCapacityOptions {
    minPoolCapacity: number;
    maxPoolCapacity: number;
}
declare abstract class FrameReaderAbstract {
    colorType: ColorType;
    protected readonly _contextWebGL: WebGLRenderingContext;
    protected readonly _maxPoolCapacity: number;
    protected readonly _minPoolCapacity: number;
    /**
     * In mobile applications, particularly on Android, capturing frames at a slow rate can be a common issue,
     * especially in scenarios involving barcode tracking. Using a stack becomes valuable in such situations
     * because it allows us to capture next frame with pixel data while the engine is still processing the previous one,
     * eliminating the need to wait for the engine to finish before capturing the next frame.
     */
    protected _framePool: Optional<WatermarkStack<Uint8ClampedArray>>;
    /**
     * Expected size of buffers in the pool. Used to validate buffers before recycling.
     */
    protected _frameSize: number;
    constructor(contextWebGL: WebGLRenderingContext, options?: PoolCapacityOptions | undefined);
    abstract readFromSource(source: TexImageSource): FrameCapture;
    abstract setup(): void;
    recycle(pixelsData: Uint8ClampedArray): void;
    abstract dispose(): void;
}

export { FrameReaderAbstract, type PoolCapacityOptions };
