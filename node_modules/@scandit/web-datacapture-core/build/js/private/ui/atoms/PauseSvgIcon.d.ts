/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class PauseSvgIcon extends SvgIcon {
    static tag: "scandit-pause-icon";
    static create(): PauseSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [PauseSvgIcon.tag]: PauseSvgIcon;
    }
}

export { PauseSvgIcon };
