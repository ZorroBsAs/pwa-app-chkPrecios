/// <reference types="emscripten" />
import { FocusGestureJSON, FocusGesture, ZoomGestureJSON, ZoomGesture } from '../DataCaptureViewPlusRelated.js';
import '../private/Serializable.js';

declare class PrivateFocusGestureDeserializer {
    static fromJSON(json: FocusGestureJSON | null): FocusGesture | null;
}
declare class PrivateZoomGestureDeserializer {
    static fromJSON(json: ZoomGestureJSON | null): ZoomGesture | null;
}

export { PrivateFocusGestureDeserializer, PrivateZoomGestureDeserializer };
