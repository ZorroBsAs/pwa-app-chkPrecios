/// <reference types="emscripten" />
import { IpcRenderer } from 'electron';

declare function preloadBindings(ipcRenderer: IpcRenderer): void;

export { preloadBindings };
