import { b } from './chunk-TRWFJYCT.js';
import { NumberWithUnit } from 'scandit-web-datacapture-core';

var i=class{constructor(){this.radius=new NumberWithUnit(b.SparkScan.SparkScanSettings.locationSelection.radius,b.SparkScan.SparkScanSettings.locationSelection.unit);this.type="targetAimer";}toJSONObject(){return {type:this.type,radius:this.radius.toJSONObject()}}};

export { i as a };
