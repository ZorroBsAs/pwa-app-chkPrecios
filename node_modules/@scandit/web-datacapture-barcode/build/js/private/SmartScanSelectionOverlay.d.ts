import { BrushJSON, DataCaptureOverlay, DataCaptureMode, Brush } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';

type SmartScanSelectionOverlayType = "smartScanSelection" | "smartScanSelectionForSparkScan";
interface SmartScanSelectionOverlayJSON {
    type: SmartScanSelectionOverlayType;
    brush?: BrushJSON;
    errorBrush?: BrushJSON;
}
/**
 * SmartScanSelection overlay that adapts to different capture modes.
 *
 * This class supports multiple overlay types based on the capture mode, in order to work around a C++ issue.
 * Both BarcodeCapture and SparkScan support the SmartScanSelection overlay.
 * However, C++ currently uses BarcodeCaptureDeserializer to deserialize SparkScan.
 * When the deserializer encounters a SmartScanSelection overlay, it assumes the context has a BarcodeCapture mode attached.
 * If it finds SparkScan instead, deserialization fails.
 *
 * To work around this, we use mode-specific type identifiers that tell the deserializer which mode to expect.
 */
declare class SmartScanSelectionOverlay implements DataCaptureOverlay, Serializable<SmartScanSelectionOverlayJSON> {
    private readonly type;
    private brush?;
    private errorBrush?;
    private constructor();
    static forMode(mode: DataCaptureMode): SmartScanSelectionOverlay;
    setBrush(brush: Brush): void;
    setErrorBrush(brush: Brush): void;
    toJSONObject(): SmartScanSelectionOverlayJSON;
}

export { SmartScanSelectionOverlay, type SmartScanSelectionOverlayJSON, type SmartScanSelectionOverlayType };
