/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class TorchOffSvgIcon extends SvgIcon {
    static tag: "scandit-torch-off-icon";
    static create(): TorchOffSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [TorchOffSvgIcon.tag]: TorchOffSvgIcon;
    }
}

export { TorchOffSvgIcon };
