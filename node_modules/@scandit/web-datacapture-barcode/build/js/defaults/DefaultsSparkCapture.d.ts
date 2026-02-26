declare const defaultSparkCapture: {
    SparkCaptureSettings: {
        codeDuplicateFilter: number;
    };
};
type SparkCaptureDefaults = typeof defaultSparkCapture;

export { type SparkCaptureDefaults, defaultSparkCapture };
