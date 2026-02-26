import { DataCaptureView } from '@scandit/web-datacapture-core';

declare function isDataCaptureView(value: DataCaptureView | Element): value is DataCaptureView;

export { isDataCaptureView };
