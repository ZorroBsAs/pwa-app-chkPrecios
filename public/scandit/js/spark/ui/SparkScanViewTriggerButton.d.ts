import { ScanditHTMLElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';
import { SparkScanViewCollapsedTriggerButton } from './SparkScanViewCollapsedTriggerButton.js';
import { SparkScanViewExpandedTriggerButton } from './SparkScanViewExpandedTriggerButton.js';
import { SparkScanViewSidebar } from './SparkScanViewSidebar.js';
import { leftHandModeAttribute } from './constants/attributes.js';
import { sparkScanViewTriggerButtonTag } from './constants/tags.js';
import './constants/events.js';
import '../SparkScanScanningBehavior.js';
import './SparkScanViewHandMode.js';

declare class SparkScanViewTriggerButton extends ScanditHTMLElement {
    sidebar: SparkScanViewSidebar;
    expandedTriggerButton: SparkScanViewExpandedTriggerButton;
    collapsedTriggerButton: SparkScanViewCollapsedTriggerButton;
    private styleElement;
    get expanded(): boolean;
    set expanded(expanded: boolean);
    get rounded(): boolean;
    set rounded(rounded: boolean);
    get [leftHandModeAttribute](): boolean;
    set [leftHandModeAttribute](leftHandMode: boolean);
    get message(): string;
    set message(message: string);
    static create(): SparkScanViewTriggerButton;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [sparkScanViewTriggerButtonTag]: SparkScanViewTriggerButton;
    }
}

export { SparkScanViewTriggerButton };
