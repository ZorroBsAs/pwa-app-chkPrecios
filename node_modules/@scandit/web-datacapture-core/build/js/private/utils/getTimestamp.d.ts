/// <reference types="emscripten" />
/**
 * Returns a high-resolution timestamp in milliseconds (with sub-millisecond precision via fractional part).
 * Uses performance.now() for consistency across frame ID generation throughout the SDK.
 * Provides sufficient precision to distinguish frames captured in quick succession.
 */
declare function getTimestamp(): ReturnType<typeof performance.now>;

export { getTimestamp };
