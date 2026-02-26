import { Brush } from '@scandit/web-datacapture-core';

type BarcodeCaptureOverlayStyle = any;

declare const defaultBarcodeCapture: {
    BarcodeCaptureSettings: {
        codeDuplicateFilter: number;
    };
    BarcodeCaptureOverlay: {
        DefaultBrush: Brush;
        styles: { [key in BarcodeCaptureOverlayStyle]: any; };
    };
    RecommendedCameraSettings: any;
};
type BarcodeCaptureDefaults = typeof defaultBarcodeCapture;

export { type BarcodeCaptureDefaults, defaultBarcodeCapture };
