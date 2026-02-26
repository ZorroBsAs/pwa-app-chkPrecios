import { Feedback } from '@scandit/web-datacapture-core';

declare class BarcodeFindFeedback {
    private _itemListUpdated;
    private _found;
    private readonly soundEnabled;
    private readonly hapticEnabled;
    private constructor();
    get itemListUpdated(): Feedback;
    set itemListUpdated(value: Feedback);
    get found(): Feedback;
    set found(value: Feedback);
    static createDefaultFeedback(): BarcodeFindFeedback;
    private static createWithOptions;
}

export { BarcodeFindFeedback };
