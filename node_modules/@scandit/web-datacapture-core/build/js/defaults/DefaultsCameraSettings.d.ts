/// <reference types="emscripten" />
import { c as VideoResolution, d as FocusGestureStrategy } from '../Camera-DhGjpcjv.js';
import '../commons/Rect.js';
import '../private/Serializable.js';
import '../commons/Point.js';
import '../commons/Size.js';
import '../private/privateAccess.js';

declare const defaultCameraSettings: {
    preferredResolution: VideoResolution;
    zoomFactor: number;
    focusGestureStrategy: FocusGestureStrategy;
    zoomGestureZoomFactor: number;
};
type CameraSettingsDefaults = typeof defaultCameraSettings;

export { type CameraSettingsDefaults, defaultCameraSettings };
