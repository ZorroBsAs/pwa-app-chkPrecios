/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class CameraFOVWideSvgIcon extends SvgIcon {
    static tag: "scandit-camera-fov-wide-icon";
    static create(): CameraFOVWideSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [CameraFOVWideSvgIcon.tag]: CameraFOVWideSvgIcon;
    }
}

export { CameraFOVWideSvgIcon };
