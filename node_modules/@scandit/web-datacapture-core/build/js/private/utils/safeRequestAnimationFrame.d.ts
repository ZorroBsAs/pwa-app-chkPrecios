/// <reference types="emscripten" />
/**
 * Safely schedules a callback to be called after layout calculations are complete.
 * Uses requestAnimationFrame if available, otherwise falls back to setTimeout.
 *
 * This ensures that DOM measurements (like getBoundingClientRect()) return accurate values,
 * with graceful fallback for devices where requestAnimationFrame is unavailable or unreliable.
 *
 * @param callback - Function to call after layout is complete
 * @returns Handle that can be used with cancelSafeRequestAnimationFrame to cancel
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/setTimeout
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame
 */
declare function safeRequestAnimationFrame(callback: FrameRequestCallback): number;
/**
 * Cancels a previously scheduled safeRequestAnimationFrame callback.
 *
 * @param id - The handle returned by safeRequestAnimationFrame
 */
declare function cancelSafeRequestAnimationFrame(id: number): void;

export { cancelSafeRequestAnimationFrame, safeRequestAnimationFrame };
