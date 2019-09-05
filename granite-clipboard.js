import { LitElement, html } from '@polymer/lit-element';

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
      text: { type: String },
      /**
       * The action (copy or cut).
       */
      _action: { type: String },      
      /**
       * If true, element logs to console
       */
      debug: { type: Boolean },
    };
  }

  set action(anAction) {
    if (this.debug) {
      console.log('[granite-clipboard] set action', anAction);
    }
    if(!this._allowedValues) {return;}
    let new_action_index = this._allowedValues.indexOf(anAction);
    if (new_action_index < 0) {
      this._action = this._allowedValues[0];
    } else {
      this._action = this._allowedValues[new_action_index];
    }
  }

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
      <div id="container" data-clipboard-text=${this.text} data-clipboard-action=${this._action}>
        <slot></slot>
      </div>
    `;
  }

  _renderStyles() {
    return html`
      <style>
        :host {
          display: block;
        }
        .hidden {
          display: none;
        }
        .alert {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid transparent;
          border-radius: 4px;
        }
        .success {
          color: #3c763d;
          background-color: #dff0d8;
          border-color: #d6e9c6;
        }
        .info {
          color: #31708f;
          background-color: #d9edf7;
          border-color: #bce8f1;
        }
        .warning {
          color: #8a6d3b;
          background-color: #fcf8e3;
          border-color: #faebcc;
        }
        .danger {
          color: #a94442;
          background-color: #f2dede;
          border-color: #ebccd1;
      }
      </style>
    `;
  }

  _isHidden() {
    if (this.hide) {
      return 'hidden';
    }
    return '';
  }

  _checkLevel() {
    if (!this.level || this._allowedLevels.indexOf(this.level) < 0) {
      return this._allowedLevels[0]; // Set default value for `level` if unknown value is given
    }
    return this.level;
  }

  // Event listeners
  _onClipboardSuccess(evt) {
    if (this.verbose) {
      console.debug("[granite-clipboard] _onClipboardSuccess", evt);
    }
    this.dispatchEvent(new CustomEvent("clipboard-" + this._action, {
      bubbles: true,
      composed: true,
      detail: evt
    }));
  }
}

window.customElements.define('granite-clipboard', GraniteClipboard);
