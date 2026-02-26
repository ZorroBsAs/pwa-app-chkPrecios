import { Color } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

type Properties = "size" | "variant" | "pulse";
declare class Dot extends ScanditHTMLElement {
    static tag: "scandit-find-dot";
    private static readonly observedAttributes;
    constructor();
    set size(size: number);
    get size(): number;
    get variant(): string | null;
    set variant(variant: string);
    get pulse(): boolean;
    set pulse(pulse: boolean);
    static create(): Dot;
    static createWithColors(primary: Color, secondary: Color): Dot;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): void;
    setPrimaryColor(color: Color): void;
    setSecondaryColor(color: Color): void;
    render({ propChanged, value }: {
        propChanged: Properties;
        value: string;
    }): void;
    attributeChangedCallback(name: Properties, _oldValue: string, newValue: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [Dot.tag]: Dot;
    }
}

export { Dot };
