/// <reference types="emscripten" />
import { g as FrameSource, F as FrameSourceState, e as FrameSourceListener } from './Camera-DhGjpcjv.js';
import { Serializable } from './private/Serializable.js';
import './commons/Rect.js';
import './commons/Point.js';
import './commons/Size.js';
import './private/privateAccess.js';

interface ImageFrameSourceJSON {
    /**
     * The official type should be "image", but we cannot use it because it would not work in conjunction
     * with Centaurus.
     */
    type: "imageFrameSource";
}
declare class ImageFrameSource implements FrameSource, Serializable<ImageFrameSourceJSON> {
    /**
     * The official type should be "image", but we cannot use it because it would not work in conjunction
     * with Centaurus.
     * @see toJSONObject
     */
    private readonly type;
    private readonly _listeners;
    private _currentState;
    private _desiredState;
    private _context;
    private _imageData;
    get desiredState(): FrameSourceState;
    private get context();
    private set context(value);
    private get currentState();
    static fromFile(file: File): Promise<ImageFrameSource>;
    static fromImage(image: HTMLImageElement): Promise<ImageFrameSource>;
    static fromImageData(imageData: ImageData): Promise<ImageFrameSource>;
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    addListener(listener: FrameSourceListener | null): void;
    removeListener(listener: FrameSourceListener | null): void;
    toJSONObject(): ImageFrameSourceJSON;
    getCurrentState(): FrameSourceState;
    private getCanvasAndContext;
    private setCurrentState;
    private notifyContext;
    private notifyListeners;
    private processSubmittedImage;
}

export { ImageFrameSource, type ImageFrameSourceJSON };
