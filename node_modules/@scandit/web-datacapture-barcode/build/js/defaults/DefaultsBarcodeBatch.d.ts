import { Brush } from '@scandit/web-datacapture-core';

type BarcodeBatchBasicOverlayStyle = "frame" | "dot" | "legacy";

declare const defaultBarcodeBatch: {
    BarcodeBatchBasicOverlay: {
        defaultStyle: string;
        DefaultBrush: Brush;
        styles: { [key in BarcodeBatchBasicOverlayStyle]: {
            DefaultBrush: Brush;
        }; };
    };
    RecommendedCameraSettings: any;
};
type BarcodeBatchDefaults = typeof defaultBarcodeBatch;

export { type BarcodeBatchDefaults, defaultBarcodeBatch };
