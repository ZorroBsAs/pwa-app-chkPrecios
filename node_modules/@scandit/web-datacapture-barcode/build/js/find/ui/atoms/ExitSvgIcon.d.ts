import { SvgIcon } from '@scandit/web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';

declare const tag = "scandit-exit-icon";
declare class ExitSvgIcon extends SvgIcon {
    static readonly tag: typeof tag;
    static create(): ExitSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [tag]: ExitSvgIcon;
    }
}

export { ExitSvgIcon };
