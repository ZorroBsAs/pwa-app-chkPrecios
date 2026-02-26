import { a } from './chunk-VRFFR4LU.js';
import { e } from './chunk-BW3FAMLI.js';

var d=class n{get newlyRecognizedBarcode(){return this._newlyRecognizedBarcode}get newlyLocalizedBarcodes(){return this._newlyLocalizedBarcodes}get frameSequenceID(){return this._frameSequenceID}get newlyRecognizedBarcodes(){return this._newlyRecognizedBarcodes}static fromJSON(e$1){let r=new n;return r._newlyRecognizedBarcodes=e$1.newlyRecognizedBarcodes.map(c=>e.fromJSON(c)),e$1.newlyRecognizedBarcode&&(r._newlyRecognizedBarcode=e.fromJSON(e$1.newlyRecognizedBarcode)),r._newlyLocalizedBarcodes=e$1.newlyLocalizedBarcodes.map(c=>a.fromJSON(c)),r._frameSequenceID=e$1.frameSequenceId,r}toJSON(){var e,r;return JSON.stringify({newlyLocalizedBarcodes:this.newlyLocalizedBarcodes.map(c=>c.toJSONObject()),newlyRecognizedBarcodes:this.newlyRecognizedBarcodes.map(c=>c.toJSONObject()),newlyRecognizedBarcode:(r=(e=this.newlyRecognizedBarcode)==null?void 0:e.toJSONObject())!=null?r:null,frameSequenceId:this.frameSequenceID})}};

export { d as a };
