import { SvgIcon } from '@scandit/web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';

declare class ItemFoundSvgIcon extends SvgIcon {
    static tag: "scandit-item-found-icon";
    static create(): ItemFoundSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [ItemFoundSvgIcon.tag]: ItemFoundSvgIcon;
    }
}

export { ItemFoundSvgIcon };
