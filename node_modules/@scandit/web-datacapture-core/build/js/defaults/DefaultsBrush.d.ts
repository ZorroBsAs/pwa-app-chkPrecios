/// <reference types="emscripten" />
import { Brush } from '../Brush.js';
import '../commons/Color.js';
import '../private/Serializable.js';

declare const defaultBrush: Brush;
type BrushDefaults = typeof defaultBrush;

export { type BrushDefaults, defaultBrush };
