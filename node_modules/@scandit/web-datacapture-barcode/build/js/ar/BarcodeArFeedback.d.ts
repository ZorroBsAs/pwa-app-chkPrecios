import { Feedback } from '@scandit/web-datacapture-core';

declare class BarcodeArFeedback {
    scanned: Feedback;
    tapped: Feedback;
    private constructor();
    protected static createWithOptions(soundEnabled: boolean, hapticsEnabled: boolean): Promise<BarcodeArFeedback>;
    static createDefaultBarcodeArFeedback(): Promise<BarcodeArFeedback>;
}

export { BarcodeArFeedback };
