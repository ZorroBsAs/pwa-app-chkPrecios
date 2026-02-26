import { ModuleLoader } from 'scandit-web-datacapture-core';

interface BarcodeCaptureLoaderOptions {
    highEndBlurryRecognition?: boolean;
}
declare function barcodeCaptureLoader(options?: BarcodeCaptureLoaderOptions): ModuleLoader;

export { type BarcodeCaptureLoaderOptions, barcodeCaptureLoader };
