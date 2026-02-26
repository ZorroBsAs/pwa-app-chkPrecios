/// <reference types="emscripten" />
import { Color } from './commons/Color.js';
import { SvgIcon } from './private/ui/atoms/SvgIcon.js';
import { ScanditIconShape, ScanditIcon } from './ScanditIcon.js';
import './private/Serializable.js';
import './private/utils/ScanditHTMLElement.js';

declare enum ScanditIconType {
    ArrowDown = "arrowDown",
    ArrowLeft = "arrowLeft",
    ArrowRight = "arrowRight",
    ArrowUp = "arrowUp",
    CameraSwitch = "cameraSwitch",
    Checkmark = "checkMark",
    ChevronDown = "chevronDown",
    ChevronLeft = "chevronLeft",
    ChevronRight = "chevronRight",
    ChevronUp = "chevronUp",
    Delete = "delete",
    DotFiveX = "dotFiveX",
    ExclamationMark = "exclamationMark",
    ExpiredItem = "expiredItem",
    FragileItem = "fragileItem",
    InspectItem = "inspectItem",
    Keyboard = "keyboard",
    LowStock = "lowStock",
    OneX = "oneX",
    Print = "print",
    QuestionMark = "questionMark",
    Restart = "restart",
    Slash = "slash",
    StarFilled = "starFilled",
    StarHalfFilled = "starHalfFilled",
    StarOutlined = "starOutlined",
    ToPick = "toPick",
    TwoX = "twoX",
    WrongItem = "wrongItem",
    XMark = "xMark",
    Pause = "pause"
}
declare const ScanditIconForIconType: Record<ScanditIconType, Promise<{
    register(): void;
    create(): SvgIcon;
}>>;
declare class ScanditIconBuilder {
    private iconName;
    private backgroundShape;
    private backgroundStrokeColor;
    private iconColor;
    private backgroundStrokeWidth;
    private backgroundColor;
    private width;
    private height;
    private iconSize;
    constructor();
    withIcon(icon: ScanditIconType): ScanditIconBuilder;
    withBackgroundShape(backgroundShape: ScanditIconShape | null): ScanditIconBuilder;
    withIconColor(color: Color): ScanditIconBuilder;
    withBackgroundColor(color: Color): ScanditIconBuilder;
    withBackgroundStrokeColor(backgroundStrokeColor: Color): ScanditIconBuilder;
    withBackgroundStrokeWidth(backgroundStrokeWidth: number): ScanditIconBuilder;
    build(): Promise<ScanditIcon>;
    withIconSize(iconSize: number): ScanditIconBuilder;
    withWidth(width: number): ScanditIconBuilder;
    withHeight(height: number): ScanditIconBuilder;
}

export { ScanditIconBuilder, ScanditIconForIconType, ScanditIconShape, ScanditIconType };
