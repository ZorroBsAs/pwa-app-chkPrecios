import { SvgIcon } from 'scandit-web-datacapture-core/build/js/private/ui/atoms/SvgIcon.js';
import { defineCustomElements, html } from 'scandit-web-datacapture-core/build/js/private/utils/index.js';

var e=class e extends SvgIcon{static create(){return document.createElement(e.tag)}static register(){defineCustomElements({[e.tag]:e});}render(){return html`
      <style>
        ${e.tag} {
          display: flex;
        }
      </style>
      <svg width="${this.size}" height="${this.heightForViewbox(24,24)}" viewBox="0 0 24 24" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.24076 8.34923C4.60018 7.9299 5.23148 7.88134 5.65081 8.24076L12 13.6829L18.3492 8.24076C18.7686 7.88134 19.3999 7.9299 19.7593 8.34923C20.1187 8.76855 20.0701 9.39985 19.6508 9.75927L12.6508 15.7593C12.2763 16.0803 11.7237 16.0803 11.3492 15.7593L4.34923 9.75927C3.9299 9.39985 3.88134 8.76855 4.24076 8.34923Z"
          fill="#3D4852"
          fill-opacity="0.8"
        />
      </svg>
    `}};e.tag="scandit-arrow-down-icon";var t=e;t.register();

export { t as a };
