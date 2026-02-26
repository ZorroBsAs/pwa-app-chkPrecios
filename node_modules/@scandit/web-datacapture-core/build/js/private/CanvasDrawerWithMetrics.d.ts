/// <reference types="emscripten" />
import { PrivateCanvasDrawer } from './CanvasDrawer.js';
import { I as PerformanceMetrics } from '../DataCaptureContext-Dvdr7st4.js';
import '../ScanditIcon.js';
import './CavansDrawerAbstract.js';
import './DrawCommandBuffer.js';
import '../Camera-DhGjpcjv.js';
import '../commons/Rect.js';
import './Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import './privateAccess.js';
import '../DataCaptureContextSettings.js';
import '../commons/JSONType.js';
import '../DataCaptureViewPlusRelated.js';
import '../NotificationPresenter/NotificationPresenter.js';
import '../NotificationPresenter/NotificationConfiguration.js';
import '../commons/Color.js';
import '../NotificationPresenter/NotificationStyle.js';
import './utils/ScanditHTMLElement.js';
import '../commons/Anchor.js';
import '../commons/MarginsWithUnit.js';
import '../commons/NumberWithUnit.js';
import '../commons/MeasureUnit.js';
import '../commons/Orientation.js';
import '../commons/PointWithUnit.js';
import '../commons/Quadrilateral.js';
import './CustomLocationsView.js';
import './View.js';
import './AnchorPositions.js';
import './nativeHandle.js';
import '../license/OpenSourceSoftwareLicenseInfo.js';
import '../logger.js';
import './FrameReaders/ColorType.js';
import '../LoadingStatus.js';
import './djinni-types/index.js';
import './HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import './utils/AsyncStateMachine.js';
import '../tsHelper.js';

declare class PrivateCanvasDrawerWithMetrics extends PrivateCanvasDrawer {
    private drawPerformanceFPSCounter;
    private lastDrawPerformanceFPSCounter;
    private lastFPSUpdateTime;
    private smoothedFPS;
    private totalFPSSamples;
    private performanceMetrics?;
    private performanceCanvasLayer;
    private _performanceLayerContext;
    private static readonly SMOOTHING_FACTOR;
    constructor(canvas: HTMLCanvasElement);
    get performanceLayerContext(): CanvasRenderingContext2D;
    setupPerformanceLayer(): void;
    setPerformanceMetrics(performanceMetrics: PerformanceMetrics): void;
    updateCanvasSizeAttributes(width: number, height: number, devicePixelRatio?: number): ReturnType<PrivateCanvasDrawer["updateCanvasSizeAttributes"]>;
    protected doDraw(timestamp: DOMHighResTimeStamp): void;
    private updateFPSMetrics;
    /**
     * Applies exponential smoothing to FPS measurements to reduce jitter.
     * Uses 90% weight on previous smoothed value and 10% weight on new sample.
     */
    private applyExponentialSmoothing;
    protected drawFullPerformanceMetrics(): void;
}

export { PrivateCanvasDrawerWithMetrics };
