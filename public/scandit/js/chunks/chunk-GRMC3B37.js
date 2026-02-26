import { a as a$2 } from './chunk-ELK3Z4FD.js';
import { a as a$1 } from './chunk-NI4FUUXK.js';
import { a } from './chunk-OMS6A2IH.js';
import { f, b as b$1 } from './chunk-4DWE45HU.js';
import { h, a as a$3, b, e } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, css, defineCustomElements } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var l=class g extends ScanditHTMLElement{constructor(){super(...arguments);this.sidebar=a.create();this.expandedTriggerButton=a$1.create();this.collapsedTriggerButton=a$2.create();this.styleElement=css`
    ${h} ${a$3} {
      transform: translateY(calc(110px - 42px));
    }

    ${h}:not([expanded]) ${a$3} {
      display: flex;
    }

    ${h}:not([expanded]) ${b} {
      display: none;
    }

    ${h}:not([expanded]) ${e} {
      display: none;
    }

    ${h}[expanded] ${a$3} {
      display: none;
    }

    ${h}[expanded] {
      display: flex;
    }

    ${h}[expanded] ${b} {
      display: flex;
    }

    ${h}[rounded] ${b} .${b} {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }

    ${h}[rounded] ${e} {
      display: none;
    }

    ${h}[${f}] ${a$3} {
      transform: translateY(calc(110px - 42px)) scaleX(-1);
    }

    ${h}[${f}] {
      flex-flow: row-reverse;
    }
  `;}get expanded(){return this.hasAttribute("expanded")}set expanded(t){this.toggleAttribute("expanded",t);}get rounded(){return this.hasAttribute("rounded")}set rounded(t){this.toggleAttribute("rounded",t);}get[f](){return this.hasAttribute(f)&&this.expandedTriggerButton.hasAttribute(f)}set[f](t){this.toggleAttribute(f,t),this.sidebar.setAttribute(b$1,t?"left":"right"),this.expandedTriggerButton.toggleAttribute(f,t);}get message(){return this.expandedTriggerButton.message}set message(t){this.expandedTriggerButton.message=t;}static create(){return defineCustomElements({[h]:g,[a$3]:a$2,[b]:a$1}),document.createElement(h)}connectedCallback(){this.append(this.collapsedTriggerButton,this.sidebar,this.expandedTriggerButton,this.styleElement);}};

export { l as a };
