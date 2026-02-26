/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class CameraFOVUltrawideSvgIcon extends SvgIcon {
    static tag: "scandit-camera-fov-ultrawide-icon";
    static create(): CameraFOVUltrawideSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [CameraFOVUltrawideSvgIcon.tag]: CameraFOVUltrawideSvgIcon;
    }
}

export { CameraFOVUltrawideSvgIcon };
