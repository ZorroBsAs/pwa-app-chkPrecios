import { a } from './chunk-STBQIZYJ.js';
import { a as a$3 } from './chunk-GEQ4PMGM.js';
import { a as a$1 } from './chunk-GR53ILHV.js';
import { a as a$2 } from './chunk-EWQFIXY4.js';
import { b } from './chunk-ZDLFSGRM.js';
import { DataCaptureEngine } from 'scandit-web-datacapture-core/build/js/worker/index.js';

var n=class extends DataCaptureEngine{constructor(e,r){super(e,r);}getModeDeserializers(){this.barcodeCaptureMode=new a(this,this.Module,this.workerFunctions),this.barcodeTrackingMode=new a$1(this,this.Module,this.workerFunctions),this.sparkScanMode=new a$2(this,this.Module,this.workerFunctions),this.barcodeFindMode=new a$3(this,this.Module,this.workerFunctions);let e=super.getModeDeserializers();return e.push_back(this.barcodeCaptureMode.getCaptureDeserializer()),e.push_back(this.barcodeTrackingMode.getTrackingDeserializer()),e.push_back(this.sparkScanMode.getSparkScanDeserializer()),e}sparkScanEmitErrorFeedback(e){this.sparkScanMode.emitErrorFeedback(e);}getWasmSideModuleFileName(){return ""}getWasmCoreFileName(e,r){return r?e?"scandit-datacapture-sdk-barcode-simd-pthreads.wasm":"scandit-datacapture-sdk-barcode-pthreads.wasm":e?"scandit-datacapture-sdk-barcode-simd.wasm":"scandit-datacapture-sdk-barcode.wasm"}getWasmCoreExpectedHash(e,r){return r?e?"0497629ae7746bbb2c9befc2ba9086882c73e1a5029e40f52382e9329c744110":"acd5b393969de53839d18ea0584116f7efba63469c188410a6769f8fc9120243":e?"abf5780ce18056e02d433c67dc5c59496430285c990240ed100b1842ae9bd352":"d41473a70eb9068f034b244edf7778e8fbaf46049928792f494473f6ff0e08b9"}getWasmMetadata(){return b}};

export { n as a };
