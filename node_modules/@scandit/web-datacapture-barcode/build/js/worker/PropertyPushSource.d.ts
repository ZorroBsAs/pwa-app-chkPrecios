import { PropertyBehaviorSubject } from './PropertyBehaviorSubject.js';

declare enum PropertyName {
    TorchState = "torch_state",
    ScanningMode = "scanning_mode",
    SoundEnabled = "sound_enabled",
    HapticEnabled = "haptic_enabled",
    SessionStopReason = "session_stop_reason",
    CameraPosition = "camera_position"
}
declare class PropertyPushSource {
    getBehaviorSubject(identifier: string): PropertyBehaviorSubject;
}

export { PropertyName, PropertyPushSource };
