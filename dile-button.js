import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * # `dile-button`
 *
 * Polymer Web Component to implement a simple animated button
 *
 * `<dile-button>`
 *
 * This components accepts a "role" property to styling.
 * Also a boolean property called "disabled" to disable the button.
 *
 * Clicks on the button produces a CSS animation, when the button disabled property is false.
 *
 * ```html
 * <dile-button
 *   role="primary"
 *   disabled
 * ></dile-timestamp-to-date>
 * ```

 * Custom property | Description | Default
 * ----------------|-------------|---------
 * --dile-button-padding | Padding applied to the buttton box | 10px
 * --dile-button-box | Mixind applied to the button box | {}
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DileButton extends (class extends PolymerElement {}) {
  static get template() {
    return html`
    <style>
      :host {
        display: inline;
        user-select: none
      }
      .undefined {
        background-color: #868e96;
      }
      .primary {
        background-color: #007bff
      }
      .danger {
        background-color: #dc3545
      }
      .success {
        background-color: #28a745        
      }
      .warning {
        background-color: #ffc107        
      }
      div {
        color: #fff;
        border-radius: 5px;
        border: none;
        padding: var(--dile-button-padding, 10px);
        cursor:pointer;
        outline:none;
        display: inline-block;
        -webkit-animation-duration: 0.3s; 
        animation-duration: 0.3s; 
        -webkit-animation-fill-mode: both; 
        animation-fill-mode: both; 
        -webkit-animation-timing-function: ease-in; 
        animation-timing-function: ease-in;
        @apply --dile-button-box;
      }
      div:active{ 
        -webkit-animation-name: anim; 
        animation-name: anim; 
      }
      @keyframes anim { 
        0% {transform: scale(1);} 
        10%, 30% {transform: scale(0.9) rotate(-2deg);}  
        100% {transform: scale(1) rotate(0);} 
      } 
      .disabled {
        opacity: 0.5;
      }
      .disabled:active {
        animation-name: none;
      }
      div:active{ 
        -webkit-animation-name: anim; 
        animation-name: anim; 
      }

    </style>
    <div on-click="_onClick" class\$="[[cssClass]]">
      [[label]]
    </div>
`;
  }

  static get is() { return 'dile-button'; }
  static get properties() {
    return {
      /**
      * The text displayed in the button
      * @type {String}
      */
      label: {
        type: String,
        value: 'dile-button'
      },

      /**
      * The role of the button. This property configures the button color
      * Values accepted: 'undefined', 'primary', 'danger', 'warning', 'success'.
      * Default: 'undefined'.
      * @type {String}
      */
      role: {
        type: String,
        value: 'undefined'
      },

      /**
      * The computed CSS Class.
      * @type {Boolean}
      */
      cssClass: {
        type: String,
        computed: '_changeClass(role, disabled)'
      },

      /**
      * Disabled property disables the button (disabled buttons stops click propagation events).
      * @type {Boolean}
      */
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  _changeClass(role, disabled) {
    let newClass = role;
    if (disabled) {
      newClass += ' disabled';
    }
    return newClass;
  }


  _onClick(e) {
    if(this.disabled) {
      e.stopPropagation();
    }
  }
}

window.customElements.define(DileButton.is, DileButton);