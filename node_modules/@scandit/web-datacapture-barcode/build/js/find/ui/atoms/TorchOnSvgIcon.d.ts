import { SvgIcon } from '@scandit/web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';

declare class TorchOnSvgIcon extends SvgIcon {
    static tag: "scandit-torch-on-icon";
    static create(): TorchOnSvgIcon;
    static register(): void;
    protected render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        [TorchOnSvgIcon.tag]: TorchOnSvgIcon;
    }
}

export { TorchOnSvgIcon };
