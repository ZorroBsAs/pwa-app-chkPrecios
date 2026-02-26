/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class TorchOnSvgIcon extends SvgIcon {
    static tag: "scandit-torch-on-icon";
    static create(): TorchOnSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [TorchOnSvgIcon.tag]: TorchOnSvgIcon;
    }
}

export { TorchOnSvgIcon };
