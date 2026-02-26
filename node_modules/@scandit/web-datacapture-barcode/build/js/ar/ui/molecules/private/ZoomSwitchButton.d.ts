import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class ZoomSwitchButton extends ScanditHTMLElement {
    static tag: "scandit-check-switch-zoom-button";
    private icon1x;
    private icon2x;
    private onPressedHandler;
    private onReleasedHandler;
    constructor();
    set zoom(value: string);
    get zoom(): string;
    static create(): ZoomSwitchButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private onPressed;
    private onReleased;
}
declare global {
    interface HTMLElementTagNameMap {
        [ZoomSwitchButton.tag]: ZoomSwitchButton;
    }
}

export { ZoomSwitchButton };
