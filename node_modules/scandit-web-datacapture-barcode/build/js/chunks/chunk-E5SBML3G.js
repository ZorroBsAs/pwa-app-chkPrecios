import { Color } from 'scandit-web-datacapture-core';
import { primaryTeal100, gray900 } from 'scandit-web-datacapture-core/build/js/private/ui/colors.js';
import { ScanditHTMLElement, html, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var a=class a extends ScanditHTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"});t.innerHTML=html`
      <div class="dot">
        <div class="inner-dot"></div>
      </div>
    `,t.append(a.createStyleElement().cloneNode(!0));}set size(t){this.render({propChanged:"size",value:String(t)});}get size(){return Number(this.getAttribute("size"))}get variant(){return this.getAttribute("variant")}set variant(t){this.render({propChanged:"variant",value:t});}get pulse(){return !!this.getAttribute("pulse")}set pulse(t){this.render({propChanged:"pulse",value:t.toString()});}static create(){return a.createWithColors(primaryTeal100,Color.fromHex("#ffff"))}static createWithColors(t,r){let e=document.createElement(a.tag);return e.setPrimaryColor(t),e.setSecondaryColor(r),e}static register(){defineCustomElements({[a.tag]:a});}static createStyleElement(){return css`
      :host {
        display: block;
        --size: 14px;
      }

      .dot {
        --primary: #${primaryTeal100.toJSON()};
        --secondary: #${primaryTeal100.toJSON()};
        --primary-no-opacity: #${primaryTeal100.withAlpha(0).toJSON()};
        position: relative;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: #ffff;
        box-shadow: 0px 1px 2px 0px #${gray900.withAlpha(.3).toJSON()};
      }
      .dot.pulse {
        animation: pulse 2s infinite;
      }
      .dot.target {
        width: calc(var(--size) + calc(var(--size) * 1 / 1.285));
        height: calc(var(--size) + calc(var(--size) * 1 / 1.285));
      }
      .dot.target .inner-dot {
        width: calc(var(--size) + calc(var(--size) * 1 / 3));
        height: calc(var(--size) + calc(var(--size) * 1 / 3));
        background-color: var(--primary);
      }
      .inner-dot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: var(--secondary);
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--primary);
        }
        70% {
          box-shadow: 0 0 0 var(--size) var(--primary-no-opacity);
        }
        100% {
          box-shadow: 0 0 0 0 var(--primary-no-opacity);
        }
      }
    `}connectedCallback(){}setPrimaryColor(t){var e;let r=(e=this.shadowRoot)==null?void 0:e.querySelector(".dot");r&&(r.style.setProperty("--primary",`#${t.toJSON()}`),r.style.setProperty("--primary-no-opacity",`#${t.withAlpha(0).toJSON()}`));}setSecondaryColor(t){var e;let r=(e=this.shadowRoot)==null?void 0:e.querySelector(".dot");r&&r.style.setProperty("--secondary",`#${t.toJSON()}`);}render({propChanged:t,value:r}){var s;let e=(s=this.shadowRoot)==null?void 0:s.querySelector(".dot");switch(t){case"size":{e==null||e.style.setProperty("--size",`${r}px`);break}case"variant":{e==null||e.classList.toggle("target",r==="target");break}case"pulse":{e==null||e.classList.toggle("pulse",r==="true"||this.hasAttribute("pulse"));break}}}attributeChangedCallback(t,r,e){this.render({propChanged:t,value:e});}};a.tag="scandit-find-dot",a.observedAttributes=["size","variant","pulse"];var o=a;o.register();

export { o as a };
