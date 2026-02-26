import { Direction } from '@scandit/web-datacapture-core';
import { BarcodeArAnnotationAnchor } from '../BarcodeArAnnotation.js';
import '@scandit/web-datacapture-core/build/js/private/utils/ScanditHTMLElement.js';
import './BarcodeArAnnotationVariation.js';

declare const isDirectionHorizontal: (direction: Direction | undefined) => boolean;
declare const isDirectionVertical: (direction: Direction | undefined) => boolean;
declare const isAnchorYcenter: (anchor: BarcodeArAnnotationAnchor) => boolean;
declare const isAnchorXcenter: (anchor: BarcodeArAnnotationAnchor) => boolean;

export { isAnchorXcenter, isAnchorYcenter, isDirectionHorizontal, isDirectionVertical };
