import { DataCaptureContext } from '@scandit/web-datacapture-core';
import { ScanIntention } from '../ScanIntention.js';

/**
 * Ensures that scanIntention is downgraded to Manual if the device
 * lacks required capabilities (threadsSupport or simdSupport).
 *
 * @param settings - Settings object with optional scanIntention property
 * @param capabilityInfo - Device capability information
 * @returns The settings object with potentially modified scanIntention
 */
declare function ensureSmartScanIntentionSupport<T extends {
    scanIntention?: ScanIntention;
}>(settings: T, capabilityInfo: (typeof DataCaptureContext)["capabilityInfo"] | undefined): T;

export { ensureSmartScanIntentionSupport };
