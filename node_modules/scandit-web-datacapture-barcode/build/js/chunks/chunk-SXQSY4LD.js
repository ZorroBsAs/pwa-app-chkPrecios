import { a as a$1 } from './chunk-6SMWD5ZJ.js';
import { a } from './chunk-5OCH7FAP.js';
import { Color } from 'scandit-web-datacapture-core';
import { ScanditHTMLElement, html, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var e=class e extends ScanditHTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"});t.innerHTML=html`<button><slot></slot></button>`,t.append(e.createStyleElement().cloneNode(!0));}get state(){var t;return (t=this.getAttribute("state"))!=null?t:"off"}set state(t){this.setAttribute("state",t);}static create(){return document.createElement(e.tag)}static register(){defineCustomElements({[e.tag]:e});}static createStyleElement(){return css`
      :host button {
        display: flex;
        border: none;
        margin: 0;
        padding: 0;
        background: none;
        outline: none;
      }
    `}connectedCallback(){let t=Color.fromHex("#FFFFFF");this.onIcon=a.create(),this.offIcon=a$1.create(),this.onIcon.setAttribute("shadow",""),this.offIcon.setAttribute("shadow",""),this.onIcon.size=36,this.offIcon.size=36,this.offIcon.fill=`#${t.withAlpha(.5).toJSON()}`,this.onIcon.fill=`#${t.toJSON()}`;let o="off";(this.getAttribute("state")==="on"||this.getAttribute("state")==="off")&&(o=this.getAttribute("state")),this.state=o;}attributeChangedCallback(t,o,r){t==="state"&&this.render(r);}render(t){t==="on"?(this.offIcon.remove(),this.append(this.onIcon)):(this.onIcon.remove(),this.append(this.offIcon));}};e.tag="scandit-find-torch-button",e.observedAttributes=["state"];var n=e;n.register();

export { n as a };
