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
} from "@material/mwc-base/base-element.js";
import { LitElement } from "lit-element";
import { ripple } from "@material/mwc-ripple/ripple-directive";

import { style } from "./mwc-list-item-css.js";

declare global {
  interface HTMLElementTagNameMap {
    "mwc-list-item": ListItem;
  }
}

@customElement("mwc-list-item" as any)
export class ListItem extends LitElement {
  mdcRootPosition: any;

  @query(".mdc-list-item__expanded-content")
  expandedContent!: HTMLElement;

  @query(".mdc-list-item__wrapper")
  wrapper!: HTMLElement;

  @query(".mdc-list-item")
  mdcRoot!: HTMLElement;

  @property({ type: Boolean })
  expandable = false;

  @property({ type: String })
  value = "";

  @property({ type: String })
  label = "";

  @property({ type: String })
  icon = "";

  @property({ type: Number })
  tabindex = 0;

  @property({ type: Boolean })
  leading = 0;

  @property({ type: Boolean })
  @observer(function(this: ListItem, value: Boolean) {
    this.setAttribute("aria-disabled", String(value));
  })
  disabled = false;

  get classList() {
    return this.mdcRoot.classList;
  }

  get setAttribute() {
    return this.mdcRoot ? this.mdcRoot.setAttribute : () => {};
  }

  static styles = style;

  firstUpdated() {
    this.mdcRootPosition = this.mdcRoot.getBoundingClientRect();
  }

  protected changeWrapperStyles(wrapperWidth: string, wrapperLeft: string) {
    this.wrapper.style.width = wrapperWidth;
    this.wrapper.style.left = wrapperLeft;
  }

  protected changeExpandedContentStyles(
    contentTop: string,
    contentTransform: string,
    wrapperTop: string
  ) {
    this.expandedContent.style.top = contentTop;
    console.log(contentTop);
    this.expandedContent.style.transform = contentTransform;
    console.log(contentTransform);
    this.wrapper.style.top = wrapperTop;
  }

  protected closeListItem(e) {
    if (this.expandable) {
      this.wrapper.classList.remove("mdc-list-item__wrapper--expanded");
      // this.changeExpandedContentStyles("0", "translateY(0)", "0");

      this.expandedContent.style.transform = 'translateY(0)';

      setTimeout(() => {
        this.wrapper.style.top = '0';
        this.expandedContent.style.top = '0';

        this.mdcRoot.classList.remove("mdc-list-item--expanded");
        this.changeWrapperStyles("100%", "0");
        this.lockScroll(false);
      }, 1200);
    }

    e.stopPropagation();
  }

  protected expandListItem() {
    if (this.expandable) {
      this.lockScroll(true);

      setTimeout(() => {
        this.mdcRoot.classList.add("mdc-list-item--expanded");
        this.changeWrapperStyles(
          `calc(100% + ${this.mdcRootPosition.left * 2}px)`,
          `-${this.mdcRootPosition.left}px`
        );
        this.wrapper.classList.add("mdc-list-item__wrapper--expanded");
        this.changeExpandedContentStyles(
          `${this.mdcRootPosition.top}px`,
          `translateY(-${this.mdcRootPosition.top}px)`,
          `-${this.mdcRootPosition.top}px`
        );
      }, 170);
    }
  }

  protected lockScroll(status: boolean): void {
    const body: HTMLBodyElement | null = document.querySelector("body");
    const html: HTMLElement | null = document.querySelector("html");

    if (body && html) {
      html.style.height = status ? "100%" : "auto";
      html.style.overflow = status ? "hidden" : "auto";
      body.style.height = status ? "100%" : "auto";
      body.style.overflow = status ? "hidden" : "auto";
    }
  }

  render() {
    const { disabled, tabindex } = this;

    return html`
      <div
        class="mdc-list-item "
        role="menuitem"
        @click="${this.expandListItem}"
        tabindex="${tabindex}"
        aria-disabled="${this.expandable ? true : disabled}"
        .ripple="${ripple({ unbounded: false })}"
      >
        ${this._renderLeading()} ${this.label || ""}
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

        ${this.expandable
          ? html`
              <div class="mdc-list-item__wrapper">
                <div class="mdc-list-item__expanded-content">
                  <div>
                    <span
                      class="mdc-list-item__close"
                      @click="${this.closeListItem}"
                    ></span>
                    <slot name="expanded"></slot>
                  </div>
                </div>
              </div>
            `
          : null}

        <slot></slot>
      </div>
    `;
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

    return "";
  }

  focus() {
    this.mdcRoot.focus();
  }
}
