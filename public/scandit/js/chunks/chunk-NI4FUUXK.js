import { a as a$2 } from './chunk-OMS6A2IH.js';
import { c as c$1, a as a$3, b as b$1 } from './chunk-UPU6UZ2N.js';
import { b as b$2 } from './chunk-YU4ASL7B.js';
import { a as a$1 } from './chunk-NBCMCH45.js';
import { f } from './chunk-4DWE45HU.js';
import { b, c, e } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, defineCustomElements, html } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var g=100,v="forwards",a=class extends ScanditHTMLElement{constructor(){super(...arguments);this.fadeOutAnimationFinishListener=this.onFadeOutAnimationFinish.bind(this);this.pointerDownListener=this.onPointerDown.bind(this);}get message(){var t;return (t=this.getAttribute("message"))!=null?t:""}set message(t){this.setAttribute("message",t);}get active(){return this.hasAttribute("active")}set active(t){this.toggleAttribute("active",t);}static create(){return defineCustomElements({[b]:this,[c]:a$1,[e]:a$2}),document.createElement(b)}render(){this.innerHTML=html`
      <div class="${b}">
        <spark-scan-view-icon
          class="${b}__handle ${b}__handle--top"
          icon="handle"
          inline-style="fill: var(${c$1})"
          size="14"
        ></spark-scan-view-icon>
        <p id="messageElement">${this.message}</p>
        <spark-scan-view-icon
          class="${b}__handle ${b}__handle--bottom"
          icon="handle"
          inline-style="fill: var(${c$1})"
          size="14"
        ></spark-scan-view-icon>
      </div>

      <style>
        ${b} {
          display: flex;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }

        ${b} #messageElement {
          width: 68%;
          margin: 0 auto;
          color: var(${c$1});
        }

        .${b} {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(80dvw - ${64}px);
          height: 220px;
          max-width: calc(320px - ${64}px);
          background: var(${a$3});
          color: white;
          font-family: sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
          text-transform: uppercase;
          cursor: pointer;
          user-select: none;
        }

        ${b}[active] .${b} {
          background: var(${b$1});
        }

        .${b}__handle {
          position: absolute;
          display: flex;
          width: 14px;
          height: 6px;
        }

        ${b}:not([${f}])
          .${b}__handle {
          right: 12px;
        }

        ${b}[${f}]
          .${b}__handle {
          left: 12px;
        }

        .${b}__handle--top {
          top: 8px;
        }

        .${b}__handle--bottom {
          bottom: 8px;
        }
      </style>
    `,this.messageElement=this.querySelector("#messageElement");}onFadeOutAnimationFinish(){this.messageElement&&(this.fadeInAnimation=new Animation(new KeyframeEffect(this.messageElement,[{opacity:0},{opacity:1}],{duration:g,fill:v})),this.messageElement.textContent=this.message,this.fadeInAnimation.play());}onPointerDown(t){this.dispatchEvent(new CustomEvent(b$2,{bubbles:!0,detail:{clientX:t.clientX,clientY:t.clientY}}));}connectedCallback(){this.render(),this.addEventListener("pointerdown",this.pointerDownListener);}disconnectedCallback(){var t,s,o;(t=this.fadeOutAnimation)==null||t.removeEventListener("finish",this.fadeOutAnimationFinishListener),(s=this.fadeOutAnimation)==null||s.cancel(),(o=this.fadeInAnimation)==null||o.cancel(),this.removeEventListener("pointerdown",this.pointerDownListener);}attributeChangedCallback(){this.messageElement&&(this.fadeOutAnimation=new Animation(new KeyframeEffect(this.messageElement,[{opacity:1},{opacity:0}],{duration:g,fill:v})),this.fadeOutAnimation.addEventListener("finish",this.fadeOutAnimationFinishListener,{once:!0}),this.fadeOutAnimation.play());}};a.observedAttributes=["message"];

export { a };
