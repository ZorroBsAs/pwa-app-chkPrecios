/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class ScanSvgIcon extends SvgIcon {
    static tag: "scandit-scan-icon";
    static create(): ScanSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [ScanSvgIcon.tag]: ScanSvgIcon;
    }
}

export { ScanSvgIcon };
