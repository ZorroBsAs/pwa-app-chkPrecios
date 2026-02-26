/// <reference types="emscripten" />
import { T as TorchState } from '../../../Camera-DhGjpcjv.js';
import { GestureRecognizerListener } from '../../GestureRecognizer/GestureRecognizer.js';
import { ScanditHTMLElement } from '../../utils/ScanditHTMLElement.js';
import '../../../commons/Rect.js';
import '../../Serializable.js';
import '../../../commons/Point.js';
import '../../../commons/Size.js';
import '../../privateAccess.js';
import '../../EventManager.js';

interface TorchSwitchIconButtonCustomImages {
    on: {
        idle: string | null;
        pressed: string | null;
    };
    off: {
        idle: string | null;
        pressed: string | null;
    };
}
declare class TorchSwitchIconButton extends ScanditHTMLElement implements GestureRecognizerListener {
    static readonly tag: "scandit-torch-switch-icon-button";
    static readonly observedAttributes: string[];
    private _size;
    private _shadow;
    private _gestureRecognizer;
    private _ariaLabel;
    private _useCustomImages;
    private get button();
    private get onIcon();
    private get offIcon();
    constructor();
    set size(size: number);
    get size(): number;
    set shadow(shadow: boolean);
    get shadow(): boolean;
    get state(): TorchState;
    set state(value: TorchState);
    get ariaLabel(): string;
    set ariaLabel(label: string);
    /**
     * Set whether to use custom images instead of SVG icons
     */
    set useCustomImages(value: boolean);
    /**
     * Set custom image URLs as CSS variables
     * @param customImages Object containing on and off images with idle and pressed states
     */
    setCustomImages(customImages: TorchSwitchIconButtonCustomImages): void;
    static create(): TorchSwitchIconButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
    render(newState: TorchState): void;
    disconnectedCallback(): void;
    onTap(): void;
    onPress(): void;
    onRelease(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [TorchSwitchIconButton.tag]: TorchSwitchIconButton;
    }
}

export { TorchSwitchIconButton, type TorchSwitchIconButtonCustomImages };
