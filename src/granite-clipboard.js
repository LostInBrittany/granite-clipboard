/*
@license MIT
Copyright (c) 2016-2020 Horacio "LostInBrittany" Gonzalez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { html, css, LitElement } from 'lit-element';
import Clipboard from '@migrate-to-esm/clipboard/src/clipboard';

/**
 * A simple, lightweight element wrapping-up [clipboard.js](https://clipboardjs.com/)
 *
 * @element granite-clipboard
 *
 * @prop {copy|cut} action -  The action (copy or cut).
 * @prop {Boolean} debug - If debug is true, the components logs its actions on the console.
 * @prop {String} text - The text to copy. { reflect: true }
 *
 * @event {CustomEvent<String>} clipboard-cut - Fires whenever a cut to clipboard action is done.
 * @event {CustomEvent<String>} clipboard-copy - Fires whenever a copy to clipboard action is done.
 */
export class GraniteClipboard extends LitElement {
  static get properties() {
    return {
      action: { type: String },
      debug: { type: Boolean },
      text: { type: String, reflect: true },
    };
  }

  get action() {
    return this._action;
  }

  set action(val) {
    /* istanbul ignore next */ 
    if (this.debug) {
      console.log('[granite-clipboard] set action', val);
    }
    let oldVal = this._action;
    if (!this._allowedValues) {
      return;
    }
    if (this._allowedValues.indexOf(val) < 0) {
      this._action = this._allowedValues[0];
    } else {
      this._action = val;
    }
    this.requestUpdate('action', oldVal);
  }

  constructor() {
    super();
    this.debug = false;
    this.text = '';
    this._action = 'copy';
    this._allowedValues = ['copy', 'cut'];
  }

  // Event listeners
  _onClipboardSuccess(evt) {
    /* istanbul ignore next */ 
    if (this.debug) {
      console.debug("[granite-clipboard] _onClipboardSuccess", evt);
    }
    this.dispatchEvent(new CustomEvent("clipboard-" + this._action, {
      bubbles: true,
      composed: true,
      detail: evt
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this._action) {
      this._action = 'copy';
    }
  }

  firstUpdated() {
    /* istanbul ignore next */ 
    if (this.debug) {
      console.log('[granite-clipboard] firstUpdated');
    }

    this.clipboard = new Clipboard(this.shadowRoot.querySelector('#container'));
    this.clipboard.on('success', this._onClipboardSuccess.bind(this));
  }
  
  shouldUpdate() {
    /* istanbul ignore next */ 
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
}

window.customElements.define('granite-clipboard', GraniteClipboard);