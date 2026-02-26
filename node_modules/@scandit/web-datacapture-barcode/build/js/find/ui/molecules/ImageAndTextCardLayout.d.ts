import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare class ImageAndTextCardLayout extends ScanditHTMLElement {
    static tag: "scandit-image-and-text-card-layout";
    constructor();
    set title(text: string);
    set subtitle(text: string);
    static create(): ImageAndTextCardLayout;
    static register(): void;
    private static createStyleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        [ImageAndTextCardLayout.tag]: ImageAndTextCardLayout;
    }
}

export { ImageAndTextCardLayout };
