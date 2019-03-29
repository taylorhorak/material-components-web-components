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
import { classMap } from "lit-html/directives/class-map.js";
import { style } from "./mwc-chip-set-css.js";
import MDCChipSetFoundation from "@material/chips/chip-set/foundation.js";
import { Chip as MWCChip } from "./mwc-chip";
import { strings } from "./constants";
import { emit } from '@material/mwc-base/utils';

export interface ChipSetFoundation extends Foundation {
  init(): void;
  destroy(): void;
  select(chipFoundation): void;
}

export declare var ChipSetFoundation: {
  prototype: ChipSetFoundation;
  new (adapter: Adapter): ChipSetFoundation;
};

declare global {
  interface HTMLElementTagNameMap {
    "mwc-chip-set": ChipSet;
  }
}

@customElement("mwc-chip-set" as any)
export class ChipSet extends BaseElement {
  @query(".mdc-chip-set")
  protected mdcRoot!: HTMLElement;

  @query("slot")
  protected slotEl!: HTMLSlotElement;

  @property({ type: String })
  type = "";

  @property({ type: Boolean })
  wrapFocus = false;

  @property({ type: Boolean })
  preventAutoRemove = false;

  protected _chips: MWCChip[] = [];

  get chips() {
    return this._chips;
  }

  get slottedChips(): MWCChip[] {
    return [...this.slotEl.assignedNodes()].filter(
      el => el instanceof MWCChip
    ) as MWCChip[];
  }

  protected mdcFoundation!: ChipSetFoundation;

  protected readonly mdcFoundationClass: typeof ChipSetFoundation = MDCChipSetFoundation;

  static styles = style;

  get foundation() {
    return this.mdcFoundation;
  }

  chipSetClasses(type: string) {
    return {
      "mdc-chip-set--choice": type === "choice",
      "mdc-chip-set--filter": type === "filter"
    };
  }

  protected createAdapter() {
    return {
      ...super.createAdapter(),
      hasClass: className => this.mdcRoot.classList.contains(className),
      registerInteractionHandler: (evtType, handler) =>
        this.mdcRoot.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        this.mdcRoot.removeEventListener(evtType, handler),
      appendChip: (text, leadingIcon, trailingIcon) => {
        const chipEl = this.getChip() as MWCChip;
        chipEl.label = text;
        chipEl.leadingIcon = leadingIcon;
        chipEl.trailingIcon = trailingIcon;

        this.mdcRoot.appendChild(chipEl);

        return chipEl;
      },
      removeChip: chip => {
        this.removeChip(chip);
      }
    };
  }

  protected getChip(): HTMLElement {
    return document.createElement('mwc-chip');
  }

  firstUpdated() {
    super.firstUpdated();

    this.shadowRoot!.addEventListener('slotchange', () => this.updateChips());
    
    this.updateChips();

    this.mdcRoot.addEventListener('keydown', this._handleKeydown.bind(this));
  }

  render() {
    return html`
      <div class="mdc-chip-set ${classMap(this.chipSetClasses(this.type))}">
        <slot></slot>
      </div>
    `;
  }

  updateChips() {
    const chips: MWCChip[] = [];

    this.slottedChips.forEach(el => {
      el.tabIndex = 0;
      el.preventAutoRemove = this.preventAutoRemove;
      this.removeChipListeners(el);
      this.addChipListeners(el);
      chips.push(el);
    });

    this._chips = chips;
  }

  protected _interactionHandler = this.interactionHandler.bind(this);
  protected _handleFocus = this.handleFocus.bind(this);

  addChipListeners(chip) {
    chip.addEventListener(
      strings.INTERACTION_EVENT,
      this._interactionHandler
    );

    chip.addEventListener(
      strings.TRAILING_ICON_INTERACTION_EVENT,
      this._interactionHandler
    );

    chip.addEventListener(
      'focus',
      this._handleFocus
    );
  }

  removeChipListeners(chip) {
    chip.removeEventListener(
      strings.INTERACTION_EVENT,
      this._interactionHandler
    );

    chip.removeEventListener(
      strings.TRAILING_ICON_INTERACTION_EVENT,
      this._interactionHandler
    );

    chip.removeEventListener(
      'focus',
      this._handleFocus
    );
  }

  interactionHandler(e) {
    emit(this.mdcRoot, e.type, e.detail);
    emit(this, e.type, e.detail);

    if (e.type === strings.TRAILING_ICON_INTERACTION_EVENT) {
      setTimeout(() => {
        if (!this.preventAutoRemove) {
          emit(this.mdcRoot, strings.REMOVAL_EVENT, e.detail);
        }

        emit(this, strings.REMOVAL_EVENT, e.detail);
      }, 0);
    }
  }

  handleFocus(evt) {
    emit(this, 'MDCChipSet:chipFocus', { chip: evt.target })
  }

  appendChip(text: string, leadingIcon?: string, trailingIcon?: string) {
    const chipEl = this.getChip() as MWCChip;
    chipEl.label = text;
    chipEl.leadingIcon = leadingIcon;
    chipEl.trailingIcon = trailingIcon;

    this.mdcRoot.appendChild(chipEl);

    return chipEl;
  }

  /**
   * Creates a new chip in the chip set with the given text, leading icon, and trailing icon.
   */
  addChip(text: string, leadingIcon?: string, trailingIcon?: string): HTMLElement {
    const chipEl = this.appendChip(text, leadingIcon, trailingIcon);
    this.addChipListeners(chipEl);
    this._chips.push(chipEl);
    
    return chipEl;
  }

  removeChip(chip) {
    const index = this._chips.indexOf(chip);
    this._chips.splice(index, 1);
    this.removeChipListeners(chip);
    chip.remove();
  }

  /**
   * Key handler for the list
   * @param {Event} evt
   * @param {boolean} isRootListItem
   * @param {number} listItemIndex
   */
  _handleKeydown(evt) { 
    const { key, keyCode } = evt;
    const arrowLeft = key === 'ArrowLeft' || keyCode === 37;
    const arrowRight = key === 'ArrowRight' || keyCode === 39;
    const isHome = key === 'Home' || keyCode === 36;
    const isEnd = key === 'End' || keyCode === 35;
    const isBackspace = key === 'Backspace' || keyCode === 8;
    const isSpace = key === 'Space' || keyCode === 32;

    let currentIndex = this._getFocusedElementIndex();

    if (currentIndex === -1) return;

    if (arrowRight) {
      evt.preventDefault();
      this._focusNextElement(currentIndex);
    } else if (arrowLeft) {
      evt.preventDefault();
      this._focusPrevElement(currentIndex);
    } else if (isHome) {
      evt.preventDefault();
      this._focusFirstElement();
    } else if (isEnd) {
      evt.preventDefault();
      this._focusLastElement();
    } else if (isBackspace) {
      evt.preventDefault();
      this._handleBackspace(currentIndex);
    } else if (isSpace) {
      evt.preventDefault();
      this.chips[currentIndex].forceClick();
    }
  }

  _handleBackspace(currentIndex) {
    const chip = this.chips[currentIndex];

    if (chip.trailingIcon) {
      if (!this.preventAutoRemove) {
        this.removeChip(chip);
      }
      
      emit(this, strings.REMOVAL_EVENT, { chip });

      if (currentIndex > 0) {
        this._focusPrevElement(currentIndex);
      } else {
        this._focusNextElement(currentIndex - 1);
      }
    }
  }

  /**
   * Focuses the next element on the list.
   * @param {number} index
   */
  _focusNextElement(index) {
    const count = this._getListItemCount();
    let nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return this._afterLastFocusNext();
      }
    }

    this._focusItemAtIndex(nextIndex);
  }

  _afterLastFocusNext() {
    emit(this, 'MDCChipSet:afterLastFocusNext');
  }

  /**
   * Focuses the previous element on the list.
   * @param {number} index
   */
  _focusPrevElement(index) {
    let prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus) {
        prevIndex = this._getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return this._afterLastFocusPrev();
      }
    }

    this._focusItemAtIndex(prevIndex);
  }

  _afterLastFocusPrev() {
    emit(this, 'MDCChipSet:afterLastFocusPrev');
  }

  _focusFirstElement() {
    if (this._getListItemCount() > 0) {
      this._focusItemAtIndex(0);
    }
  }

  _focusLastElement() {
    const lastIndex = this._getListItemCount() - 1;
    if (lastIndex >= 0) {
      this._focusItemAtIndex(lastIndex);
    }
  }

  _getFocusedElementIndex() {
    return this.chips.indexOf(document.activeElement as MWCChip);
  }

  _getListItemCount() {
    return this.chips.length;
  }

  _focusItemAtIndex(index) {
    this.chips[index].setFocus();
  }
}
