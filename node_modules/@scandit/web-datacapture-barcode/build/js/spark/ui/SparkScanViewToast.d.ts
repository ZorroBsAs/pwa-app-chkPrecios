import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { sparkScanViewToastTag } from './constants/tags.js';

type SparkScanViewToastType = "error" | "info" | "warning";
declare class SparkScanViewToast extends ScanditHTMLElement {
    private static readonly observedAttributes;
    private timeout?;
    get type(): SparkScanViewToastType;
    set type(type: SparkScanViewToastType);
    get message(): string;
    set message(message: string);
    private get visible();
    private set visible(value);
    static create(): SparkScanViewToast;
    show(type: SparkScanViewToastType, message: string, duration: number): void;
    hide(): void;
    private render;
    private connectedCallback;
    private disconnectedCallback;
    private attributeChangedCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewToastTag]: SparkScanViewToast;
    }
}

export { SparkScanViewToast, type SparkScanViewToastType };
