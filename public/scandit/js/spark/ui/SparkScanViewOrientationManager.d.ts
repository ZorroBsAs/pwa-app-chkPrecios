import { orientationChangeEvent } from './constants/events.js';

declare class SparkScanViewOrientationManager extends EventTarget {
    orientation: OrientationType;
    private landscapeOrientationMediaQuery;
    private screenOrientationChangeListener;
    private landscapeOrientationMediaQueryChangeListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    isScreenOrientationApiSupported(): boolean;
    dispatchOrientationChangeEvent(orientation: OrientationType): void;
    onScreenOrientationChange(): void;
    onLandscapeOrientationMediaQueryChange(event: Event): void;
}
declare global {
    interface HTMLElementEventMap {
        [orientationChangeEvent]: CustomEvent<OrientationType>;
    }
}

export { SparkScanViewOrientationManager };
