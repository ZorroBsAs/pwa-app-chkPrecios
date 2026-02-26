import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class ProgressBarWithLabel extends ScanditHTMLElement {
    static tag: "scandit-find-progress-bar-with-label";
    static observedAttributes: string[];
    constructor();
    get value(): number;
    set value(value: number);
    get max(): number;
    set max(n: number);
    private get progressBar();
    private get label();
    static create(): ProgressBarWithLabel;
    static register(): void;
    private static createStyleElement;
    protected connectedCallback(): void;
    protected attributeChangedCallback(): void;
    private render;
}
declare global {
    interface HTMLElementTagNameMap {
        [ProgressBarWithLabel.tag]: ProgressBarWithLabel;
    }
}

export { ProgressBarWithLabel };
