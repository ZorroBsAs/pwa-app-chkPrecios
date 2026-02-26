import { b } from './chunk-PM7KMZTH.js';
import { a } from './chunk-ME7CY44C.js';
import { ScanditHTMLElement, html, defineCustomElements, css } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var n="cubic-bezier(0.4, 0, 0.2, 1)",C=(o=>(o.TextForCollapseCardsButton="text-for-collapse-cards-button",o))(C||{}),e=class e extends ScanditHTMLElement{constructor(){super();this.onCarListTapHandler=this.onCarListTap.bind(this);this.onCardListWillExpandHandler=this.onCardListWillExpand.bind(this);this.onCarouselButtonClickHandler=this.onCarouselButtonClick.bind(this);this.textNode=document.createTextNode("");let t=this.attachShadow({mode:"open"});t.append(e.createStyleElement().cloneNode(!0));let i=document.createElement("div");i.id="root",i.innerHTML=html`
      <${a.tag} class="hide">
      </${a.tag}>
      <${b.tag} collapsed></${b.tag}>
    `,t.append(i),this.carouselButton.append(this.textNode);}set"text-for-collapse-cards-button"(t){this.textNode.textContent=t;}get"text-for-collapse-cards-button"(){return this.textNode.textContent}get cardsList(){return this.shadowRoot.querySelector(b.tag)}get carouselButton(){return this.shadowRoot.querySelector(a.tag)}static create(){return document.createElement(e.tag)}static register(){defineCustomElements({[e.tag]:e});}static createStyleElement(){return css`
      :host #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        height: 100%;
      }

      :host #root ${a.tag} {
        transition: opacity 0.5s ${n}, transform 0.5s ${n};
        opacity: 1;
        transform: translateY(0);
      }
      :host #root ${a.tag}.hide {
        opacity: 0;
        transform: translateY(100%);
      }
    `}attributeChangeCallback(t,i,d){t==="text-for-collapse-cards-button"&&(this["text-for-collapse-cards-button"]=d);}connectedCallback(){this.textNode.textContent=this.getAttribute("text-for-collapse-cards-button"),this.carouselButton.addEventListener("click",this.onCarouselButtonClickHandler),this.cardsList.addEventListener("cardtap",this.onCarListTapHandler),this.cardsList.addEventListener("willexpand",this.onCardListWillExpandHandler);}updateHeight(t){let i=this.carouselButton.getBoundingClientRect().height;this.cardsList.style.setProperty("--list-height",`${t}px`),this.cardsList.style.setProperty("--top-offset",`calc(${i===0?32:i}px + 5rem)`);}disconnectedCallback(){this.carouselButton.removeEventListener("click",this.onCarouselButtonClickHandler),this.cardsList.removeEventListener("cardtap",this.onCarListTapHandler),this.cardsList.removeEventListener("willexpand",this.onCardListWillExpandHandler);}collapse(){this.carouselButton.classList.add("hide"),this.cardsList.collapsed=!0;}expand(){this.carouselButton.classList.remove("hide"),this.cardsList.collapsed=!1;}renderCards(t){this.cardsList.clearCards(),this.cardsList.renderCards(t);}async unshiftCard(t){return this.cardsList.unshift(t)}getCardBySelector(t){return this.cardsList.querySelector(t)}onCardListWillExpand(){this.carouselButton.classList.remove("hide");}onCarListTap(){this.cardsList.collapsed=!1;}onCarouselButtonClick(){this.carouselButton.classList.add("hide"),this.cardsList.collapsed=!0;}};e.tag="scandit-find-card-list-container",e.observedAttributes=["text-for-collapse-cards-button"];var r=e;r.register();

export { C as a, r as b };
