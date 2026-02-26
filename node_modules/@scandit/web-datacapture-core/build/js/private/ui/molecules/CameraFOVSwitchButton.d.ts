/// <reference types="emscripten" />
import { GestureRecognizerListener } from '../../GestureRecognizer/GestureRecognizer.js';
import { ScanditHTMLElement } from '../../utils/ScanditHTMLElement.js';
import '../../EventManager.js';
import '../../../commons/Point.js';
import '../../Serializable.js';

type CameraFOVMode = "0.5x" | "1.0x";
interface CameraFOVSwitchButtonCustomImages {
    wide: {
        idle: string | null;
        pressed: string | null;
    };
    ultraWide: {
        idle: string | null;
        pressed: string | null;
    };
}
declare class CameraFOVSwitchButton extends ScanditHTMLElement implements GestureRecognizerListener {
    static readonly tag: "scandit-camera-fov-switch-button";
    private _currentMode;
    private _gestureRecognizer;
    private _ariaLabel;
    private _useCustomImages;
    private get button();
    private get wideIcon();
    private get ultraWideIcon();
    constructor();
    static create(): CameraFOVSwitchButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    private setupButtonWithSvgIcons;
    disconnectedCallback(): void;
    /**
     * Set the current camera FOV mode
     */
    set mode(newMode: CameraFOVMode);
    /**
     * Get the current camera FOV mode
     */
    get mode(): CameraFOVMode;
    get ariaLabel(): string;
    set ariaLabel(label: string);
    /**
     * Set whether to use custom images instead of SVG icons
     * this is used mainly for retro-compatibility with 7.x/6.x versions of the SDK
     */
    set useCustomImages(value: boolean);
    /**
     * Set custom image URLs as CSS variables
     * @param customImages Object containing wide and ultraWide images with idle and pressed states
     */
    setCustomImages(customImages: CameraFOVSwitchButtonCustomImages): void;
    private updateIconVisibility;
    onTap(): void;
    onPress(): void;
    onRelease(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [CameraFOVSwitchButton.tag]: CameraFOVSwitchButton;
    }
}

export { type CameraFOVMode, CameraFOVSwitchButton, type CameraFOVSwitchButtonCustomImages };
