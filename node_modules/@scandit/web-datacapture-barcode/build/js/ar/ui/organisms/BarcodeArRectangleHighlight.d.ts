import { Brush, ScanditIcon, Point } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import { Barcode } from '../../../Barcode.js';
import { BarcodeArHighlight } from './BarcodeArHighlight.js';
import '@scandit/web-datacapture-core/build/js/private/Serializable';
import '../../../EncodingRange.js';
import '../../../StructuredAppendData.js';

declare class BarcodeArRectangleHighlight extends ScanditHTMLElement implements BarcodeArHighlight {
    static tag: "scandit-barcode-ar-rectangle-highlight";
    private _brush;
    private _icon;
    private _barcode;
    private static readonly widthCssVariable;
    private static readonly heightCssVariable;
    private static readonly backgroundColorCssVariable;
    private static readonly strokeColorCssVariable;
    private static readonly strokeWidthCssVariable;
    constructor();
    connectedCallback(): void;
    protected set barcode(barcode: Barcode);
    get barcode(): Barcode;
    set brush(brush: Brush);
    get brush(): Brush;
    set icon(icon: ScanditIcon | null);
    get icon(): ScanditIcon | null;
    set width(width: number);
    set height(height: number);
    get height(): number;
    get width(): number;
    static create(barcode: Barcode): BarcodeArRectangleHighlight;
    private static register;
    private updateBrushColor;
    private setStylePropertyValue;
    private getStylePropertyValue;
    private static createStyleElement;
    updatePosition(point: Point, transformOrigin: Point, rotationAngle: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [BarcodeArRectangleHighlight.tag]: BarcodeArRectangleHighlight;
    }
}

export { BarcodeArRectangleHighlight };
