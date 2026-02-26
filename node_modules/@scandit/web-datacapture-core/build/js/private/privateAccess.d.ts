/// <reference types="emscripten" />
/**
 * This symbol allows to access private properties. See an example in Camera.ts and CameraPool.ts to see how it's
 * used (or ask AI).
 */
declare const INTERNAL_ACCESS: unique symbol;

export { INTERNAL_ACCESS };
