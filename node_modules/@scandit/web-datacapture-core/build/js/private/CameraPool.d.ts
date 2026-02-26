/// <reference types="emscripten" />
import { a as Camera } from '../Camera-DhGjpcjv.js';
import '../ScanditIcon.js';
import '../DataCaptureContext-Dvdr7st4.js';
import { INTERNAL_ACCESS } from './privateAccess.js';
import '../commons/Rect.js';
import './Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import '../commons/Color.js';
import './utils/ScanditHTMLElement.js';
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

/**
 * Manages a pool of Camera instances to ensure efficient reuse and proper lifecycle management.
 *
 * The CameraPool class serves as a central registry for Camera objects, preventing duplicate
 * camera instances and maintaining consistency between application-created cameras and
 * device-detected cameras. It handles the complex reconciliation process when new cameras
 * are detected from the device, ensuring that existing Camera object references remain valid.
 *
 * This approach ensures that camera references remain stable across device enumerations
 * while keeping the pool synchronized with the actual hardware state.
 *
 * Because of this central management of Camera instances, references to Camera object will work. For example,
 * if you switch cameras using the CameraSwitchControl and cycle through all cameras until the initial one,
 * executing "initialCamera === context.frameSource" will return true (initialCamera being the camera instance that
 * you passed to "context.setFrameSource()")
 */
declare class CameraPool {
    private cameraPool;
    /**
     * Creates a new camera if the pool does not contain a similar-enough instance.
     */
    getOrCreate(newCamera: Camera): Camera;
    /**
     * Integrates newly detected cameras from the device with the existing camera pool through a multi-stage
     * reconciliation process. This method preserves existing camera object references when possible and ensures
     * the pool accurately reflects the current device state.
     *
     * **Reconciliation Process:**
     * 1. **DeviceId Matching**: Matches new cameras with pool cameras by deviceId, updating labels and positions
     * 2. **Position Matching**: For unmatched cameras, attempts matching by camera position
     * 3. **Force Updates**: Updates remaining pool cameras with new camera data when counts don't align
     * 4. **Add New Cameras**: Adds any unmatched new cameras directly to the pool
     * 5. **Cleanup**: Removes pool cameras that couldn't be mapped to actual device cameras
     *
     * **Key Behaviors:**
     * - Preserves existing Camera object references to maintain consistency across the application
     * - Handles cameras without deviceIds by falling back to position-based matching
     * - Prevents duplicate updates through internal tracking
     * - Provides detailed console logging for debugging camera management
     * - Warns about user-created cameras that don't correspond to actual devices
     *
     * @param newCameras Array of Camera objects detected from the current device enumeration
     */
    integrateIncomingVideoDevices(newCameras: Camera[]): void;
    private allCamerasNoDeviceId;
    get(): Camera[];
    private push;
    private debugLog;
    private logPool;
    private dumpAsSimpleObjects;
}
declare const internal: {
    [INTERNAL_ACCESS]: {
        CameraPool: typeof CameraPool;
    };
};

declare const cameraPool: CameraPool;

export { cameraPool, internal };
