import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class CheckLayout extends ScanditHTMLElement {
    static tag: "scandit-check-layout";
    private readonly absoluteContainer;
    constructor();
    static create(): CheckLayout;
    static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [CheckLayout.tag]: CheckLayout;
    }
}

export { CheckLayout };
