/// <reference types="emscripten" />
import { GestureRecognizerListener } from '../../GestureRecognizer/GestureRecognizer.js';
import { ScanditHTMLElement } from '../../utils/ScanditHTMLElement.js';
import '../../EventManager.js';
import '../../../commons/Point.js';
import '../../Serializable.js';

type CameraSwitchMode = "front" | "back";
interface CameraSwitchButtonCustomImages {
    idle: string | null;
    pressed: string | null;
}
declare class CameraSwitchButton extends ScanditHTMLElement implements GestureRecognizerListener {
    static readonly tag: "scandit-camera-switch-button";
    private _currentMode;
    private _gestureRecognizer;
    private _ariaLabel;
    private _useCustomImages;
    private get button();
    private get frontIcon();
    private get backIcon();
    constructor();
    static create(): CameraSwitchButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    private setupButtonWithSvgIcons;
    disconnectedCallback(): void;
    /**
     * Set the current camera mode
     */
    set mode(newMode: CameraSwitchMode);
    /**
     * Get the current camera mode
     */
    get mode(): CameraSwitchMode;
    get ariaLabel(): string;
    set ariaLabel(label: string);
    /**
     * Set whether to use custom images instead of SVG icons
     */
    set useCustomImages(value: boolean);
    /**
     * Set custom image URLs as CSS variables
     * @param customImages Object containing idle and pressed images
     */
    setCustomImages(customImages: CameraSwitchButtonCustomImages): void;
    private updateIconVisibility;
    onTap(): void;
    onPress(): void;
    onRelease(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [CameraSwitchButton.tag]: CameraSwitchButton;
    }
}

export { CameraSwitchButton, type CameraSwitchButtonCustomImages, type CameraSwitchMode };
