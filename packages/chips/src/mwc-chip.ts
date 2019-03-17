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
} from "@authentic/mwc-base/base-element";
import { emit } from '@authentic/mwc-base/utils';
import { classMap } from "lit-html/directives/class-map";
import { style } from "./mwc-chip-css.js";
import { ripple } from "@authentic/mwc-ripple/ripple-directive";
import MDCChipFoundation from "@material/chips/chip/foundation";
import { strings, cssClasses } from "./constants";

import "@authentic/mwc-icon/mwc-icon-font";

export interface ChipFoundation extends Foundation {
  isSelected: void;
  handleTrailingIconInteraction_(evt): void;
  adapter_: Adapter;
}

export declare var ChipFoundation: {
  prototype: ChipFoundation;
  new (adapter: Adapter): ChipFoundation;
};

@customElement("mwc-chip" as any)
export class Chip extends BaseElement {
  @query(".mdc-chip")
  protected mdcRoot!: HTMLElement;

  protected mdcFoundation!: ChipFoundation;

  protected readonly mdcFoundationClass: typeof ChipFoundation = MDCChipFoundation;

  @property()
  leadingIcon;

  @property()
  trailingIcon;

  @property({ type: String })
  label = "";

  @property({ type: Function })
  onClick;

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  checkmark = false;

  @property({ type: Number })
  tabindex = -1;

  @property({ type: Boolean })
  preventAutoRemove = false;

  get foundation() {
    return this.mdcFoundation;
  }

  createRenderRoot() {
    return this.attachShadow({ mode: "open", delegatesFocus: true });
  }

  static styles = style;

  remove() {
    this.parentElement
      ? this.parentElement.removeChild(this)
      : false;
  }

  protected createAdapter() {
    return {
      ...super.createAdapter(),
      addClass: className => this.mdcRoot.classList.add(className),
      removeClass: className => this.mdcRoot.classList.remove(className),
      hasClass: className => this.mdcRoot.classList.contains(className),
      addClassToLeadingIcon: className => {
        const leadingIconEl = this.mdcRoot.querySelector(
          strings.LEADING_ICON_SELECTOR
        );
        if (leadingIconEl) {
          leadingIconEl.classList.add(className);
        }
      },
      removeClassFromLeadingIcon: className => {
        const leadingIconEl = this.mdcRoot.querySelector(
          strings.LEADING_ICON_SELECTOR
        );
        if (leadingIconEl) {
          leadingIconEl.classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      registerEventHandler: (evtType, handler) =>
        this.mdcRoot.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        this.mdcRoot.removeEventListener(evtType, handler),
      registerTrailingIconInteractionHandler: (evtType, handler) => {
        const trailingIconEl = this.mdcRoot.querySelector(
          strings.TRAILING_ICON_SELECTOR
        );
        if (trailingIconEl) {
          trailingIconEl.addEventListener(evtType, handler);
        }
      },
      deregisterTrailingIconInteractionHandler: (evtType, handler) => {
        const trailingIconEl = this.mdcRoot.querySelector(
          strings.TRAILING_ICON_SELECTOR
        );
        if (trailingIconEl) {
          trailingIconEl.removeEventListener(evtType, handler);
        }
      },
      notifyInteraction: () => {
        emit(this, strings.INTERACTION_EVENT, { chip: this });
      },
      notifyTrailingIconInteraction: () => {
        emit(this, strings.TRAILING_ICON_INTERACTION_EVENT, { chip: this });
      },
      notifyRemoval: () => {
        emit(this, strings.REMOVAL_EVENT, { chip: this });
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.mdcRoot).getPropertyValue(propertyName),
      setStyleProperty: (propertyName, value) =>
        this.mdcRoot.style.setProperty(propertyName, value)
    };
  }

  getLeadingIcon(leadingIcon: string, active: boolean) {
    return leadingIcon
      ? html`
          <span
            class="material-icons mdc-chip__icon mdc-chip__icon--leading
          ${active ? "mdc-chip__icon--leading-hidden" : ""}
            "
            >${leadingIcon}</span
          >
        `
      : "";
  }

  getCheckmark(checkmark: boolean) {
    if (checkmark) {
      return html`
        <div class="mdc-chip__checkmark">
          <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
            <path
              class="mdc-chip__checkmark-path"
              fill="none"
              stroke="black"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            ></path>
          </svg>
        </div>
      `;
    }

    return "";
  }

  getTrailingIcon(trailingIcon: string) {
    return trailingIcon
      ? html`
          <span
            class="material-icons mdc-chip__icon mdc-chip__icon--trailing"
            tabindex="${this.tabindex !== -1 ? this.tabindex : 0}"
            role="button"
            >${trailingIcon}</span
          >
        `
      : "";
  }

  chipClasses(active: boolean) {
    return {
      "mdc-chip--selected": active
    };
  }

  render() {
    return html`
      <div
        class="mdc-chip ${classMap(this.chipClasses(this.active))}"
        .ripple="${ripple({ unbounded: false })}"
        tabindex="${this.tabindex}"
      >
        ${this.getLeadingIcon(this.leadingIcon, this.active)}
        ${this.getCheckmark(this.checkmark)}
        <span class="mdc-chip__text">${this.label}</span> <slot></slot> ${
          this.getTrailingIcon(this.trailingIcon)
        }
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    
    this.mdcFoundation.handleTrailingIconInteraction_ = (evt) => {
      evt.stopPropagation();

      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.mdcFoundation.adapter_.notifyTrailingIconInteraction();
        if (!this.preventAutoRemove) {
          this.mdcFoundation.adapter_.addClass(cssClasses.CHIP_EXIT);
        }
      }
    }
  }

  setFocus(value = true) {
    if (value) {
      this.mdcRoot.focus();
    } else {
      this.mdcRoot.blur();
    }
  }

  forceClick() {
    this.mdcRoot.click();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mwc-chip": Chip;
  }
}
