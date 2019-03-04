/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {
  customElement,
  query,
  html,
  property,
  observer
} from '@authentic/mwc-base/base-element.js';
import { LitElement } from 'lit-element';
import { ripple } from '@authentic/mwc-ripple/ripple-directive';

import { style } from './mwc-list-item-css.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-list-item': ListItem;
  }
}

@customElement('mwc-list-item' as any)
export class ListItem extends LitElement {

  @query('.mdc-list-item')
  mdcRoot!: HTMLElement;

  @property({ type: String })
  value = '';

  @property({ type: String })
  label = '';

  @property({ type: String })
  icon = '';

  @property({ type: Number })
  tabindex = 0;

  @property({ type: Boolean })
  leading = 0;

  @property({ type: Boolean })
  @observer(function (this: ListItem, value: Boolean) {
    this.setAttribute('aria-disabled', String(value));
  })
  disabled = false;

  get classList() {
    return this.mdcRoot.classList;
  }

  get setAttribute() {
    return this.mdcRoot ? this.mdcRoot.setAttribute : () => { };
  }

  static styles = style;

  render() {
    const { disabled, tabindex } = this;

    return html`
      <div class="mdc-list-item" role="menuitem" tabindex="${tabindex}" aria-disabled="${disabled}" .ripple="${ripple({ unbounded: false })}">
        ${this._renderLeading()}
        ${this.label || ''}
        <slot name="text"></slot>
        <span class="mdc-list-item__text">
          <span class="mdc-list-item__primary-text">
            <slot name="primary-text"></slot>
          </span>
          <span class="mdc-list-item__secondary-text">
            <slot name="secondary-text"></slot>
          </span>
        </span>
        <span class="mdc-list-item__meta">
          <slot name="meta"></slot>
        </span>
        <slot></slot>
      </div>`;
  }

  _renderLeading() {
    if (this.leading) {
      return html`
        <span class="mdc-list-item__graphic">
          <slot name="graphic"></slot>
        </span>
      `;
    }

    if (this.icon) {
      return html`
        <span class="mdc-list-item__graphic material-icons">
          ${this.icon}
        </span>
      `;
    }

    return '';
  }

  focus() {
    this.mdcRoot.focus();
  }
}
