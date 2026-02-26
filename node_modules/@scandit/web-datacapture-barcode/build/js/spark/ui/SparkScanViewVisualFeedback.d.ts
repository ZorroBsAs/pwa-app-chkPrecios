import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { sparkScanViewVisualFeedbackTag } from './constants/tags.js';

declare class SparkScanViewVisualFeedback extends ScanditHTMLElement {
    private styleElement;
    get success(): boolean;
    set success(success: boolean);
    get error(): boolean;
    set error(error: boolean);
    static create(): SparkScanViewVisualFeedback;
    fadeIn(opacity: string, duration: number): Promise<void>;
    fadeOut(opacity: string, duration: number): Promise<void>;
    emitSuccessFeedback(): Promise<void>;
    emitErrorFeedback(): Promise<void>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewVisualFeedbackTag]: SparkScanViewVisualFeedback;
    }
}

export { SparkScanViewVisualFeedback };
