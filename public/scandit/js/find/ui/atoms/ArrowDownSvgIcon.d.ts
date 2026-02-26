import { SvgIcon } from 'scandit-web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';

declare class ArrowDownSvgIcon extends SvgIcon {
    static tag: "scandit-arrow-down-icon";
    static create(): ArrowDownSvgIcon;
    static register(): void;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [ArrowDownSvgIcon.tag]: ArrowDownSvgIcon;
    }
}

export { ArrowDownSvgIcon };
