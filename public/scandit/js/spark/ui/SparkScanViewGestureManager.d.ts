import { Point } from 'scandit-web-datacapture-core';
import { triggerButtonGestureManagerTapEvent, triggerButtonGestureManagerHoldStartEvent, triggerButtonGestureManagerHoldEndEvent } from './constants/events.js';

declare enum SparkScanViewGestureManagerState {
    Idle = "idle",
    Tapped = "tapped",
    Held = "held",
    Swiped = "swiped"
}
declare enum SparkScanViewGestureManagerAxis {
    X = "x",
    Y = "y"
}
declare enum SparkScanViewGestureManagerDirection {
    Up = "up",
    Right = "right",
    Down = "down",
    Left = "left"
}
declare class SparkScanViewGestureManager {
    private static readonly holdTimeoutDuration;
    private element;
    private holdEventsEnabled;
    private state;
    private holdStartTimeout?;
    private pointerDownEvent?;
    private currentAxis?;
    private currentDirection?;
    private pointerDownListener;
    private pointerMoveListener;
    private pointerUpListener;
    private constructor();
    static forElement(element: HTMLElement, holdEventsEnabled: boolean): SparkScanViewGestureManager;
    connect(): void;
    disconnect(): void;
    private getAxisForTranslation;
    private getDirectionForAxisX;
    private getDirectionForAxisY;
    private getDirectionForAxis;
    private getEventForStateAndDirection;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
}
declare global {
    interface HTMLElementEventMap {
        [triggerButtonGestureManagerTapEvent]: CustomEvent;
        [triggerButtonGestureManagerHoldStartEvent]: CustomEvent;
        [triggerButtonGestureManagerHoldEndEvent]: CustomEvent;
        swipeupstart: CustomEvent<Point>;
        swipeup: CustomEvent<Point>;
        swipeupend: CustomEvent<Point>;
        swiperightstart: CustomEvent<Point>;
        swiperight: CustomEvent<Point>;
        swiperightend: CustomEvent<Point>;
        swipedownstart: CustomEvent<Point>;
        swipedown: CustomEvent<Point>;
        swipedownend: CustomEvent<Point>;
        swipeleftstart: CustomEvent<Point>;
        swipeleft: CustomEvent<Point>;
        swipeleftend: CustomEvent<Point>;
    }
}

export { SparkScanViewGestureManager, SparkScanViewGestureManagerAxis, SparkScanViewGestureManagerDirection, SparkScanViewGestureManagerState };
