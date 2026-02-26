/// <reference types="emscripten" />
/**
 * Copyright (C) 2024 Scandit AG. All rights reserved.
 *
 * CookieStore API Polyfill
 * This module implements a simple polyfill for the CookieStore API using document.cookie
 */
/** biome-ignore-all lint/suspicious/noDocumentCookie: This is a polyfill for the CookieStore API and we need to use document.cookie */
/**
 * Cookie object returned by the CookieStore API
 */
interface CookieListItem {
    name: string;
    value: string;
}
/**
 * Options for setting a cookie
 */
interface CookieInit {
    name: string;
    value: string;
    domain?: string;
    path?: string;
    expires?: number;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
    [key: string]: unknown;
}
/**
 * Options for getting/deleting a cookie
 */
interface CookieStoreGetOptions {
    name?: string;
    path?: string;
    domain?: string;
}
/**
 * Install the CookieStore polyfill
 * This function sets up the global cookieStore object if it doesn't exist
 */
declare function installCookieStorePolyfill(): void;

export { type CookieInit, type CookieListItem, type CookieStoreGetOptions, installCookieStorePolyfill };
