/// <reference types="emscripten" />
import { Rect } from './commons/Rect.js';
import { INTERNAL_ACCESS } from './private/privateAccess.js';
import { Serializable } from './private/Serializable.js';

declare enum CameraPosition$1 {
    WorldFacing = "worldFacing",
    UserFacing = "userFacing"
}
declare enum CameraResolutionConstraint {
    ULTRA_HD = 0,
    FULL_HD = 1,
    HD = 2,
    SD = 3,
    NONE = 4
}
declare enum AspectRatio {
    AUTO = "auto",
    FOUR_TO_THREE = "fourToThree",
    SIXTEEN_TO_NINE = "sixteenToNine"
}
interface DeviceCamera {
    position: CameraPosition$1;
    label: string;
    deviceId: string;
    currentResolution?: VideoFrameResolution;
}
/**
 * A helper object to interact with cameras.
 */
declare namespace CameraAccess {
    /**
     * Overrides for main camera for a given camera position on a desktop/laptop device, set when accessing an initial camera.
     */
    const mainCameraForPositionOverridesOnDesktop: Map<CameraPosition$1, DeviceCamera>;
    /**
     *
     * To be accessed directly only for tests.
     *
     * The mapping from deviceIds to camera objects.
     */
    const deviceIdToCameraObjects: Map<string, DeviceCamera>;
    /**
     *
     * To be accessed directly only for tests.
     *
     * The list of inaccessible deviceIds.
     */
    const inaccessibleDeviceIds: Set<string>;
    type DeviceCameraChangeListener = (videoDevices: DeviceCamera[]) => void;
    function addVideoDevicesListener(listener: DeviceCameraChangeListener): void;
    function setMainCameraForPositionOverridesOnDesktop(cameraPosition: CameraPosition$1, deviceCamera: DeviceCamera): void;
    /**
     * used mainly for testing
     */
    function clearMainCameraForPositionOverridesOnDesktop(): void;
    /**
     *
     * @param label The camera label.
     * @returns Whether the label identifies the camera being the iOS front (main) camera one.
     */
    function isIOSFrontCameraLabel(label: string): boolean;
    /**
     *
     * @param label The camera label.
     * @returns Whether the label identifies the camera being the iOS back (main) camera one.
     */
    function isIOSBackCameraLabel(label: string): boolean;
    /**
     *
     * @param label The camera label.
     * @returns Whether the label identifies the camera being the iOS Back Dual camera one.
     */
    function isIOSBackDualWideCameraLabel(label: string): boolean;
    /**
     *
     * @param label The camera label.
     * @returns Whether the label identifies the camera being the iOS UltraWide back camera one.
     */
    function isIOSUltraWideBackCameraLabel(label: string): boolean;
    /**
     *
     * Get the main camera for the given camera position.
     *
     * @param cameras The array of available [[DeviceCamera]] objects.
     * @param cameraPosition The wanted camera position.
     * @returns The main camera matching the wanted camera position.
     */
    function getMainCameraForPosition(cameras: DeviceCamera[], cameraPosition: CameraPosition$1): DeviceCamera | undefined;
    /**
     *
     * Sort the given cameras in order of priority of access based on the given camera position.
     *
     * @param cameras The array of available [[DeviceCamera]] objects.
     * @param cameraPosition The preferred camera position.
     * @returns The sorted cameras.
     */
    function sortCamerasForCameraPosition<DeviceCameraLike extends DeviceCamera = DeviceCamera>(cameras: DeviceCameraLike[], cameraPosition: CameraPosition$1): DeviceCameraLike[];
    /**
     *
     * Adjusts the camera's information based on the given currently active video stream.
     *
     * @param mediaStream The currently active `MediaStream` object.
     * @param camera The currently active [[Camera]] object associated with the video stream.
     */
    function adjustCameraFromMediaStream(mediaStream: MediaStream, camera: DeviceCamera): void;
    /**
     * Get a list of cameras (if any) available on the device, a camera access permission is requested to the user
     * the first time this method is called if needed.
     *
     * If the user denies the necessary camera access permission, a list of cameras with the correct amount of devices is
     * returned in any case, but the cameras will have no available (empty) label and deviceId and can thus not be
     * accessed.
     *
     * If the browser is incompatible the returned promise is rejected with a `UnsupportedBrowserError` error.
     *
     * When refreshing available devices, if updated deviceId information is detected, cameras' deviceId are updated
     * accordingly. This could happen after a camera access and stop in some situations.
     *
     * @param refreshDevices Force a call to refresh available video devices even when information is already available.
     * @param cameraAlreadyAccessed Hint that a camera has already been accessed before, avoiding a possible initial
     * camera access permission request on the first call, in cases this cannot be already reliably detected.
     * @returns A promise resolving to the array of available [[Camera]] objects (could be empty).
     */
    function getCameras(refreshDevices?: boolean, cameraAlreadyAccessed?: boolean): Promise<DeviceCamera[]>;
    /**
     *
     * Get the *getUserMedia* *video* parameters to be used given a resolution fallback level and the browser used.
     *
     * @param cameraResolutionConstraint The resolution constraint.
     * @returns The resulting *getUserMedia* *video* parameters.
     */
    function getUserMediaVideoParameters(cameraResolutionConstraint: CameraResolutionConstraint, preferredAspectRatio?: AspectRatio): MediaTrackConstraints;
    /**
     *
     * Mark a camera to be inaccessible and thus excluded from the camera list returned by [[getCameras]].
     *
     * @param camera The camera to mark to be inaccessible.
     */
    function markCameraAsInaccessible(camera: DeviceCamera): void;
    /**
     *
     * Try to access a given camera for video input at the given resolution level.
     *
     * If a camera is inaccessible because of errors, then it's added to the inaccessible device list. If the specific
     * error is of type `OverconstrainedError` or `NotReadableError` however, this procedure is done later on via a
     * separate external logic; also, in case of an error of type `NotAllowedError` (permission denied) this procedure is
     * not executed, in order to possibly recover if and when the user allows the camera to be accessed again.
     * This is done to allow checking if the camera can still be accessed via an updated deviceId when deviceId
     * information changes, or if it should then be confirmed to be considered inaccessible.
     *
     * Depending on parameters, device features and user permissions for camera access, any of the following errors
     * could be the rejected result of the returned promise:
     * - `AbortError`
     * - `NotAllowedError`
     * - `NotFoundError`
     * - `NotReadableError`
     * - `SecurityError`
     * - `OverconstrainedError`
     *
     * @param cameraResolutionConstraint The resolution constraint.
     * @param camera The camera to try to access for video input.
     * @returns A promise resolving to the `MediaStream` object coming from the accessed camera.
     */
    function accessCameraStream(camera: DeviceCamera, cameraResolutionConstraint: CameraResolutionConstraint, preferredAspectRatio?: AspectRatio): Promise<MediaStream>;
}

/**
 * Private camera settings properties that are not part of the public API.
 * These properties are accessed via getProperty/setProperty methods.
 */
interface PrivateCameraExtraProperties {
    grayScaleFrameReader?: boolean;
    exposureTargetBias?: number;
    exposureDuration?: number;
    minFrameRate?: number;
    maxFrameRate?: number;
    manualLensPosition?: number;
    preferredAspectRatio?: AspectRatio;
    repeatedTriggerInterval?: number;
}
declare enum FrameSourceState {
    On = "on",
    Off = "off",
    Standby = "standby",
    Starting = "starting",
    Stopping = "stopping",
    BootingUp = "bootingUp",
    WakingUp = "wakingUp",
    GoingToSleep = "goingToSleep",
    ShuttingDown = "shuttingDown"
}
declare enum TorchState {
    On = "on",
    Off = "off"
}
declare enum CameraPosition {
    WorldFacing = "worldFacing",
    UserFacing = "userFacing"
}
declare enum VideoResolution {
    /**
     * @deprecated 8.0.0 Auto is deprecated. Please use the capture mode's recommendedCameraSettings for the best results.
     */
    Auto = "auto",
    HD = "hd",
    FullHD = "fullHd",
    UHD4K = "uhd4k"
}
declare enum FocusGestureStrategy {
    None = "none",
    Manual = "manual",
    ManualUntilCapture = "manualUntilCapture",
    AutoOnLocation = "autoOnLocation"
}
interface FrameSourceListener {
    didChangeState?: (frameSource: FrameSource, newState: FrameSourceState) => void;
}
interface FrameSourceJSON {
    type: string;
}
interface FrameSource extends Serializable<FrameSourceJSON> {
    readonly desiredState: FrameSourceState;
    getCurrentState: () => FrameSourceState;
    switchToDesiredState: (desiredState: FrameSourceState) => Promise<void>;
    addListener: (listener: FrameSourceListener) => void;
    removeListener: (listener: FrameSourceListener) => void;
}
interface CameraSettingsJSONBase extends Partial<PrivateCameraExtraProperties> {
    preferredResolution: string;
    zoomFactor: number;
    zoomGestureZoomFactor: number;
    api?: number;
}
interface CameraSettingsFromJSON extends CameraSettingsJSONBase {
    focusGestureStrategy: string;
}
interface CameraSettingsJSON extends CameraSettingsJSONBase {
    focus: {
        focusGestureStrategy: string;
        [key: string]: any;
    };
    [key: string]: any;
}
declare function isCameraFrameSource(frameSource?: FrameSource | null): frameSource is Camera;
declare class CameraSettings implements Serializable<CameraSettingsJSON> {
    preferredResolution: VideoResolution;
    zoomFactor: number;
    zoomGestureZoomFactor: number;
    private focus;
    get focusGestureStrategy(): FocusGestureStrategy;
    set focusGestureStrategy(newStrategy: FocusGestureStrategy);
    /**
     * Copies private enumerable properties from a source object to this instance.
     * @param source - The source object to copy properties from
     */
    private copyPrivatePropertiesFrom;
    private static fromJSON;
    constructor();
    constructor(settings: CameraSettings);
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    /**
     * The resulting JSON must also contain properties set on the object itself ("hidden" properties)
     */
    toJSONObject(): CameraSettingsJSON & Record<string, any>;
}

interface CameraJSON extends FrameSourceJSON {
    type: "camera";
    position: CameraPosition;
    settings: CameraSettingsJSON | Record<string, never>;
    desiredState: FrameSourceState;
    desiredTorchState: TorchState;
}
interface VideoFrameResolution {
    readonly width: number;
    readonly height: number;
}
declare class Camera implements FrameSource, Serializable<CameraJSON> {
    private _label;
    private _deviceId;
    position: CameraPosition;
    private _currentResolution?;
    /** This flag is set to true when the present camera could not be mapped to a real device camera. This happens when
     * device cameras were discovered but the reconciliation with existing cameras lead to unmapped instances.
     * See CameraPool.ts for more details about reconciliation.
     */
    private _notFoundOnDevice;
    /**
     * Internal flag to mark this instance as being the one for the best guess.
     * This allows us to have Camera.pickBestGuess() === Camera.pickBestGuess()
     */
    private _isBestGuess;
    private readonly cameraManager;
    private readonly type;
    private readonly webGLContextLostListener;
    private _currentState;
    private _settings;
    private _desiredTorchState;
    private _desiredState;
    private readonly listeners;
    private _context;
    private _desiredMirrorImageEnabled?;
    private _lastCaptureRequestAnimationFrame?;
    private _lastCanvasVideoPreviewAnimationFrame?;
    private _isAndroidWebView?;
    [INTERNAL_ACCESS]: {
        markAsUnmappedToDeviceCameras: () => void;
        setDeviceId: (deviceId: string) => void;
        setLabel: (label: string) => void;
        markAsBestGuess: () => void;
    };
    private _captureAndSendBound;
    private readonly stateTransitionStrategyMap;
    private currentTransitionStrategyPromise?;
    private constructor();
    /**
     * Return a new camera with no constraints. We autoselect the world facing position by default. The CameraManager
     * will figure out which of the device cameras will be the best match.
     */
    static pickBestGuess(): Camera;
    /**
     * Return a new camera with no constraints except for the position. The CameraManager will figure out
     * which of the device cameras will be the best match.
     */
    static pickBestGuessForPosition(position: CameraPosition): Camera;
    /**
     * Return a camera instance with the deviceId set on it. If the camera was already created in the past, it will be
     * returned instead of being created.
     */
    static forDeviceId(deviceId: string): Camera;
    /**
     * Get all available cameras from the device. This may trigger a permission prompt to the user to access cameras.
     */
    static getAll(refreshDevices?: boolean, cameraAlreadyAccessed?: boolean): Promise<Camera[]>;
    private static getOrCreate;
    /**
     * Create a Camera instance from a low-level DeviceCamera instance.
     */
    private static fromDeviceCamera;
    get deviceId(): string;
    get label(): string;
    get desiredState(): FrameSourceState;
    get settings(): CameraSettings;
    get currentResolution(): VideoFrameResolution | null;
    private setDeviceId;
    private setLabel;
    private get context();
    private set context(value);
    private get currentState();
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    getDesiredTorchState(): TorchState;
    setDesiredTorchState(desiredTorchState: TorchState): Promise<void>;
    isTorchAvailable(): Promise<boolean>;
    addListener(listener: FrameSourceListener | null): void;
    removeListener(listener: FrameSourceListener | null): void;
    applySettings(settings: CameraSettings): Promise<void>;
    toJSONObject(): CameraJSON;
    getMirrorImageEnabled(): boolean;
    setMirrorImageEnabled(enabled: boolean): Promise<void>;
    getCurrentState(): FrameSourceState;
    setClipArea(area?: Rect): Promise<void>;
    private setCurrentState;
    /**
     * Starts camera according to the given position. If a deviceId is set, pre-select the corresponding camera.
     * The function returns as soon as the camera has started successfully and is active. The label and
     * position properties reflect then the values found in the accessed stream.
     */
    private setupCamera;
    private markAsUnmappedToDeviceCameras;
    private markAsBestGuess;
    private notifyContext;
    private notifyListeners;
    private updateCanvasVideoImage;
    private captureAndSend;
    /**
     * Capture images from the video stream and send them to the context. If no context is set, the function will
     * stop itself until called again. While no enabled mode is present in the context, the function will schedule itself
     * again indefinitely without doing anything else.
     */
    private startSendingCapturesToWorker;
    private stopSendingCapturesToWorker;
    private transitionFromStateOffToOn;
    private transitionFromStateOffToStandby;
    private transitionFromStateOnToOff;
    private transitionFromStateOnToStandby;
    private transitionFromStateStandbyToOff;
    private transitionFromStateStandbyToOn;
    private isAndroidWebView;
    private isZoomAvailable;
}

export { AspectRatio as A, type CameraJSON as C, type DeviceCamera as D, FrameSourceState as F, type PrivateCameraExtraProperties as P, TorchState as T, type VideoFrameResolution as V, Camera as a, CameraPosition as b, VideoResolution as c, FocusGestureStrategy as d, type FrameSourceListener as e, type FrameSourceJSON as f, type FrameSource as g, type CameraSettingsJSONBase as h, type CameraSettingsFromJSON as i, type CameraSettingsJSON as j, isCameraFrameSource as k, CameraSettings as l, CameraPosition$1 as m, CameraResolutionConstraint as n, CameraAccess as o };
