type ListenerForEvent<EventName extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[EventName]) => void;
declare const collapsedTriggerButtonTapEvent = "collapsedtriggerbuttontap";
declare const expandedTriggerButtonTapEvent = "expandedtriggerbuttontap";
declare const sidebarButtonTapEvent = "sidebarbuttontap";
declare const triggerButtonGestureManageMoveEndEvent = "moveend";
declare const triggerButtonGestureManageMoveEvent = "move";
declare const triggerButtonGestureManageMoveStartEvent = "movestart";
declare const triggerButtonGestureManagerHoldEndEvent = "holdend";
declare const triggerButtonGestureManagerHoldEvent = "hold";
declare const triggerButtonGestureManagerHoldStartEvent = "holdstart";
declare const triggerButtonGestureManagerTapEvent = "tap";
declare const orientationChangeEvent = "orientationchange";
declare const miniPreviewButtonTapEvent = "minipreviewbuttontap";
declare const miniPreviewSwipeUpEvent = "minipreviewswipeup";
declare const miniPreviewSwipeDownEvent = "minipreviewswipedown";

export { type ListenerForEvent, collapsedTriggerButtonTapEvent, expandedTriggerButtonTapEvent, miniPreviewButtonTapEvent, miniPreviewSwipeDownEvent, miniPreviewSwipeUpEvent, orientationChangeEvent, sidebarButtonTapEvent, triggerButtonGestureManageMoveEndEvent, triggerButtonGestureManageMoveEvent, triggerButtonGestureManageMoveStartEvent, triggerButtonGestureManagerHoldEndEvent, triggerButtonGestureManagerHoldEvent, triggerButtonGestureManagerHoldStartEvent, triggerButtonGestureManagerTapEvent };
