import { a } from './chunk-RLLRZFBC.js';
import { ScanditHTMLElement, html, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var t=class t extends ScanditHTMLElement{constructor(){super();let o=this.attachShadow({mode:"open"});o.innerHTML=html`
      <button>
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `,o.append(t.createStyleElement().cloneNode(!0));let e=a.create();e.setAttribute("slot","icon"),e.size=24,this.append(e);}static create(){return document.createElement(t.tag)}static register(){defineCustomElements({[t.tag]:t});}static createStyleElement(){return css`
      :host {
        display: inline-block;
        font-family: "SF Pro Text", sans-serif;
      }

      :host button {
        min-width: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        border-radius: 1rem;
        min-width: 100px;
        border: none;
        padding: 0.25rem 0.5rem;
        background-color: rgba(255, 255, 255, 0.9);
        color: rgba(61, 72, 82, 0.8);
        font-weight: 600;
        font-size: 0.688rem;
      }
    `}};t.tag="scandit-find-card-list-button";var n=t;n.register();

export { n as a };
