import { a } from './chunk-GDJIQ3LO.js';
import { ScanditHTMLElement, html, defineCustomElements, css, waitTransitionEndForElement } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var l="--position",x=(a=>(a.Collapsed="collapsed",a.WillCollapse="willcollapse",a.Expanded="expanded",a.WillExpand="willexpand",a.Tap="cardtap",a))(x||{}),g="cubic-bezier(0.4, 0, 0.2, 1)",s=class s extends ScanditHTMLElement{constructor(){super();this.onCardClickHandler=this.onCardClick.bind(this);this.updateFadeMaskHandler=this.updateFadeMask.bind(this);let t=this.attachShadow({mode:"open"});t.prepend(s.createStyleElement().cloneNode(!0));let e=document.createElement("div");if(e.role="list",e.id="root",e.innerHTML=html`<slot></slot>`,t.append(e),!CSS.supports("mask-image","linear-gradient(black, white)")){let o=document.createElement("div");o.innerHTML='<div class="fade top"></div><div class="fade bottom"></div>',o.classList.add("fade-layer"),t.prepend(o);}}set collapsed(t){if(!t){this.removeAttribute("collapsed");return}this.setAttribute("collapsed",t.toString());}get collapsed(){return !!this.getAttribute("collapsed")}get items(){return this.querySelectorAll(a.tag)}get root(){var t;return (t=this.shadowRoot)==null?void 0:t.querySelector("#root")}static create(){return document.createElement(s.tag)}static register(){defineCustomElements({[s.tag]:s});}static createStyleElement(){return css`
      :host {
        --top-offset: 0rem;
        --list-height: 600px;
        --animation-function: ${g};
        --max-expanded-height: calc(var(--list-height) - var(--top-offset));
        --max-collapsed-height: 115px;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        width: 100%;
      }

      :host #root {
        display: block;
        transform-style: preserve-3d;
        cursor: pointer;
        height: calc(var(--max-expanded-height));
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        transition: height 0.6s var(--animation-function);
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) var(--end-top-mask, 0%),
          rgba(0, 0, 0, 1) var(--start-bottom-mask, 95%),
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      :host .fade-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
      }

      :host([collapsed]) .fade-layer div.fade {
        opacity: 0 !important;
      }
      :host .fade-layer div.fade {
        position: absolute;
        height: 64px;
        width: 100%;
        z-index: 1;
        opacity: 0;
      }

      :host .fade-layer div.fade.top {
        top: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.45), transparent);
      }

      :host .fade-layer div.fade.bottom {
        bottom: 0px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.45), transparent);
      }

      :host #root::-webkit-scrollbar {
        display: none;
      }

      :host([collapsed]) #root {
        height: var(--max-collapsed-height);
        mask: none;
        overflow: hidden;
      }

      ::slotted(${a.tag}) {
        --position: 0;
        --animation-duration: 0.5s;
        --margin-bottom: calc(0.5rem * var(--position));
        --translate-y-value: calc((var(--position) * 100%) + var(--margin-bottom));
        --scale: 1;

        position: absolute;
        width: 100%;
        transform: translateY(var(--translate-y-value)) scale(var(--scale));
        z-index: calc((var(--position) * -1));
        transition: transform var(--animation-duration) var(--animation-function),
          opacity var(--animation-duration) var(--animation-function);
        will-change: transform, opacity;
        opacity: 1;
      }

      :host([collapsed]) ::slotted(${a.tag}) {
        --translate-y-value: calc(var(--position) * 10%);
        --scale: calc(1 - (var(--position) * 0.05));
        opacity: 1;
      }

      :host([collapsed]) ::slotted(${a.tag}:nth-child(3)) {
        opacity: 0.5;
      }

      :host([collapsed]) ::slotted(${a.tag}:nth-child(n+4)) {
        opacity: 0;
      }
    `}connectedCallback(){var t;this.addEventListener("click",this.onCardClickHandler),(t=this.root)==null||t.addEventListener("scroll",this.updateFadeMaskHandler),this.updateFadeMaskHandler();}disconnectedCallback(){var t;this.removeEventListener("click",this.onCardClickHandler),(t=this.root)==null||t.removeEventListener("scroll",this.updateFadeMaskHandler);}attributeChangedCallback(t,e,o){t==="collapsed"&&(this.hasAttribute("collapsed")?this.collapse():this.expand());}renderCards(t){let e=document.createDocumentFragment();for(let[o,a]of Object.entries(t))a.dataset.position=`${o}`,a.style.setProperty(l,o.toString()),e.append(a);this.append(e);}clearCards(){for(let t of this.querySelectorAll(a.tag))t.remove();}async unshift(t){if(t.dataset.position==="0"&&t.style.getPropertyValue(l)==="0")return;let e=new Animation(new KeyframeEffect(t,[{transform:"translateY(-100%)",scale:1.05,opacity:0},{transform:"translateY(0%)",scale:1,opacity:1}],{duration:500,easing:g}));t.remove(),t.dataset.position="0",t.style.setProperty(l,"0");let o="0";for(let[a,r]of Object.entries(this.items))o=`${Number(a)+1}`,r.dataset.position=o,r.style.setProperty(l,o);this.prepend(t),e.play(),await e.finished;}onCardClick(t){this.dispatchEvent(new CustomEvent("cardtap",{detail:{card:t.target}}));}updateFadeMask(t){var h,m,v,u,f;let{scrollTop:e=0,scrollHeight:o=0,clientHeight:a=0}=(h=t==null?void 0:t.target)!=null?h:this.root,r=o-a,i=Math.round(e/r*100);if(Number.isNaN(i))return;(m=this.root)==null||m.style.setProperty("--end-top-mask",`${Math.min(i,5)}%`),(v=this.root)==null||v.style.setProperty("--start-bottom-mask",`${Math.max(i,95)}%`);let c=(u=this.shadowRoot)==null?void 0:u.querySelector(".fade.top"),p=(f=this.shadowRoot)==null?void 0:f.querySelector(".fade.bottom");c!=null&&p!=null&&(c.style.setProperty("opacity",`${i/100}`),p.style.setProperty("opacity",`${1-i/100}`));}async toggle(t){var a;let e=[];t==="collapsed"&&((a=this.root)==null||a.scrollTo({behavior:"instant",top:0}));let o={collapsed:"willcollapse",expanded:"willexpand"}[t];this.dispatchEvent(new CustomEvent(o));for(let[r,i]of Object.entries(this.items))Number(r)!==0&&e.push(waitTransitionEndForElement(i)),t==="expanded"&&i.style.removeProperty("opacity"),i.style.setProperty(l,r);await Promise.all(e),this.dispatchEvent(new CustomEvent(t)),this.updateFadeMaskHandler();}async expand(){await this.toggle("expanded");}async collapse(){await this.toggle("collapsed");}};s.tag="scandit-find-card-list",s.observedAttributes=["collapsed"];var d=s;d.register();

export { x as a, d as b };
