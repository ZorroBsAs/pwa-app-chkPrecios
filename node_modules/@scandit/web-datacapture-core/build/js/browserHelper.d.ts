/// <reference types="emscripten" />
import { BrowserCompatibility } from './browserCompatibility.js';

/**
 * PWA display modes as defined in the W3C PWA Manifest specification.
 * See https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display
 */
declare enum DisplayMode {
    Standalone = "standalone",
    Fullscreen = "fullscreen",
    MinimalUI = "minimal-ui",
    Browser = "browser"
}
declare namespace BrowserHelper {
    /**
     * @hidden
     */
    interface Browser {
        name?: string;
        version?: string;
    }
    /**
     * @hidden
     */
    interface CPU {
        architecture?: string;
    }
    /**
     * @hidden
     */
    interface Device {
        model?: string;
        vendor?: string;
        type?: string;
    }
    /**
     * @hidden
     */
    interface Engine {
        name?: string;
        version?: string;
    }
    /**
     * @hidden
     */
    interface OS {
        name?: string;
        version?: string;
    }
    interface UserAgentInfo {
        getBrowser: () => Browser;
        getOS: () => OS;
        getEngine: () => Engine;
        getDevice: () => Device;
        getCPU: () => CPU;
        getUA: () => string;
        setUA: (uastring: string) => void;
    }
    /**
     * @hidden
     */
    export function getUserAgentInfo(): UserAgentInfo;
    /**
     * @hidden
     *
     * @returns Whether the device is a desktop/laptop for sure.
     */
    export function isDesktopDevice(): boolean;
    export function isIPhone(): boolean;
    /**
     * @hidden
     *
     * @returns Whether the device is an iPad.
     */
    export function isIPad(): boolean;
    /**
     * @hidden
     *
     * @returns Whether the device is a MacBook.
     */
    export function isMacBook(): boolean;
    /**
     * @hidden
     *
     * @returns Whether the device is an Apple device (iPhone, iPad, or Mac).
     */
    export function isAppleDevice(): boolean;
    /**
     * @hidden
     *
     * @returns Whether the device is a iOS device running a recent-enough OS version allowing any browser to access all
     * available cameras (including the UltraWide one).
     */
    export function isIOSDeviceWithExtendedCameraAccess(): boolean;
    export function getCanvas(): HTMLCanvasElement | null;
    /**
     * @hidden
     *
     */
    export function hasSIMDSupport(): Promise<boolean>;
    /**
     * @hidden
     *
     */
    export function hasThreadsSupport(): Promise<boolean>;
    /**
     * @returns The built [[BrowserCompatibility]] object representing the current OS/Browser's support for features.
     */
    export function checkBrowserCompatibility(): BrowserCompatibility;
    export function checkMultithreadingSupport(): Promise<boolean>;
    /**
     * @hidden
     *
     * Get a device id for the current browser.
     *
     * When available it's retrieved from localStorage, as fallback from cookies (used by older library versions),
     * when not available it's randomly generated and stored in localStorage to be retrieved by later calls and returned.
     *
     * @returns The device id for the current browser.
     */
    export function getDeviceId(): Promise<string>;
    /**
     * @hidden
     *
     * Check if a given object is a valid HTMLElement
     *
     * @param object The object to check.
     * @returns Whether the given object is a valid HTMLElement.
     */
    export function isValidHTMLElement(object: unknown): boolean;
    /**
     * Check if the iOS version is at least 14.6.
     * @returns Whether iOS version is at least 14.6.
     * @hidden
     */
    export function isSupportedIOSVersion(): boolean;
    /**
     * Check if the browser is Safari.
     * @returns Whether the browser is safari.
     * @hidden
     */
    export function isSafari(): boolean;
    /**
     * Check if the document is served by an iOS web view.
     * @returns Whether the document is served by an iOS web view.
     * @hidden
     */
    export function isIosWebView(): boolean;
    /**
     * Check if the document is served by an Android web view.
     * @returns Whether the document is served by an Android web view.
     * @hidden
     */
    export function isAndroidWebView(): Promise<boolean>;
    /**
     * Check if the OS is Windows.
     * @returns Whether the OS is Windows.
     * @hidden
     */
    export function isWindows(): boolean;
    /**
     * Check if the browser is Firefox.
     * @returns Whether the browser is Firefox.
     * @hidden
     */
    export function isFirefox(): boolean;
    /**
     * Get the vibration method supported by the current browser and device, if any.
     * @returns The vibration method supported by the current browser and device, if any.
     * @hidden
     */
    export function getSupportedVibrationMethod(): typeof navigator.vibrate | undefined;
    /**
     * Check if vibration is supported by the current browser and device.
     * @returns Whether vibration is supported by the current browser and device.
     * @hidden
     */
    export function isVibrationAvailable(): boolean;
    /**
     * Check if the OS is iOS.
     * @returns Whether the OS is iOS.
     * @hidden
     */
    export function isIOS(): boolean;
    /**
     * Check if the browser supports the Animation API.
     * @returns Whether the browser supports the Animation API.
     * @hidden
     */
    export function isAnimationApiSupported(): boolean;
    /**
     * Check if the browser supports the VirtualKeyboard API.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard
     * @returns Whether the browser supports the VirtualKeyboard API.
     * @hidden
     */
    export function hasVirtualKeyboardSupport(): boolean;
    /**
     * Check if the app is running in Progressive Web App (PWA) mode with the specified display mode.
     * See https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display
     *
     * This method first checks the standard W3C media query (display-mode: <displayMode>) to determine PWA mode.
     * For the "standalone" mode on iOS devices, it also falls back to the deprecated navigator.standalone property
     * for compatibility with older iOS versions. The media query check is preferred and takes precedence.
     *
     * @param displayMode The display mode to check for.
     * @returns Whether the app is running in PWA mode with the specified display mode.
     */
    export function isPwaDisplayMode(displayMode: DisplayMode): boolean;
    export function isFixedMemoryRequired(): boolean;
    export {  };
}

export { BrowserHelper, DisplayMode };
