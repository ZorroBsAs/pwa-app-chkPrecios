import { Point } from '@scandit/web-datacapture-core';
import { Timeout } from '@scandit/web-datacapture-core/build/js/private/utils/timeout.js';

declare class DragControllerEvent extends Event {
    point: Point;
    constructor(type: "drag" | "dragend", point: Point);
}
declare class DragController {
    translate: Point;
    offset?: Point;
    draggable: boolean;
    pointerDownEvent?: PointerEvent;
    element: HTMLElement;
    pointerDownListener: EventListener;
    pointerMoveListener: EventListener;
    pointerUpListener: EventListener;
    touchStartListener: EventListener;
    resizeListener: EventListener;
    repositioningTimeout: Timeout;
    margin: Point;
    boundaryElement: HTMLElement;
    useViewportBounds: boolean;
    constructor(element: HTMLElement, boundaryElement?: HTMLElement | null);
    get translateWithMargin(): Point;
    connect(): void;
    disconnect(): void;
    getBoundedTranslate(): Point | undefined;
    translateTo(point: Point, animated: boolean, isUserInitiated?: boolean): Promise<void>;
    render(): void;
    repositionIfOutOfBounds(): Promise<void>;
    onPointerDown(event: Event): void;
    onPointerMove(event: Event): void;
    onPointerUp(event: Event): Promise<void>;
    onTouchStart(event: Event): void;
    onResize(): void;
}

export { DragController, DragControllerEvent };
