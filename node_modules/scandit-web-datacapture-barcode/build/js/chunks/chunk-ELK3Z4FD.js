import { c as c$1, a as a$2 } from './chunk-UPU6UZ2N.js';
import { a as a$3 } from './chunk-YU4ASL7B.js';
import { a as a$1 } from './chunk-NBCMCH45.js';
import { a, c } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, defineCustomElements, html } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var s=class extends ScanditHTMLElement{constructor(){super(...arguments);this.pointerDownListener=this.onPointerDown.bind(this);}static create(){return defineCustomElements({[a]:this,[c]:a$1}),document.createElement(a)}render(){this.innerHTML=html`
      <div class="${a}">
        <div class="${a}__icon">
          <spark-scan-view-icon
            id="scannerIcon"
            icon="scanner"
            inline-style="fill: var(${c$1})"
            size="32"
          ></spark-scan-view-icon>
        </div>
      </div>

      <style>
        .${a} {
          width: 84px;
          height: 84px;
          padding: 6px;
          box-sizing: border-box;
          background: var(${a$2});
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }

        .${a}__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: rgba(18, 22, 25, 1);
          border-radius: 50%;
        }
      </style>
    `;}onPointerDown(t){this.dispatchEvent(new CustomEvent(a$3,{bubbles:!0,detail:{clientX:t.clientX,clientY:t.clientY}}));}connectedCallback(){this.render(),this.addEventListener("pointerdown",this.pointerDownListener);}disconnectedCallback(){this.removeEventListener("pointerdown",this.pointerDownListener);}};

export { s as a };
