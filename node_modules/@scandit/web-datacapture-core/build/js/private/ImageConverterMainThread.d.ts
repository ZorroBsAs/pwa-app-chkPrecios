/// <reference types="emscripten" />
import { ImageConverterBase } from './ImageConverterBase.js';
import './djinni-types/index.js';

/**
 * Converter safe to be used in the main thread.
 */
declare class ImageConverterMainThread extends ImageConverterBase {
    protected getNewCanvas(width: number, height: number): HTMLCanvasElement;
    protected canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null>;
}

export { ImageConverterMainThread };
