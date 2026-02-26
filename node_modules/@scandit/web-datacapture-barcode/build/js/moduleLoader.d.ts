import { ModuleLoader } from '@scandit/web-datacapture-core';

interface BarcodeCaptureLoaderOptions {
    highEndBlurryRecognition?: boolean;
    libraryLocation?: string;
}
declare function barcodeCaptureLoader(options?: BarcodeCaptureLoaderOptions): ModuleLoader;

export { type BarcodeCaptureLoaderOptions, barcodeCaptureLoader };
