/// <reference types="emscripten" />
import { Size } from '../../commons/Size.js';
import { Optional } from '../../tsHelper.js';
import '../../ScanditIcon.js';
import '../../DataCaptureContext-Dvdr7st4.js';
import '../Serializable.js';
import '../../commons/Color.js';
import './ScanditHTMLElement.js';
import '../../Camera-DhGjpcjv.js';
import '../../commons/Rect.js';
import '../../commons/Point.js';
import '../privateAccess.js';
import '../../DataCaptureContextSettings.js';
import '../../commons/JSONType.js';
import '../../DataCaptureViewPlusRelated.js';
import '../../NotificationPresenter/NotificationPresenter.js';
import '../../NotificationPresenter/NotificationConfiguration.js';
import '../../NotificationPresenter/NotificationStyle.js';
import '../../commons/Anchor.js';
import '../../commons/MarginsWithUnit.js';
import '../../commons/NumberWithUnit.js';
import '../../commons/MeasureUnit.js';
import '../../commons/Orientation.js';
import '../../commons/PointWithUnit.js';
import '../../commons/Quadrilateral.js';
import '../CustomLocationsView.js';
import '../View.js';
import '../AnchorPositions.js';
import '../nativeHandle.js';
import '../../license/OpenSourceSoftwareLicenseInfo.js';
import '../../logger.js';
import '../FrameReaders/ColorType.js';
import '../../LoadingStatus.js';
import '../djinni-types/index.js';
import '../HtmlElementState.js';
import '../../commons/SizeWithUnit.js';
import './AsyncStateMachine.js';

type Encoding = "charset=utf-8";
type SvgMimeType = "image/svg+xml";
interface SVGData {
    data: `data:${SvgMimeType};${Encoding},${string}`;
    size: Size;
}
declare function svgToDataURL(svg: SVGElement): Promise<SVGData["data"]>;
declare const placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8";
declare function removeElementsBySelector(selector: string, element: HTMLElement): boolean;
declare function removeUnwantedHTMLElement(element: HTMLElement): boolean;
declare function replaceImages(element: HTMLElement | SVGElement, placeholder?: string): boolean;
declare function stripImagesFromViewAndWarnUser(strip: boolean, view: Optional<HTMLElement>): void;

export { type SVGData, placeholderImage, removeElementsBySelector, removeUnwantedHTMLElement, replaceImages, stripImagesFromViewAndWarnUser, svgToDataURL };
