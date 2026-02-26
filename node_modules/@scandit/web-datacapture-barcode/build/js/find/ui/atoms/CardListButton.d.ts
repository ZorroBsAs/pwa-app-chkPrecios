import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class CardListButton extends ScanditHTMLElement {
    static tag: "scandit-find-card-list-button";
    constructor();
    connectedCallback(): Promise<void>;
    static create(): CardListButton;
    static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [CardListButton.tag]: CardListButton;
    }
}

export { CardListButton };
