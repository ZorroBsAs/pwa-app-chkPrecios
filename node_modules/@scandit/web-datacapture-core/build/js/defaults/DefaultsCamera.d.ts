/// <reference types="emscripten" />
import { c as VideoResolution, d as FocusGestureStrategy, b as CameraPosition } from '../Camera-DhGjpcjv.js';
import '../ScanditIcon.js';
import '../DataCaptureContext-Dvdr7st4.js';
import '../commons/Rect.js';
import '../private/Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import '../private/privateAccess.js';
import '../commons/Color.js';
import '../private/utils/ScanditHTMLElement.js';
import '../DataCaptureContextSettings.js';
import '../commons/JSONType.js';
import '../DataCaptureViewPlusRelated.js';
import '../NotificationPresenter/NotificationPresenter.js';
import '../NotificationPresenter/NotificationConfiguration.js';
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
import '../private/djinni-types/index.js';
import '../private/HtmlElementState.js';
import '../commons/SizeWithUnit.js';
import '../private/utils/AsyncStateMachine.js';
import '../tsHelper.js';

declare const defaultCamera: {
    settings: {
        preferredResolution: VideoResolution;
        zoomFactor: number;
        focusGestureStrategy: FocusGestureStrategy;
        zoomGestureZoomFactor: number;
    };
    defaultPosition: CameraPosition;
    availablePositions: CameraPosition[];
};
type CameraDefaults = typeof defaultCamera;

export { type CameraDefaults, defaultCamera };
