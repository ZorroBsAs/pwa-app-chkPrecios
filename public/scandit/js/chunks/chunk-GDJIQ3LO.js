import { html, ScanditHTMLElement, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var d=html`
  <div id="container" role="listitem">
    <div class="left">
      <div class="rect"></div>
    </div>
    <div class="middle">
      <div class="title overflow-text-mask"></div>
      <div class="subtitle overflow-text-mask"></div>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
`,t=class t extends ScanditHTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.innerHTML=d,e.append(t.createStyleElement().cloneNode(!0));}set title(e){var r;let i=(r=this.shadowRoot)==null?void 0:r.querySelector(".title");i!=null&&(i.textContent=e);}set subtitle(e){var r;let i=(r=this.shadowRoot)==null?void 0:r.querySelector(".subtitle");i!=null&&(i.textContent=e);}static create(){return document.createElement(t.tag)}static register(){defineCustomElements({[t.tag]:t});}static createStyleElement(){return css`
      :host {
        display: block;
        font-family: "SF Pro Text", sans-serif;
        backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0px 2px 6px 0px rgba(18, 22, 25, 0.15);
        border-radius: 0.75rem;
        background-color: rgba(255, 255, 255, 0.9);
      }

      #container {
        min-width: 200px;
        min-height: 50px;
        max-height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        padding: 1rem;
      }

      .overflow-text-mask {
        overflow-x: auto;
        -webkit-mask-image: linear-gradient(90deg, #000 95%, transparent);
        mask-image: linear-gradient(90deg, #000 95%, transparent);
        padding-right: 0.3rem;
      }

      #container > div {
        display: flex;
        justify-content: center;
        flex: 1 1 17.5%;
      }

      #container > div.middle {
        flex-direction: column;
        flex: 1 1 65%;
        overflow: hidden;
      }

      #container > div .rect {
        width: 50px;
        height: 50px;
        background: gray;
      }

      #container .title {
        font-size: 0.938rem;
        font-weight: 600;
        color: rgba(18, 22, 25, 1);
      }

      #container .subtitle {
        font-size: 0.75rem;
        font-weight: 400;
        margin-top: 0.25rem;
      }
    `}};t.tag="scandit-find-card";var a=t;a.register();

export { a };
