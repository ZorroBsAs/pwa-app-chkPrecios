/// <reference types="emscripten" />
import { Orientation } from '../commons/Orientation.js';

declare const orientationChangeEvent = "orientationchange";
interface OrientationEventValue {
    type: OrientationType;
    angle: number;
    value: Orientation;
}
declare class OrientationObserver extends EventTarget {
    orientation: OrientationEventValue;
    private _landscapeOrientationMediaQuery;
    private get landscapeOrientationMediaQuery();
    private screenOrientationChangeListener;
    private landscapeOrientationMediaQueryChangeListener;
    private windowResizeListener;
    private lastWidth;
    private lastHeight;
    private get isIosPwaMode();
    register(): void;
    unregister(): void;
    isScreenOrientationApiSupported(): boolean;
    dispatchOrientationChangeEvent(orientation: OrientationEventValue): void;
    onScreenOrientationChange(): void;
    onLandscapeOrientationMediaQueryChange(event: Event): void;
    private handleWindowResize;
}
type OrientationChangeEvent = CustomEvent<OrientationEventValue>;
declare global {
    interface HTMLElementEventMap {
        [orientationChangeEvent]: OrientationChangeEvent;
    }
}

export { type OrientationChangeEvent, type OrientationEventValue, OrientationObserver, orientationChangeEvent };
