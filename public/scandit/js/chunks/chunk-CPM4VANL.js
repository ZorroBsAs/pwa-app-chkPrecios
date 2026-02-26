import { g } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, defineCustomElements, Timeout, html } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var a=class extends ScanditHTMLElement{get type(){var e;return (e=this.getAttribute("type"))!=null?e:"info"}set type(e){this.setAttribute("type",e);}get message(){var e;return (e=this.getAttribute("message"))!=null?e:""}set message(e){this.setAttribute("message",e);}get visible(){return this.hasAttribute("visible")}set visible(e){this.toggleAttribute("visible",e);}static create(){return defineCustomElements({[g]:this}),document.createElement(g)}show(e,i,s){this.hide(),this.type=e,this.message=i,this.visible=!0,this.timeout=new Timeout(s,this.hide.bind(this)),this.timeout.start();}hide(){var e;(e=this.timeout)==null||e.stop(),this.visible=!1;}render(){this.innerHTML=html`
      <div class="${g} ${g}--${this.type}">${this.message}</div>

      <style>
        ${g} {
          width: fit-content;
          min-width: calc(100% - 32px);
          opacity: 0;
          transition: 0.3s ease;
          user-select: none;
        }

        ${g}[visible] {
          opacity: 1;
        }

        .${g} {
          width: fit-content;
          padding: 8px 12px;
          margin: 0 auto;
          border-radius: 4px;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: 500;
        }

        .${g}--${"info"} {
          background: rgba(255, 255, 255, 1);
        }

        .${g}--${"warning"} {
          background: rgba(251, 192, 44, 1);
        }

        .${g}--${"error"} {
          background: rgba(250, 68, 70, 1);
          color: white;
        }
      </style>
    `;}connectedCallback(){this.render();}disconnectedCallback(){this.hide();}attributeChangedCallback(e,i,s){s!==i&&this.render();}};a.observedAttributes=["type","message"];

export { a };
