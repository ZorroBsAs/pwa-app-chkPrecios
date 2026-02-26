import { MeasureUnit, Brush, TorchState, CameraPosition } from '@scandit/web-datacapture-core';
import { SparkScanOverlayStyle } from '../spark/SparkScanOverlayStyle.js';
import { SparkScanMiniPreviewSize } from '../spark/ui/SparkScanMiniPreviewSize.js';

declare const defaultSparkScan: {
    SparkScanFeedback: {
        errorVibrationPattern: number[];
    };
    SparkScanSettings: {
        codeDuplicateFilter: number;
        locationSelection: {
            radius: number;
            unit: MeasureUnit;
        };
        targetModeLocationSelection: {
            radius: number;
            unit: MeasureUnit;
        };
    };
    SparkScanOverlay: {
        DefaultBrush: Brush;
        defaultStyle: SparkScanOverlayStyle;
    };
    CameraSettings: {
        settings: any;
    };
    SparkScanViewSettings: {
        defaultTorchState: TorchState;
        defaultMiniPreviewSize: SparkScanMiniPreviewSize;
        defaultCameraPosition: CameraPosition;
        hapticEnabled: boolean;
        holdToScanEnabled: boolean;
        soundEnabled: boolean;
        triggerButtonCollapseTimeout: number;
        visualFeedbackEnabled: boolean;
        inactiveStateTimeout: number;
        zoomFactorOut: number;
        zoomFactorIn: number;
    };
};
type SparkScanDefaults = typeof defaultSparkScan;

export { type SparkScanDefaults, defaultSparkScan };
