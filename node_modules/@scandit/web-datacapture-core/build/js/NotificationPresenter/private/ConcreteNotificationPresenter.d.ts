/// <reference types="emscripten" />
import { H as HintPresenter } from '../../DataCaptureContext-Dvdr7st4.js';
import { NotificationConfiguration } from '../NotificationConfiguration.js';
import { NotificationPresenter } from '../NotificationPresenter.js';
import '../../Camera-DhGjpcjv.js';
import '../../commons/Rect.js';
import '../../private/Serializable.js';
import '../../commons/Point.js';
import '../../commons/Size.js';
import '../../private/privateAccess.js';
import '../../DataCaptureContextSettings.js';
import '../../commons/JSONType.js';
import '../../DataCaptureViewPlusRelated.js';
import '../../commons/Anchor.js';
import '../../commons/MarginsWithUnit.js';
import '../../commons/NumberWithUnit.js';
import '../../commons/MeasureUnit.js';
import '../../commons/Orientation.js';
import '../../commons/PointWithUnit.js';
import '../../commons/Quadrilateral.js';
import '../../private/CustomLocationsView.js';
import '../../private/View.js';
import '../../private/AnchorPositions.js';
import '../../private/nativeHandle.js';
import '../../license/OpenSourceSoftwareLicenseInfo.js';
import '../../logger.js';
import '../../private/FrameReaders/ColorType.js';
import '../../LoadingStatus.js';
import '../../ScanditIcon.js';
import '../../commons/Color.js';
import '../../private/utils/ScanditHTMLElement.js';
import '../../private/djinni-types/index.js';
import '../../private/HtmlElementState.js';
import '../../commons/SizeWithUnit.js';
import '../../private/utils/AsyncStateMachine.js';
import '../../tsHelper.js';
import '../NotificationStyle.js';

declare class ConcreteNotificationPresenter implements NotificationPresenter {
    private _hintPresenter;
    constructor(hintPresenter: HintPresenter);
    showNotification(notificationConfiguration: NotificationConfiguration): Promise<void>;
    hideNotification(notificationConfiguration: NotificationConfiguration): Promise<void>;
}

export { ConcreteNotificationPresenter };
