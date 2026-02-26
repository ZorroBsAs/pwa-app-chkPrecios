import { a as a$1, b as b$2 } from './chunk-I6W4DE7O.js';
import { b as b$1 } from './chunk-TRWFJYCT.js';
import { Vibration, Feedback, Brush, Color } from 'scandit-web-datacapture-core';

var a=class{constructor(e,r){this.visualFeedbackColor=e,this.feedback=r;}static defaultSuccessFeedback(){let e=Vibration.withPattern([300]);return new Feedback(e,a$1)}static defaultErrorFeedback(){let e=Vibration.withPattern(b$1.SparkScan.SparkScanFeedback.errorVibrationPattern);return new Feedback(e,b$2)}static defaultErrorBrush(){return new Brush(Color.fromRGBA(0,0,0,0),Color.fromRGBA(250,68,70,1),4)}static success(){return new b}},S=class extends a{constructor(e,r,t,s,o){super(t!=null?t:Color.fromRGBA(250,68,70,1),o!=null?o:a.defaultErrorFeedback()),this.message=e,this.resumeCapturingDelay=r,this.brush=s!=null?s:a.defaultErrorBrush();}toJSONObject(){return {type:"error",barcodeFeedback:{feedback:this.feedback.toJSONObject(),message:this.message,resumeCapturingDelay:this.resumeCapturingDelay,visualFeedbackColor:this.visualFeedbackColor.toJSON(),brush:this.brush.toJSONObject()}}}},b=class extends a{constructor(e,r){super(e!=null?e:Color.fromRGBA(46,193,206,1),r!=null?r:a.defaultSuccessFeedback());}toJSONObject(){return {type:"success",barcodeFeedback:{visualFeedbackColor:this.visualFeedbackColor.toJSON(),feedback:this.feedback.toJSONObject()}}}};

export { a, S as b, b as c };
