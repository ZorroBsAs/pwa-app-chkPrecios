/// <reference types="emscripten" />
/**
 * Converts a grayscale image to an RGBA image.
 * Uses Uint32Array for efficient 4-byte writes, providing ~2.4x performance improvement over byte-by-byte approach.
 * @param data - The grayscale image data.
 * @param width - The width of the image.
 * @param height - The height of the image.
 * @returns The RGBA image data.
 */
declare function fromGrayscaleToRgba(data: Uint8ClampedArray<ArrayBufferLike>, width: number, height: number): Uint8ClampedArray<ArrayBuffer>;

export { fromGrayscaleToRgba };
