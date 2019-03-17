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
  BaseElement,
  customElement,
  query,
  Foundation,
  html,
  Adapter,
  property
} from "@material/mwc-base/base-element";
import { classMap } from "lit-html/directives/class-map";
import { style } from "./mwc-card-css.js";
import MDCFoundation from "@material/base/foundation";
import "@material/mwc-icon/mwc-icon-font";
import "@material/mwc-ripple/mwc-ripple";

export interface CardFoundation extends Foundation {}

export declare var CardFoundation: {
  prototype: CardFoundation;
  new (adapter: Adapter): CardFoundation;
};

@customElement("mwc-card" as any)
export class Card extends BaseElement {
  @query(".mdc-card")
  protected mdcRoot!: HTMLElement;

  protected mdcFoundation!: CardFoundation;

  protected readonly mdcFoundationClass: typeof CardFoundation = MDCFoundation;

  @property({ type: Boolean })
  stroke = false;

  @query("slot")
  protected slotEl!: HTMLSlotElement;

  @query('slot[name="menu"]')
  protected slotMenu!: HTMLSlotElement;

  @property({ type: String })
  aspectRatio =  '';

  static styles = style;

  render() {
    const mediaStyles = this.aspectRatio ? 'mdc-card__media--' + this.aspectRatio : '';

    return html`
      <div class="mdc-card ${classMap({ "mdc-card--stroked": this.stroke })}">
        <div class="mdc-card__primary-action" tabindex="0">
          <div class="mdc-card__media ${mediaStyles}">
            <div class="mdc-card__media-content">
              <slot name="media"></slot>
            </div>
          </div>

          <slot name="content"></slot>
          <mwc-ripple></mwc-ripple>
        </div>

        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <slot name="action-buttons"></slot>
          </div>

          <div class="mdc-card__action-icons">
            <slot name="action-icons"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mwc-card": Card;
  }
}
