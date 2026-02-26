/// <reference types="emscripten" />
import EventManager from '../EventManager.js';
import { Point } from '../../commons/Point.js';
import '../Serializable.js';

interface GestureRecognizerListener {
    onTap?(point: Point, event: Event): void;
    onHover?(isHover: boolean): void;
    onPress?(): void;
    onRelease?(): void;
}
/**
 * GestureRecognizer provides unified gesture and button event handling across all input types.
 * Combines tap gesture detection with button-specific interactions (click, hover, pressed state).
 * Provides cross-browser compatibility through PointerEventsDetector fallbacks.
 */
declare class GestureRecognizer extends EventManager<GestureRecognizerListener> {
    protected element: HTMLElement;
    private isHover;
    private readonly _onTouchStart;
    private readonly _onTouchEnd;
    private readonly _onPointerDown;
    private readonly _onPointerUp;
    private readonly _onPointerEnter;
    private readonly _onPointerLeave;
    constructor(element: HTMLElement);
    removeAllListeners(): void;
    private setupEventListeners;
    private onPointerDown;
    private onPointerUp;
    private onTouchStart;
    private onTouchEnd;
    private notifyPress;
    private notifyRelease;
    private onPointerEnter;
    private onPointerLeave;
    private notifyHover;
    private pointRelativeToElement;
    private onTap;
}

export { GestureRecognizer, type GestureRecognizerListener };
