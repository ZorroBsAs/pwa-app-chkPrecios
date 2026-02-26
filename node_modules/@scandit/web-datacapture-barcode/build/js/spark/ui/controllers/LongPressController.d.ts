import { longPressStartEvent, longPressEndEvent } from '../constants/events.js';

type LongPressControllerEventType = typeof longPressStartEvent | typeof longPressEndEvent;
declare class LongPressControllerEvent extends Event {
    constructor(type: LongPressControllerEventType);
}
declare class LongPressController {
    elementsAllowedToTriggerLongPressEvents: Set<EventTarget>;
    private element;
    private isLongPressing;
    private longPressTimeout;
    private pointerDownEvent?;
    private pointerDownListener;
    private pointerMoveListener;
    private pointerUpListener;
    constructor(element: HTMLElement);
    connect(): void;
    disconnect(): void;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private onLongPressTimeoutFinished;
}
declare global {
    interface HTMLElementEventMap {
        [longPressStartEvent]: Event;
        [longPressEndEvent]: Event;
    }
}

export { LongPressController, LongPressControllerEvent, type LongPressControllerEventType };
