import { a as a$2 } from './chunk-CPM4VANL.js';
import { l, m, n } from './chunk-YU4ASL7B.js';
import { a as a$1 } from './chunk-NBCMCH45.js';
import { q, p, a } from './chunk-4DWE45HU.js';
import { d, c, g as g$1 } from './chunk-5QURV46Q.js';
import { ScanditHTMLElement, defineCustomElements, html, Timeout } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var g=(t=>(t.ResizeButton="resizeButton",t.ZoomButton="zoomButton",t))(g||{}),E=1200,h=class extends ScanditHTMLElement{constructor(){super(...arguments);this.swiping=!1;this.resizeButtonTapListener=this.onResizeButtonTap.bind(this);this.zoomButtonTapListener=this.onZoomButtonTap.bind(this);this.pointerDownListener=this.onPointerDown.bind(this);this.pointerMoveListener=this.onPointerMove.bind(this);this.pointerUpListener=this.onPointerUp.bind(this);this.fadeOutAnimation=new Animation(new KeyframeEffect(this,[{opacity:1},{opacity:0}],{duration:500,fill:"both"}));this.replayFadeOutTimeout=null;this.viewportFitCoverEnabled=!1;}get visible(){return this.hasAttribute("visible")}set visible(t){this.toggleAttribute("visible",t);}get expanded(){return this.hasAttribute("expanded")}set expanded(t){this.toggleAttribute("expanded",t);}get[a](){var t;return Number((t=this.getAttribute(a))!=null?t:"1")}set[a](t){this.setAttribute(a,String(t));}get darkened(){return this.hasAttribute("darkened")}set darkened(t){this.toggleAttribute("darkened",t);}get orientation(){var t;return (t=this.getAttribute("orientation"))!=null?t:"portrait-primary"}set orientation(t){this.setAttribute("orientation",t);}get[q](){return this.hasAttribute(q)}set[q](t){this.toggleAttribute(q,t);}get[p](){return this.hasAttribute(p)}set[p](t){this.toggleAttribute(p,t);}static create(){return defineCustomElements({[d]:this,[c]:a$1,[g$1]:a$2}),document.createElement(d)}showToast(t,i,o){this.toast.show(t,i,o);}hideToast(){this.toast.hide();}zoomIn(){this.zoomButton&&(this[a]=2,this.zoomButton.textContent="2x",this.showToast("warning","2x zoom",1e3));}zoomOut(){this.zoomButton&&(this[a]=1,this.zoomButton.textContent="1x",this.showToast("info","1x zoom",1e3));}async fadeOut(){try{this.fadeOutAnimation.play(),await this.fadeOutAnimation.finished,this.visible=!1;}catch(t){}}cancelFadeOut(){var t;(t=this.replayFadeOutTimeout)==null||t.stop(),this.fadeOutAnimation.cancel();}async rewindAnimation(){var t,i;(((t=this.replayFadeOutTimeout)==null?void 0:t.running)===!0||this.fadeOutAnimation.playState!=="idle")&&(this.cancelFadeOut(),(i=this.replayFadeOutTimeout)==null||i.start());}render(){var t,i,o;this.innerHTML=html`
      <spark-scan-view-toast></spark-scan-view-toast>
      <div id="host"></div>
      <div class="${d}__button-container">
        ${this[q]?html`
              <button id="resizeButton" class="${d}__button">
                <spark-scan-view-icon icon="expand" fill="white" size="14"></spark-scan-view-icon>
              </button>
            `:""}
        ${this[p]?html`
              <button id="zoomButton" class="${d}__button">
                ${this[a]}x
              </button>
            `:""}
      </div>
      <div id="overlay"></div>

      <style>
        ${d} {
          position: fixed;
          top: calc(${this.viewportFitCoverEnabled?"env(safe-area-inset-top)":"0px"} + 16px);
          display: none;
          background: black;
          border-radius: 16px;
          box-shadow: 0 2px 6px 2px rgba(18, 22, 25, 0.15), 0 1px 2px 0 rgba(18, 22, 25, 0.3);
        }

        ${d}[orientation="portrait-primary"],
        ${d}[orientation="portrait-secondary"],
        ${d}[orientation="landscape-secondary"],
        ${d}[orientation="portrait-primary"] #overlay,
        ${d}[orientation="portrait-secondary"] #overlay,
        ${d}[orientation="landscape-secondary"] #overlay {
          right: calc(${this.viewportFitCoverEnabled?"env(safe-area-inset-right)":"0px"} + 16px);
        }

        ${d}[orientation="landscape-primary"],
        ${d}[orientation="landscape-primary"] #overlay {
          left: calc(${this.viewportFitCoverEnabled?"env(safe-area-inset-left)":"0px"} + 16px);
        }

        ${d},
        ${d} #overlay {
          width: 50dvw;
          height: 50dvw;
          min-width: 192px;
          min-height: 192px;
          max-width: min(250px, 50dvw);
          max-height: min(250px, 50dvw);
        }

        @media (orientation: landscape) {
          ${d},
          ${d} #overlay {
            width: 50dvh;
            height: 50dvh;
            max-width: min(250px, 50dvh);
            max-height: min(250px, 50dvh);
          }
        }

        @media screen (min-width: 768px) and (orientation: portrait) {
          ${d},
          ${d} #overlay {
            max-width: min(375px, 50dvw);
            max-height: min(375px, 50dvw);
          }
        }

        @media screen (min-width: 768px) and (orientation: landscape) {
          ${d},
          ${d} #overlay {
            max-width: min(375px, 50dvh);
            max-height: min(375px, 50dvh);
          }
        }

        ${d}[visible] {
          display: block;
        }

        ${d}[expanded],
        ${d}[expanded] #overlay {
          width: calc(100dvw - ${32}px);
          height: calc(50dvh - ${32}px);
          max-width: min(400px, calc(100dvw - ${32}px));
          max-height: min(400px, calc(50dvh - ${32}px));
        }

        @media (orientation: landscape) {
          ${d}[expanded],
          ${d}[expanded] #overlay {
            width: calc(50dvw - ${32}px);
            height: calc(100dvh - ${32}px);
            max-width: min(400px, calc(50dvw - ${32}px));
            max-height: min(400px, calc(100dvh - ${32}px));
          }
        }

        spark-scan-view-toast {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        ${d} #host {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }

        ${d} #host * {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }

        .${d}__button-container {
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          width: 100%;
          padding: 12px;
        }

        .${d}__button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border: none;
          background: rgba(18, 22, 25, 0.5);
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 50%;
        }

        ${d} #overlay {
          position: fixed;
          z-index: 10;
          top: 16px;
          right: 16px;
          background: black;
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        ${d}[darkened] #overlay {
          opacity: 0.3;
        }
      </style>
    `,this.toast=this.querySelector("spark-scan-view-toast"),this.host=this.querySelector("#host"),this.resizeButton=this.querySelector("#resizeButton"),(t=this.resizeButton)==null||t.addEventListener("pointerup",this.resizeButtonTapListener),this.resizeButtonIcon=(i=this.resizeButton)==null?void 0:i.querySelector("spark-scan-view-icon"),this.zoomButton=this.querySelector("#zoomButton"),(o=this.zoomButton)==null||o.addEventListener("pointerup",this.zoomButtonTapListener),this.overlay=this.querySelector("#overlay"),this.addEventListener("pointerdown",this.pointerDownListener),this.addEventListener("pointermove",this.pointerMoveListener),this.addEventListener("pointerup",this.pointerUpListener);}onResizeButtonTap(){this.expanded=!this.expanded,this.resizeButtonIcon&&(this.resizeButtonIcon.icon=this.expanded?"shrink":"expand"),this.dispatchEvent(new CustomEvent(l,{detail:{tapped:"resizeButton",expanded:this.expanded}}));}onZoomButtonTap(){switch(this[a]){case 1:{this.zoomIn();break}case 2:{this.zoomOut();break}}this.dispatchEvent(new CustomEvent(l,{detail:{tapped:"zoomButton",zoomFactor:this[a]}}));}onPointerDown(){this.rewindAnimation(),this.swiping=!0;}onPointerMove(t){if(!this.swiping)return;if(!this.previousPointerEvent){this.previousPointerEvent=t;return}if(!(Math.abs(t.clientY-this.previousPointerEvent.clientY)<20)){if(t.clientY<this.previousPointerEvent.clientY){this.previousPointerEvent=void 0,this.dispatchEvent(new CustomEvent(m));return}t.clientY>this.previousPointerEvent.clientY&&(this.previousPointerEvent=void 0,this.dispatchEvent(new CustomEvent(n)));}}onPointerUp(){this.swiping=!1,this.previousPointerEvent=void 0;}getViewportFitCoverEnabled(){return [...document.head.querySelectorAll("meta")].some(t=>t.name==="viewport"&&t.content.includes("viewport-fit=cover"))}connectedCallback(){this.viewportFitCoverEnabled=this.getViewportFitCoverEnabled(),this.replayFadeOutTimeout=new Timeout(E,async()=>{await this.fadeOut();}),this.render();}disconnectedCallback(){var t,i,o;(t=this.resizeButton)==null||t.removeEventListener("pointerup",this.resizeButtonTapListener),(i=this.zoomButton)==null||i.removeEventListener("pointerup",this.zoomButtonTapListener),this.removeEventListener("pointerdown",this.pointerDownListener),this.removeEventListener("pointermove",this.pointerMoveListener),this.removeEventListener("pointerup",this.pointerUpListener),this.fadeOutAnimation.cancel(),(o=this.replayFadeOutTimeout)==null||o.stop();}attributeChangedCallback(t,i,o){o!==i&&this.render();}};h.observedAttributes=[q,p];

export { g as a, h as b };
