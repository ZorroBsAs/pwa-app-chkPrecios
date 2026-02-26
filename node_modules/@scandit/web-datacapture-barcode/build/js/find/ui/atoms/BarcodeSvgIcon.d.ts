import { SvgIcon } from '@scandit/web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';

declare class BarcodeSvgIcon extends SvgIcon {
    static tag: "scandit-barcode-find-icon";
    static create(): BarcodeSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeSvgIcon.tag]: BarcodeSvgIcon;
    }
}

export { BarcodeSvgIcon };
