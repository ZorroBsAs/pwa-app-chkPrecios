import { Vibration, Feedback, Sound } from '@scandit/web-datacapture-core';
import { SparkScanBarcodeFeedback } from '../SparkScanBarcodeFeedback.js';

declare class SparkScanViewFeedbackManager {
    soundEnabled: boolean;
    hapticEnabled: boolean;
    tapVibration: Vibration | null;
    tapFeedback: Feedback;
    successSound: Sound | null;
    successVibration: Vibration | null;
    successFeedback: Feedback;
    errorSound: Sound | null;
    noFeedback: Feedback;
    errorVibration: Vibration | null;
    errorFeedback: Feedback;
    private constructor();
    static withDefaults(soundEnabled: boolean, hapticEnabled: boolean): SparkScanViewFeedbackManager;
    setSoundEnabled(soundEnabled: boolean): void;
    setHapticEnabled(hapticEnabled: boolean): void;
    emitTapFeedback(): void;
    emitBarcodeFeedback(barcodeFeedback?: SparkScanBarcodeFeedback): void;
}

export { SparkScanViewFeedbackManager };
