/// <reference types="emscripten" />
import { ImageConverterBase } from '../private/ImageConverterBase.js';
import '../private/djinni-types/index.js';

/**
 * A converter safe to be used in the worker thread.
 */
declare class ImageConverterWorker extends ImageConverterBase {
    protected getNewCanvas(width: number, height: number): OffscreenCanvas;
    protected canvasToBlob(canvas: OffscreenCanvas): Promise<Blob | null>;
}

export { ImageConverterWorker };
