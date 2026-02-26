import { g, h } from './chunk-UPU6UZ2N.js';
import { i } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, css, defineCustomElements } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var r=class extends ScanditHTMLElement{constructor(){super(...arguments);this.styleElement=css`
    ${i} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100dvw;
      height: 100dvh;
      pointer-events: none;
      user-select: none;
      opacity: 0;
    }

    ${i}[success] {
      background: var(${g});
    }

    ${i}[error] {
      background: var(${h});
    }
  `;}get success(){return this.hasAttribute("success")}set success(e){this.toggleAttribute("error",!e),this.toggleAttribute("success",e);}get error(){return this.hasAttribute("error")}set error(e){this.toggleAttribute("error",e),this.toggleAttribute("success",!e);}static create(){return defineCustomElements({[i]:this}),document.createElement(i)}async fadeIn(e,i){await this.animate([{opacity:"0"},{opacity:e}],{duration:i,easing:"linear"}).finished;}async fadeOut(e,i){await this.animate([{opacity:e},{opacity:"0"}],{duration:i,easing:"linear"}).finished;}async emitSuccessFeedback(){this.success=!0,await this.fadeIn("1",200),await this.fadeOut("1",0);}async emitErrorFeedback(){this.error=!0,await this.fadeIn("1",100),await this.fadeOut("1",100),await this.fadeIn("0.5",100),await this.fadeOut("0.5",0);}connectedCallback(){this.append(this.styleElement);}};

export { r as a };
