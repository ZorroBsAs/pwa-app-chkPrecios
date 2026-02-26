import { e as e$1, f, d as d$1 } from './chunk-UPU6UZ2N.js';
import { c as c$2 } from './chunk-YU4ASL7B.js';
import { a } from './chunk-NBCMCH45.js';
import { k, h, m, j, e, c, l, g, n, i, d, b } from './chunk-4DWE45HU.js';
import { e as e$2, c as c$1 } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, defineCustomElements, html } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var L=class L extends ScanditHTMLElement{constructor(){super(...arguments);this.targetModeButtonTapListener=this.onTargetModeButtonTap.bind(this);this.scanningBehaviorButtonTapListener=this.onScanningBehaviorButtonTap.bind(this);this.torchButtonTapListener=this.onTorchButtonTap.bind(this);this.soundModeButtonTapListener=this.onSoundModeButtonTap.bind(this);this.hapticModeButtonTapListener=this.onHapticModeButtonTap.bind(this);this.handModeButtonTapListener=this.onHandModeButtonTap.bind(this);this.computedStyle=getComputedStyle(this);}get[k](){return this.hasAttribute(k)}set[k](t){this.toggleAttribute(k,t);}get[h](){return this.hasAttribute(h)}set[h](t){this.toggleAttribute(h,t);}get[m](){return this.hasAttribute(m)}set[m](t){this.toggleAttribute(m,t);}get[j](){return this.hasAttribute(j)}set[j](t){this.toggleAttribute(j,t);}get[e](){return this.hasAttribute(e)}set[e](t){this.toggleAttribute(e,t);}get[c](){return this.hasAttribute(c)}set[c](t){this.toggleAttribute(c,t);}get[l](){return this.hasAttribute(l)}set[l](t){this.toggleAttribute(l,t),this.targetModeButtonIcon&&(this.targetModeButtonIcon.fill=t?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f));}get[g](){var t;return (t=this.getAttribute(g))!=null?t:"single"}set[g](t){this.setAttribute(g,t),this.scanningBehaviorButtonIcon&&(this.scanningBehaviorButtonIcon.fill=t==="continuous"?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f));}get[n](){return this.hasAttribute(n)}set[n](t){this.toggleAttribute(n,t),this.torchButtonIcon&&(this.torchButtonIcon.icon=t?"torchOn":"torchOff",this.torchButtonIcon.fill=t?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f),this.torchButtonIcon.size=t?16:17.58);}get[i](){return this.hasAttribute(i)}set[i](t){this.toggleAttribute(i,t),this.soundModeButtonIcon&&(this.soundModeButtonIcon.icon=t?"soundOn":"soundOff",this.soundModeButtonIcon.fill=t?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f));}get[d](){return this.hasAttribute(d)}set[d](t){this.toggleAttribute(d,t),this.hapticModeButtonIcon&&(this.hapticModeButtonIcon.icon=t?"hapticOn":"hapticOff",this.hapticModeButtonIcon.fill=t?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f));}get[b](){var t;return (t=this.getAttribute(b))!=null?t:"right"}set[b](t){this.handModeButtonIcon&&(this.handModeButtonIcon.fill=t==="left"?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)),this.setAttribute(b,t);}get allButtonsHidden(){return L.observedAttributes.every(t=>this[t]===!1)}get visibleButtonCount(){return L.observedAttributes.reduce((t,u)=>this[u]===!0?t+1:t,0)}static create(){return defineCustomElements({[e$2]:this,[c$1]:a}),document.createElement(e$2)}render(){var t,u,b$1,m$1,f$1,T,V,k$1,w,E,$,A;this.innerHTML=html`
      <div class="${e$2}">
        ${this[k]?html`
              <button id="targetModeButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="aimer"
                  fill="${this[l]?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  size="24"
                ></spark-scan-view-icon>
              </button>
            `:""}
        ${this[h]?html`
              <button id="scanningBehaviorButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="continuous"
                  fill="${this[g]==="continuous"?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  size="32"
                ></spark-scan-view-icon>
              </button>
            `:""}
        ${this[m]?html`
              <button id="torchButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="${this[n]?"torchOn":"torchOff"}"
                  fill="${this[n]?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  size="${this[n]?"16":"18"}"
                ></spark-scan-view-icon>
              </button>
            `:""}
        ${this[j]?html`
              <button id="soundModeButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="${this[i]?"soundOn":"soundOff"}"
                  fill="${this[i]?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  size="32"
                ></spark-scan-view-icon>
              </button>
            `:""}
        ${this[e]?html`
              <button id="hapticModeButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="${this[d]?"hapticOn":"hapticOff"}"
                  fill="${this[d]?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  fill="${this[d]?28:14}"
                ></spark-scan-view-icon>
              </button>
            `:""}
        ${this[c]?html`
              <button id="handModeButton" class="${e$2}__button">
                <spark-scan-view-icon
                  icon="hand"
                  fill="${this[b]==="left"?this.computedStyle.getPropertyValue(e$1):this.computedStyle.getPropertyValue(f)}"
                  size="22"
                ></spark-scan-view-icon>
              </button>
            `:""}
      </div>

      <style>
        .${e$2} {
          display: flex;
          flex-flow: column;
          justify-content: ${this.visibleButtonCount>3?"flex-start":"space-evenly"};
          align-items: center;
          overflow-y: scroll;
          box-sizing: border-box;
          width: ${64}px;
          height: 220px;
          padding: 16px 0;
          background: var(${d$1});
          gap: 8px;
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .${e$2}::-webkit-scrollbar {
          display: none;
        }

        ${e$2}:not([${b}]) .${e$2},
        ${e$2}[${b}="${"right"}"] .${e$2} {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }

        ${e$2}[${b}="${"left"}"] .${e$2} {
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        .${e$2}__button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          padding: 16px;
          border: none;
          background: none;
          cursor: pointer;
        }
      </style>
    `,this.targetModeButton=this.querySelector("#targetModeButton"),(t=this.targetModeButton)==null||t.addEventListener("pointerup",this.targetModeButtonTapListener),this.targetModeButtonIcon=(u=this.targetModeButton)==null?void 0:u.querySelector(c$1),this.scanningBehaviorButton=this.querySelector("#scanningBehaviorButton"),(b$1=this.scanningBehaviorButton)==null||b$1.addEventListener("pointerup",this.scanningBehaviorButtonTapListener),this.scanningBehaviorButtonIcon=(m$1=this.scanningBehaviorButton)==null?void 0:m$1.querySelector(c$1),this.torchButton=this.querySelector("#torchButton"),(f$1=this.torchButton)==null||f$1.addEventListener("pointerup",this.torchButtonTapListener),this.torchButtonIcon=(T=this.torchButton)==null?void 0:T.querySelector(c$1),this.soundModeButton=this.querySelector("#soundModeButton"),(V=this.soundModeButton)==null||V.addEventListener("pointerup",this.soundModeButtonTapListener),this.soundModeButtonIcon=(k$1=this.soundModeButton)==null?void 0:k$1.querySelector(c$1),this.hapticModeButton=this.querySelector("#hapticModeButton"),(w=this.hapticModeButton)==null||w.addEventListener("pointerup",this.hapticModeButtonTapListener),this.hapticModeButtonIcon=(E=this.hapticModeButton)==null?void 0:E.querySelector(c$1),this.handModeButton=this.querySelector("#handModeButton"),($=this.handModeButton)==null||$.addEventListener("pointerup",this.handModeButtonTapListener),this.handModeButtonIcon=(A=this.handModeButton)==null?void 0:A.querySelector(c$1);}connectedCallback(){this[k]=!0,this[m]=!0,this[i]=!0,this[d]=!0,this.render();}disconnectedCallback(){var t,u,b,m,f,T;(t=this.targetModeButton)==null||t.removeEventListener("pointerup",this.targetModeButtonTapListener),(u=this.scanningBehaviorButton)==null||u.removeEventListener("pointerup",this.scanningBehaviorButtonTapListener),(b=this.torchButton)==null||b.removeEventListener("pointerup",this.torchButtonTapListener),(m=this.soundModeButton)==null||m.removeEventListener("pointerup",this.soundModeButtonTapListener),(f=this.hapticModeButton)==null||f.removeEventListener("pointerup",this.hapticModeButtonTapListener),(T=this.handModeButton)==null||T.removeEventListener("pointerup",this.handModeButtonTapListener);}attributeChangedCallback(t,u,b){b!==u&&this.render();}onTargetModeButtonTap(){this[l]=!this[l],this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"targetModeButton",enabled:this[l]}}));}onScanningBehaviorButtonTap(){this[g]=this[g]==="continuous"?"single":"continuous",this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"scanningBehaviorButton",enabled:this[g]==="continuous"}}));}onTorchButtonTap(){this[n]=!this[n],this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"torchButton",enabled:this[n]}}));}onSoundModeButtonTap(){this[i]=!this[i],this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"soundModeButton",enabled:this[i]}}));}onHapticModeButtonTap(){this[d]=!this[d],this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"hapticModeButton",enabled:this[d]}}));}onHandModeButtonTap(){this[b]=this[b]==="left"?"right":"left",this.dispatchEvent(new CustomEvent(c$2,{bubbles:!0,detail:{tapped:"handModeButton",enabled:this[b]==="left"}}));}};L.observedAttributes=[k,h,m,j,e,c];var H=L;

export { H as a };
