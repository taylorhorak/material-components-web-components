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

  protected expandListItem() {
    if (this.expandable) {
      this.lockScroll(true);

      setTimeout(() => {
        const wrapper: any = this.mdcRoot.querySelector(
          ".mdc-list-item__wrapper"
        );
        const expandedContent: any = this.mdcRoot.querySelector(
          ".mdc-list-item__expanded-content"
        );

        this.mdcRoot.classList.add("mdc-list-item--expanded");

        wrapper.style.width = `calc(100% + ${this.mdcRootPosition.left *
          2}px)`;
          wrapper.style.left = `-${this.mdcRootPosition.left}px`;
        wrapper.classList.add(
          "mdc-list-item__wrapper--expanded"
        );
        wrapper.style.top = `-${this.mdcRootPosition.top}px`;
        expandedContent.style.top = `${this.mdcRootPosition.top}px`;
        expandedContent.style.transform = `translateY(-${
          this.mdcRootPosition.top
        }px)`;
      }, 170);
    }
  }

  protected closeListItem(e) {
    if (this.expandable) {
      const wrapper: any = this.mdcRoot.querySelector(
        ".mdc-list-item__wrapper"
      );
      const expandedContent: any = this.mdcRoot.querySelector(
        ".mdc-list-item__expanded-content"
      );

      wrapper.style.top = `0`;
      expandedContent.style.top = `0`;
      expandedContent.style.transform = `translateY(0)`;
      
      wrapper.classList.remove(
        "mdc-list-item__wrapper--expanded"
      );
      setTimeout(() => {
        this.mdcRoot.classList.remove("mdc-list-item--expanded");
        wrapper.style.width = `100%`;
        wrapper.style.left = `0`;
        this.lockScroll(false);
      }, 1200);
    }

    e.stopPropagation();
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
                  <span
                    class="mdc-list-item__close"
                    @click="${this.closeListItem}"
                  ></span>
                  <slot name="expanded"></slot>
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
