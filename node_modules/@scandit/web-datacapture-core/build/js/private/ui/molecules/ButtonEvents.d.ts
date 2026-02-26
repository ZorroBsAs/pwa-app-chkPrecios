/// <reference types="emscripten" />
/**
 * Custom event types for button components
 */
interface CameraFOVChangedEventDetail {
    currentMode: "1.0x" | "0.5x";
}
declare class CameraFOVChangedEvent extends CustomEvent<CameraFOVChangedEventDetail> {
    constructor(detail: CameraFOVChangedEventDetail);
}
interface CameraSwitchedEventDetail {
    currentMode: "front" | "back";
}
declare class CameraSwitchedEvent extends CustomEvent<CameraSwitchedEventDetail> {
    constructor(detail: CameraSwitchedEventDetail);
}
interface TorchToggledEventDetail {
    currentState: "on" | "off";
}
declare class TorchToggledEvent extends CustomEvent<TorchToggledEventDetail> {
    constructor(detail: TorchToggledEventDetail);
}
declare global {
    interface WindowEventMap {
        "camera-fov-changed": CameraFOVChangedEvent;
        "camera-switched": CameraSwitchedEvent;
        "torch-toggled": TorchToggledEvent;
    }
}

export { CameraFOVChangedEvent, type CameraFOVChangedEventDetail, CameraSwitchedEvent, type CameraSwitchedEventDetail, TorchToggledEvent, type TorchToggledEventDetail };
