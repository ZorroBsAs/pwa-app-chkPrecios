/// <reference types="emscripten" />
declare enum Channel {
    Y = 0,
    U = 1,
    V = 2,
    R = 3,
    G = 4,
    B = 5,
    A = 6,
    D = 7
}
interface ImagePlane {
    channel: Channel;
    subsamplingX: number;
    subsamplingY: number;
    rowStride: number;
    pixelStride: number;
    data: Uint8Array;
}
interface Point {
    x: number;
    y: number;
}
interface Size2 {
    width: number;
    height: number;
}
interface Rect {
    origin: Point;
    size: Size2;
}
interface ImageBuffer {
    deepCopy(): ImageBuffer;
    getWidth(): number;
    getHeight(): number;
    getPlanes(): Array<ImagePlane>;
    toBitmap(): Uint8Array;
    getBitmapRepresentationFromYUV(imageCrop: Rect): Uint8Array;
}
declare enum BitmapByteOrder {
    RGBA = 0,// Red, Green, Blue, Alpha
    BGRA = 1
}
interface BitmapWithFormat {
    data: Uint8Array;
    byteOrder: BitmapByteOrder;
}
interface ImageConverterInstance {
    convertToJpeg(imageBuffer: ImageBuffer, orientation: number): Promise<Uint8Array>;
    convertToBitmap(imageBuffer: ImageBuffer): BitmapWithFormat;
}
type ImageConverter = {};
interface ImageConverter_statics {
    setInstance(instance: ImageConverterInstance): void;
}

export { BitmapByteOrder, type BitmapWithFormat, Channel, type ImageBuffer, type ImageConverter, type ImageConverterInstance, type ImageConverter_statics, type ImagePlane, type Point, type Rect, type Size2 };
