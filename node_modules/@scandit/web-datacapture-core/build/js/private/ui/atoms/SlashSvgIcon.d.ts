/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class SlashSvgIcon extends SvgIcon {
    static tag: "scandit-slash-icon";
    static create(): SlashSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [SlashSvgIcon.tag]: SlashSvgIcon;
    }
}

export { SlashSvgIcon };
