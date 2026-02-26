import { a as a$1 } from './chunk-7NMBCO5L.js';
import { a } from './chunk-XO2EOL4N.js';
import { LicensedFeature } from 'scandit-web-datacapture-core/build/js/worker/index.js';

var o=class{constructor(t){this.type="parser";this.settings=new a;this.settings.dataFormat=t;}get id(){return `${this.settings.dataFormat}`}static async forFormat(t,e){let a=t,r=new this(e);if(r.parserProxy=new a$1,!await a.isFeatureSupported(LicensedFeature.Parser))throw new Error("Parser not supported by the current license");return await r.parserProxy.create(e,{...a.dataCaptureInstance.getOptions(),referredOrigin:window.location.origin}),r}async parseStringToJson(t){return this.parserProxy.parseStringToJson(t)}async setOptions(t){return this.parserProxy.setOptions(t)}toJSONObject(){return {type:this.type,settings:this.settings.toJSONObject()}}};

export { o as a };
