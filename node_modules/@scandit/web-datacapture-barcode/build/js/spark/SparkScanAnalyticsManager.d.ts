import { DataCaptureContext, TorchState, CameraPosition } from '@scandit/web-datacapture-core';
import { SparkScanScanningMode } from './SparkScanScanningMode.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import './SparkScanPreviewBehavior.js';
import './SparkScanScanningBehavior.js';

declare enum SparkScanViewSessionStopReason {
    User = "user",
    Timeout = "timeout"
}
declare class SparkScanAnalyticsManager {
    private context;
    private constructor();
    static forContext(context: DataCaptureContext): SparkScanAnalyticsManager;
    startSession(options: {
        torchState: TorchState;
        scanningMode: SparkScanScanningMode;
        soundEnabled: boolean;
        hapticEnabled: boolean;
        cameraPosition: CameraPosition;
    }): void;
    setTorchState(torchState: TorchState | null): void;
    setScanningMode(scanningMode: SparkScanScanningMode | null): void;
    setSoundEnabled(soundEnabled: boolean | null): void;
    setHapticEnabled(hapticEnabled: boolean | null): void;
    setSessionStopReason(sessionStopReason: SparkScanViewSessionStopReason | null): void;
    setCameraPosition(cameraPosition: CameraPosition | null): void;
    private setProperty;
}

export { SparkScanAnalyticsManager, SparkScanViewSessionStopReason };
