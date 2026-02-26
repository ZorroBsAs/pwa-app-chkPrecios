import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

declare class Card extends ScanditHTMLElement {
    static tag: "scandit-find-card";
    constructor();
    set title(string_: string);
    set subtitle(string_: string);
    static create(): Card;
    static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [Card.tag]: Card;
    }
}

export { Card };
