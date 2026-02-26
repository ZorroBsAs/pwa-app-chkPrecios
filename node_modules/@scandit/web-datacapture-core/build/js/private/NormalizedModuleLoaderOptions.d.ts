/// <reference types="emscripten" />
import { M as ModuleLoaderOptions } from '../DataCaptureContext-Dvdr7st4.js';
import { LoadingStatusSubscriber } from '../LoadingStatus.js';
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
import '../ScanditIcon.js';
import './utils/ScanditHTMLElement.js';
import '../NotificationPresenter/NotificationStyle.js';
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
import './djinni-types/index.js';
import './HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import './utils/AsyncStateMachine.js';
import '../tsHelper.js';

/**
 * @hidden
 * Hidden
 * */
interface NormalizedModuleLoaderOptions extends ModuleLoaderOptions {
    loadProgressNotifier?: LoadingStatusSubscriber;
    verifyResponseHash: boolean;
    highEndBlurryRecognition?: boolean;
    simdSupport: boolean;
    threadsSupport: boolean;
}

export type { NormalizedModuleLoaderOptions };
