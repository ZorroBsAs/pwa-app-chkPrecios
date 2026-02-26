import { CameraPosition } from '@scandit/web-datacapture-core';

declare class BarcodeArViewSettings {
    soundEnabled: boolean;
    hapticEnabled: boolean;
    defaultCameraPosition: CameraPosition;
    constructor();
}

export { BarcodeArViewSettings };
