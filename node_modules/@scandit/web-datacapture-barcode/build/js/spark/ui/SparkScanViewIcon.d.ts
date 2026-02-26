import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { inlineStyleAttribute } from './constants/attributes.js';
import { sparkScanViewIconTag } from './constants/tags.js';

interface SparkScanViewIconMap {
    scanner(): string;
    expand(): string;
    shrink(): string;
    aimer(): string;
    torchOff(): string;
    torchOn(): string;
    handle(): string;
    continuous(): string;
    close(): string;
    find(): string;
    camera(): string;
    label(): string;
}
declare class SparkScanViewIcon extends ScanditHTMLElement {
    private static readonly observedAttributes;
    private readonly icons;
    get icon(): keyof SparkScanViewIconMap;
    set icon(icon: keyof SparkScanViewIconMap);
    get fill(): string;
    set fill(fill: string);
    get size(): number;
    set size(size: number);
    get [inlineStyleAttribute](): string | null;
    set [inlineStyleAttribute](inlineStyle: string | null);
    static create(): SparkScanViewIcon;
    private render;
    private aspectRatioForViewbox;
    private heightForViewbox;
    private connectedCallback;
    private attributeChangedCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewIconTag]: SparkScanViewIcon;
    }
}

export { SparkScanViewIcon };
