/// <reference types="emscripten" />
import { f as FrameSourceJSON, F as FrameSourceState, g as FrameSource, e as FrameSourceListener } from './Camera-DhGjpcjv.js';
import { SingleImageUploaderSettingsJSON, SingleImageUploaderSettings } from './SingleImageUploaderSettings.js';
import { Serializable } from './private/Serializable.js';
import './commons/Rect.js';
import './commons/Point.js';
import './commons/Size.js';
import './private/privateAccess.js';
import 'csstype';

interface SingleImageUploaderJSON extends FrameSourceJSON {
    type: "singleImageUploader";
    settings: Record<string, never> | SingleImageUploaderSettingsJSON;
    desiredState: FrameSourceState;
}
type SingleImageUploaderType = "singleImageUploader";
declare class SingleImageUploader implements FrameSource, Serializable<SingleImageUploaderJSON> {
    private readonly type;
    private _currentState;
    private _settings;
    private _desiredState;
    private readonly listeners;
    private _context;
    private _view;
    static get default(): SingleImageUploader;
    get desiredState(): FrameSourceState;
    get settings(): SingleImageUploaderSettings;
    private get context();
    private set context(value);
    private set currentState(value);
    private get currentState();
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    addListener(listener: FrameSourceListener | null): void;
    removeListener(listener: FrameSourceListener | null): void;
    applySettings(settings: SingleImageUploaderSettings): Promise<void>;
    toJSONObject(): SingleImageUploaderJSON;
    getCurrentState(): FrameSourceState;
    /**
     * Does the same as the "currentState" setter, but returns a promise that you can await.
     */
    private setCurrentState;
    private notifyContext;
    private notifyListeners;
    private processUploadedFileCapture;
    private addView;
}

export { SingleImageUploader, type SingleImageUploaderJSON, type SingleImageUploaderType };
