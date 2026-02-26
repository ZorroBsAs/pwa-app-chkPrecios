import { Optional, ScanditIcon, Color } from '@scandit/web-datacapture-core';
import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';

declare const CONTAINER_SELECTOR = ".container";
declare const ICON_TEXT_SELECTOR = ".icon-text";
declare const TEXT_SELECTOR = ".text";
declare function createTemplate(): string;
declare function createStyles(): HTMLStyleElement;
declare function getIcon(element: ScanditHTMLElement): Optional<ScanditIcon>;
declare function updateIcon(element: ScanditHTMLElement, icon: Optional<ScanditIcon>): void;
declare function getBackgroundColor(element: ScanditHTMLElement, defaultColor: Color): Color;
declare function setBackgroundColor(element: ScanditHTMLElement, value: Color): void;
declare function getTextColor(element: ScanditHTMLElement, defaultColor: Color): Color;
declare function setTextColor(element: ScanditHTMLElement, value: Color): void;
declare function getTextSize(element: ScanditHTMLElement): number;
declare function setTextSize(element: ScanditHTMLElement, value: number): void;
declare function getText(element: ScanditHTMLElement): string;
declare function setText(element: ScanditHTMLElement, value: string): void;

export { CONTAINER_SELECTOR, ICON_TEXT_SELECTOR, TEXT_SELECTOR, createStyles, createTemplate, getBackgroundColor, getIcon, getText, getTextColor, getTextSize, setBackgroundColor, setText, setTextColor, setTextSize, updateIcon };
