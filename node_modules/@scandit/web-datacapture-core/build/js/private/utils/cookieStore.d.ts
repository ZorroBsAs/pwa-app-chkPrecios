/// <reference types="emscripten" />
/**
 * Copyright (C) 2024 Scandit AG. All rights reserved.
 *
 * Cookie Store utility
 * This module provides access to the native CookieStore API when available,
 * with a fallback to a polyfill loaded via polyfillLoader.
 * Respects https://developer.mozilla.org/en-US/docs/Web/API/CookieStore
 */
/**
 * Get the cookie store instance
 * Uses the native CookieStore API if available (installed by the browser or polyfill loader)
 * @throws Error if CookieStore API is not available. Make sure to call loadPolyfills() before using cookie operations.
 * @returns The CookieStore instance
 */
declare function getCookieStore(): CookieStore;

export { getCookieStore };
