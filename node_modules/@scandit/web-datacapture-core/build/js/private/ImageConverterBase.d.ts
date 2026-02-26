/// <reference types="emscripten" />
import { ImageConverterInstance, ImageBuffer, BitmapWithFormat } from './djinni-types/index.js';

type CanvasType = HTMLCanvasElement | OffscreenCanvas;
type CanvasContextType = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
declare abstract class ImageConverterBase implements ImageConverterInstance {
    protected readonly options: {
        quality: number;
    };
    protected canvas?: CanvasType;
    protected context?: CanvasContextType;
    protected static readonly JPEG_IMAGE_MIME_TYPE = "image/jpeg";
    constructor(options: {
        quality: number;
    });
    /**
     * Shoud return a new canvas for the current runtime. Usually an HTMLCanvasElement or an OffscreenCanvas.
     */
    protected abstract getNewCanvas(width: number, height: number): CanvasType;
    /**
     * Should convert the canvas to a JPEG blob.
     */
    protected abstract canvasToBlob(canvas: CanvasType): Promise<Blob | null>;
    get quality(): number;
    convertToJpeg(imageBuffer: ImageBuffer, orientation: number): Promise<Uint8Array>;
    convertToBitmap(imageBuffer: ImageBuffer): BitmapWithFormat;
    private validateAndExtractImageData;
    private prepareCanvas;
    private processImageData;
    private validateImageData;
    private convertToJpegBytes;
    private ensureCanvas;
    private createImageDataFromBuffer;
    private isYUVFormat;
    private isRGBAFormat;
    private isRGBFormat;
    private isGrayscaleFormat;
    private createImageDataFromRGBAPlanes;
    private createImageDataFromRGBPlanes;
    private createImageDataFromGrayscalePlanes;
    private getPixelFromPlane;
    private applyRotation;
}

export { ImageConverterBase };
