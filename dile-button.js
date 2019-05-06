import { LitElement, html, css } from 'lit-element';

/**
 * # `dile-button`
 *
 *  Web Component to implement a simple animated button, based on LitElement
 *
 * `<dile-button>`
 *
 * This components accepts a "role" property to styling. Accepted values are: undefined, primary, danger, warning, success
 * 
 * Implements a boolean property called "disabled" to disable the button.
 *
 * Clicks on the button produces a CSS animation, but only when the button disabled property is false.
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
 * --dile-button-border-width | Border applied to the button box | 0
 * --dile-button-boder-color | Border color applied to the button box | transparent 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class DileButton extends LitElement {

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      :host {
        display: inline-block;
        user-select: none;
      }
      .undefined {
        background-color: #868e96;
      }
      .primary {
        background-color: #007bff;
      }
      .danger {
        background-color: #dc3545;
      }
      .success {
        background-color: #28a745;       
      }
      .warning {
        background-color: #ffc107;       
      }
      div {
        display: inline-block;
        color: #fff;
        background-color: #888;
        border-radius: 5px;
        border: var(--dile-button-border-width) solid var(--dile-button-border-color);
        padding: var(--dile-button-padding, 10px);
        cursor:pointer;
        outline:none;
        -webkit-animation-duration: 0.3s; 
        animation-duration: 0.3s; 
        -webkit-animation-fill-mode: both; 
        animation-fill-mode: both; 
        -webkit-animation-timing-function: ease-in; 
        animation-timing-function: ease-in;
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
      div.disabled {
        opacity: 0.5;
      }
      .disabled:active {
        -webkit-animation-name: none; 
        animation-name: none;
      }
    `; 
  }
  render() {
    return html`
      <div @click="${this._onClick}" class="${this._getClass(this.role, this.disabled)}">
        <slot></slot>
      </div>
    `;
  }

  static get properties() {
    return {
      /**
      * The role of the button. This property configures the button color
      * Values accepted: 'undefined', 'primary', 'danger', 'warning', 'success'.
      * Default: 'undefined'.
      * @type {String}
      */
      role: { type: String },

      /**
      * Disabled property disables the button (disabled buttons stops click propagation events).
      * @type {Boolean}
      */
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.role = 'undefined';  
  }

  _getClass(role, disabled) {
    return role + (disabled ? ' disabled' : '');
  }

  _onClick(e) {
    if(this.disabled) {
      e.stopPropagation();
    }
  }
}
customElements.define('dile-button', DileButton);
