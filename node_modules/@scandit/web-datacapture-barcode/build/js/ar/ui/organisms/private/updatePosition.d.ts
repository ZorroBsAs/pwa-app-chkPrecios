import { Point } from '@scandit/web-datacapture-core';

declare function updatePosition(element: HTMLElement, point: Point, transformOrigin: Point, rotationAngle?: number): void;

export { updatePosition };
