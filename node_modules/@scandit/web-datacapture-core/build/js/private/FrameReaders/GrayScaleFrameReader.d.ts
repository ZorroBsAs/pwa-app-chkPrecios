/// <reference types="emscripten" />
import { O as FrameCapture } from '../../DataCaptureContext-Dvdr7st4.js';
import { ColorType } from './ColorType.js';
import { FrameReaderAbstract, PoolCapacityOptions } from './FrameReaderAbstract.js';
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

declare class GrayScaleFrameReader extends FrameReaderAbstract {
    colorType: ColorType;
    protected _framePool: Optional<WatermarkStack<Uint8ClampedArray>>;
    private _shaderProgram;
    private _canvas;
    private _ctx;
    private _positionBuffer;
    private _texture;
    private _rgbaFallbackReader;
    private _useRgbaFallback;
    /**
     * When these vertices are connected, they form a full-screen quad that covers the entire viewport.
     * This quad is used as the rendering target for the grayscale effect.
     * The vertices are specified in normalized device coordinates, where (-1, -1) is the bottom-left corner of the viewport, and (1, 1) is the top-right corner.
     * These positions are used in conjunction with the vertex and fragment shaders to apply the grayscale effect to the input RGBA frame across the entire screen.
     * The transformation is performed on each pixel within these triangles using the shaders.
     * https://www.khronos.org/opengl/wiki/Primitive#Triangle_primitives
     */
    private _positions;
    constructor(originalGLContext: WebGLRenderingContext, options?: PoolCapacityOptions | undefined);
    private get _webglContext();
    readFromSource(source: TexImageSource): FrameCapture;
    setup(): void;
    dispose(): void;
    private updateCanvasSizeIfNeeded;
    private updateFrameSizeIfNeeded;
    private initShaderProgram;
    private initBuffers;
    private initTexture;
}

export { GrayScaleFrameReader };
