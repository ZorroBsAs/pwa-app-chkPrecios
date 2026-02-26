import { ScanditIcon, Brush, Point } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import { Barcode } from '../../../Barcode.js';
import { BarcodeArHighlight } from './BarcodeArHighlight.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';

declare enum BarcodeArCircleHighlightPreset {
    Dot = "dot",
    Icon = "icon"
}
declare class BarcodeArCircleHighlight extends ScanditHTMLElement implements BarcodeArHighlight {
    private _isPulsing;
    private _icon;
    static tag: "scandit-barcode-ar-circle-highlight";
    set isPulsing(isPulsing: boolean);
    get isPulsing(): boolean;
    set icon(icon: ScanditIcon | null);
    get icon(): ScanditIcon | null;
    private preset;
    private dot;
    private brushBuilder;
    private _size;
    private _brush;
    private _barcode;
    constructor();
    protected set barcode(barcode: Barcode);
    get barcode(): Barcode;
    set brush(brush: Brush);
    get brush(): Brush;
    set size(size: number);
    get size(): number;
    static create(barcode: Barcode, preset: BarcodeArCircleHighlightPreset): BarcodeArCircleHighlight;
    static register(): void;
    private static createStyleElement;
    connectedCallback(): Promise<void>;
    private updateSize;
    private updateBrush;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArCircleHighlight.tag]: BarcodeArCircleHighlight;
    }
}

export { BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset };
