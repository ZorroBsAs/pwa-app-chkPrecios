import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class CameraSwitchButton extends ScanditHTMLElement {
    static tag: "scandit-check-switch-camera-button";
    private icon;
    private onPressedHandler;
    private onReleasedHandler;
    constructor();
    static create(): CameraSwitchButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private onPressed;
    private onReleased;
}
declare global {
    interface HTMLElementTagNameMap {
        [CameraSwitchButton.tag]: CameraSwitchButton;
    }
}

export { CameraSwitchButton };
