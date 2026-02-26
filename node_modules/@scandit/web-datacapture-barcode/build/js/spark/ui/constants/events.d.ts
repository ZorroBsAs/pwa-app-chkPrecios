type ListenerForEvent<EventName extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[EventName]) => void;
declare const toolbarButtonTapEvent = "toolbarbuttontap";
declare const toolbarVisibilityChangeEvent = "toolbarvisibilitychange";
declare const triggerButtonHoldEndEvent = "holdend";
declare const triggerButtonHoldStartEvent = "holdstart";
declare const triggerButtonTapEvent = "tap";
declare const orientationChangeEvent = "orientationchange";
declare const miniPreviewButtonTapEvent = "minipreviewbuttontap";
declare const miniPreviewVisibilityChangeEvent = "minipreviewvisibilitychange";
declare const longPressStartEvent = "longpressstart";
declare const longPressEndEvent = "longpressend";

export { type ListenerForEvent, longPressEndEvent, longPressStartEvent, miniPreviewButtonTapEvent, miniPreviewVisibilityChangeEvent, orientationChangeEvent, toolbarButtonTapEvent, toolbarVisibilityChangeEvent, triggerButtonHoldEndEvent, triggerButtonHoldStartEvent, triggerButtonTapEvent };
