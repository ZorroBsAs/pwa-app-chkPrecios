/// <reference types="emscripten" />
import { SvgIcon } from './SvgIcon.js';
import '../../utils/ScanditHTMLElement.js';

declare class QuestionMarkSvgIcon extends SvgIcon {
    static tag: "scandit-question-mark-icon";
    static register(): void;
    static create(): QuestionMarkSvgIcon;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [QuestionMarkSvgIcon.tag]: QuestionMarkSvgIcon;
    }
}

export { QuestionMarkSvgIcon };
