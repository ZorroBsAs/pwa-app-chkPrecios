/// <reference types="emscripten" />
import * as CSS from 'csstype';

interface SingleImageUploaderSettingsDefaults {
    iconElement: HTMLElement | SVGElement;
    informationElement: HTMLElement;
    buttonElement: HTMLElement;
    containerStyle: CSS.Properties;
    iconStyle: CSS.Properties;
    informationStyle: CSS.Properties;
    buttonStyle: CSS.Properties;
    onlyCameraCapture: boolean;
}
interface SingleImageUploaderDefaults {
    Settings: SingleImageUploaderSettingsDefaults;
}
declare const defaultSingleImageUploader: SingleImageUploaderDefaults;

export { type SingleImageUploaderDefaults, type SingleImageUploaderSettingsDefaults, defaultSingleImageUploader };
