import { Color, Feedback, Brush, ColorJSON, BrushJSON, FeedbackJSON } from '@scandit/web-datacapture-core';

interface SparkScanBarcodeErrorFeedbackJSON {
    type: "error";
    barcodeFeedback: {
        message: string;
        resumeCapturingDelay: number;
        visualFeedbackColor?: ColorJSON;
        brush?: BrushJSON;
        feedback?: FeedbackJSON;
    };
}
interface SparkScanBarcodeSuccessFeedbackJSON {
    type: "success";
    barcodeFeedback: {
        visualFeedbackColor?: ColorJSON;
        brush?: BrushJSON;
        feedback?: FeedbackJSON;
    };
}
type SparkScanBarcodeFeedbackJSON = SparkScanBarcodeErrorFeedbackJSON | SparkScanBarcodeSuccessFeedbackJSON;
declare abstract class SparkScanBarcodeFeedback {
    visualFeedbackColor: Color;
    feedback: Feedback;
    constructor(visualFeedbackColor: Color, feedback: Feedback);
    static defaultSuccessFeedback(): Feedback;
    static defaultErrorFeedback(): Feedback;
    static defaultSuccessBrush(): Brush;
    static defaultErrorBrush(): Brush;
    static success(): SparkScanBarcodeSuccessFeedback;
    abstract toJSONObject(): SparkScanBarcodeFeedbackJSON;
}
declare class SparkScanBarcodeErrorFeedback extends SparkScanBarcodeFeedback {
    message: string;
    resumeCapturingDelay: number;
    visualFeedbackColor: Color;
    brush: Brush;
    feedback: Feedback;
    constructor(message: string, resumeCapturingDelay: number, visualFeedbackColor?: Color, brush?: Brush, feedback?: Feedback);
    toJSONObject(): SparkScanBarcodeFeedbackJSON;
}
declare class SparkScanBarcodeSuccessFeedback extends SparkScanBarcodeFeedback {
    visualFeedbackColor: Color;
    brush: Brush;
    feedback: Feedback;
    constructor(visualFeedbackColor?: Color, brush?: Brush, feedback?: Feedback);
    toJSONObject(): SparkScanBarcodeFeedbackJSON;
}

export { SparkScanBarcodeErrorFeedback, type SparkScanBarcodeErrorFeedbackJSON, SparkScanBarcodeFeedback, type SparkScanBarcodeFeedbackJSON, SparkScanBarcodeSuccessFeedback, type SparkScanBarcodeSuccessFeedbackJSON };
