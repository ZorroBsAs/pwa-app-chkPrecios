import { Orientation } from 'scandit-web-datacapture-core';
import { GestureRecognizer } from 'scandit-web-datacapture-core/build/js/private/GestureRecognizer/GestureRecognizer.js';
import { OrientationObserver, orientationChangeEvent } from 'scandit-web-datacapture-core/build/js/private/OrientationObserver.js';
import { ScanditHTMLElement, debounce, html, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var L=(r=>(r.onTap="onlayouttap",r))(L||{}),i=class i extends ScanditHTMLElement{constructor(){super();this.orientationObserver=new OrientationObserver;this.onOrientationChangeHandler=debounce(this.onOrientationChange.bind(this),50);let t=this.attachShadow({mode:"open"});t.append(i.createStyleElement().cloneNode(!0));let e=document.createElement("div");e.id="root",this.absoluteContainer=document.createElement("div"),this.absoluteContainer.classList.add("absolute-container"),this.absoluteContainer.innerHTML="<slot></slot>",t.insertBefore(this.absoluteContainer,e.nextElementSibling),e.innerHTML=html`
      <div class="wrapper">
        <div class="header">
          <slot name="progress"></slot>
          <slot name="notification-list"></slot>
          <div class="controls top">
            <div class="control left">
              <slot name="top-controls-left"></slot>
            </div>
            <div class="control center">
              <slot name="top-controls-center"></slot>
            </div>
            <div class="control right">
              <slot name="top-controls-right"></slot>
            </div>
          </div>
        </div>
        <div class="main">
          <slot name="card-list"></slot>
        </div>
      </div>
      <div class="controls">
        <div class="control left">
          <slot name="bottom-controls-left"></slot>
        </div>
        <div class="control center">
          <slot name="bottom-controls-center"></slot>
        </div>
        <div class="control right">
          <slot name="bottom-controls-right"></slot>
        </div>
      </div>
    `,t.append(e),this.gestureRecognizer=new GestureRecognizer(this.absoluteContainer);}get cardListContainer(){return this.querySelector('[slot="card-list"]')}get main(){var t;return (t=this.shadowRoot)==null?void 0:t.querySelector(".main")}static create(){return document.createElement(i.tag)}static register(){defineCustomElements({[i.tag]:i});}static createStyleElement(){return css`
      :host {
        position: absolute;
        inset: 0%;
        overflow: hidden;
        z-index: 1;
      }
      :host #root {
        --padding: 1rem;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: calc(var(--padding));
        height: 100%;
        box-sizing: border-box;
        gap: 0.5rem;
      }

      :host .absolute-container {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .main {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        gap: 0.5rem;
      }

      .controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        min-height: 85px;
        z-index: 1;
      }

      @media (orientation: landscape) {
        .controls {
          flex-direction: column;
        }
        .wrapper {
          flex: 0 70%;
          margin: 0 auto;
        }
        :host #root {
          flex-direction: row;
        }
      }

      .controls .control {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex: 1 1 25%;
      }

      .controls .control.center {
        flex: 1 1 50%;
        max-width: 5rem;
      }

      .controls.top {
        min-height: auto;
      }

      .controls.top .control.left {
        justify-content: flex-start;
      }

      .controls.top .control.right {
        justify-content: flex-end;
      }

      .header {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      ::slotted([slot="notification-list"]) {
        position: absolute;
        width: 100%;
        top: calc(var(--padding) * 2);
        z-index: 1;
      }
    `}connectedCallback(){this.orientationObserver.addEventListener(orientationChangeEvent,this.onOrientationChangeHandler),this.orientationObserver.register(),this.gestureRecognizer.addListener(this);}disconnectedCallback(){this.orientationObserver.unregister(),this.orientationObserver.removeEventListener(orientationChangeEvent,this.onOrientationChangeHandler),this.gestureRecognizer.removeListener(this);}toggleVisibility(t,e){var o;(o=this.querySelector(t))==null||o.toggleAttribute("hidden",!e);}onTap(t,e){let o=new CustomEvent("onlayouttap",{detail:{point:t,target:e.target}});this.dispatchEvent(o);}onOrientationChange(t){var o,a,s,l,c,d,p,u,m;let e=this.shadowRoot.querySelector(".controls.top");t.detail.value===Orientation.Portrait?(a=(o=this.shadowRoot)==null?void 0:o.querySelector(".header"))==null||a.append(e):(l=(s=this.shadowRoot)==null?void 0:s.querySelector("#root"))==null||l.prepend(e),(c=this.main)==null||c.style.setProperty("height","100%"),(u=this.cardListContainer)==null||u.updateHeight((p=(d=this.main)==null?void 0:d.getBoundingClientRect().height)!=null?p:0),(m=this.main)==null||m.style.setProperty("height","unset");}};i.tag="scandit-find-layout";var n=i;n.register();

export { L as a, n as b };
