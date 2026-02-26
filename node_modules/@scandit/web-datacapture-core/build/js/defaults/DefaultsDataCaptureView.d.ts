/// <reference types="emscripten" />
import { Anchor } from '../commons/Anchor.js';
import { MarginsWithUnit } from '../commons/MarginsWithUnit.js';
import { PointWithUnit } from '../commons/PointWithUnit.js';
import { LogoStyle } from '../DataCaptureViewPlusRelated.js';
import '../private/Serializable.js';
import '../commons/NumberWithUnit.js';
import '../commons/MeasureUnit.js';

declare const defaultDataCaptureView: {
    focusGesture: null;
    zoomGesture: null;
    logoAnchor: Anchor;
    logoStyle: LogoStyle;
    logoOffset: PointWithUnit;
    pointOfInterest: PointWithUnit;
    scanAreaMargins: MarginsWithUnit;
    cameraRecoveryText: string;
};
type DataCaptureViewDefaults = typeof defaultDataCaptureView;

export { type DataCaptureViewDefaults, defaultDataCaptureView };
