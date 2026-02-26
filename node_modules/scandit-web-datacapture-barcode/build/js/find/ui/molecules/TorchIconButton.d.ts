import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

declare class TorchIconButton extends ScanditHTMLElement {
    static tag: "scandit-find-torch-button";
    static observedAttributes: string[];
    private onIcon;
    private offIcon;
    constructor();
    get state(): "on" | "off";
    set state(value: "on" | "off");
    static create(): TorchIconButton;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    render(newState: "on" | "off"): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [TorchIconButton.tag]: TorchIconButton;
    }
}

export { TorchIconButton };
