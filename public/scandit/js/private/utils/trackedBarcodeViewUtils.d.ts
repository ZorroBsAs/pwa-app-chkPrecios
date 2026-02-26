import { Size } from 'scandit-web-datacapture-core';

type Encoding = "charset=utf-8";
type SvgMimeType = "image/svg+xml";
interface SVGData {
    data: `data:${SvgMimeType};${Encoding},${string}`;
    size: Size;
}
declare function svgToDataURL(svg: SVGElement): Promise<SVGData["data"]>;
declare const placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8";
declare function removeElementsBySelector(selector: string, element: HTMLElement): boolean;
declare function replaceImages(element: HTMLElement | SVGElement, placeholder?: string): boolean;

export { type SVGData, placeholderImage, removeElementsBySelector, replaceImages, svgToDataURL };
