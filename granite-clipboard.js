import { LitElement, html, css } from 'lit-element';

import  Clipboard  from '@migrate-to-esm/clipboard';

/**
 * @license MIT
 * Copyright (c) 2016 Horacio "LostInBrittany" Gonzalez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Typical usage:
 *
 * ```html
 * <granite-clipboard text="Text to be copied">
 *   <div style="width:250px;height:50px;border-radius:5px;background-color:#aaaaff;cursor:pointer;">Click here</div>
 * </granite-clipboard>
 * ```
 *
 *
 * @element granite-clipboard
 * @blurb A lightweight element wrapping-up clipboard.js
 * @homepage index.html
 * @demo demo/index.html
 * @customElement
 * @demo demo/index.html
 */
class GraniteClipboard extends LitElement {

  static get properties() {
    return {
      /**
       * The text to copy.
       */
      text: { type: String, reflect: true },
      /**
       * The action (copy or cut).
       */
      action: { type: String },      
      /**
       * If true, element logs to console
       */
      debug: { type: Boolean },
    };
  }

  set action(val) {
    if (this.debug) {
      console.log('[granite-clipboard] set action', val);
    }
    let oldVal = this._action;
    if(!this._allowedValues) {
      return;
    }
    if (this._allowedValues.indexOf(val) < 0) {
      this._action = this._allowedValues[0];
    } else {
      this._action = val;
    }
    this.requestUpdate('action', oldVal);
  }

  get action() { return this._action; }

  constructor() {
    super();
    this._action = 'copy';
    this._allowedValues = ['copy', 'cut'];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this._action) {
      this._action = 'copy';
    }
  }

  firstUpdated() {
    if (this.debug) {
      console.log('[granite-clipboard] firstUpdated');
    }

    this.clipboard = new Clipboard(this.shadowRoot.querySelector('#container'));
    this.clipboard.on('success', this._onClipboardSuccess.bind(this));
  }
  
  shouldUpdate() {
    if (this.debug) {
      console.log('[granite-clipboard] shouldUpdate');
    }
    return true;
  }

  render() {
    return html`
      <div id="container" 
          data-clipboard-text=${this.text} 
          data-clipboard-action=${this.action}>
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  // Event listeners
  _onClipboardSuccess(evt) {
    if (this.debug) {
      console.debug("[granite-clipboard] _onClipboardSuccess", evt);
    }
    this.dispatchEvent(new CustomEvent("clipboard-" + this.action, {
      bubbles: true,
      composed: true,
      detail: evt
    }));
  }
}

window.customElements.define('granite-clipboard', GraniteClipboard);
