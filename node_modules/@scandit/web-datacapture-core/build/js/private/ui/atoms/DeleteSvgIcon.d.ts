/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class DeleteSvgIcon extends SvgIcon {
    static tag: "scandit-delete-icon";
    static create(): DeleteSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [DeleteSvgIcon.tag]: DeleteSvgIcon;
    }
}

export { DeleteSvgIcon };
