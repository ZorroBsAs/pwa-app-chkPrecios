/// <reference types="emscripten" />
declare const defaultFeedback: {
    defaultVibrationPattern: number[];
};
type FeedbackDefaults = typeof defaultFeedback;

export { type FeedbackDefaults, defaultFeedback };
