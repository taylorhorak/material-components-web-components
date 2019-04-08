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
  html,
  observer,
  property,
  query,
  customElement,
  classMap,
  addHasRemoveClass,
  findAssignedElements,
} from '@material/mwc-base/base-element.js';
import { emit } from '@material/mwc-base/utils';
import { closest, matches } from '@material/dom/ponyfill';
// import { ripple } from '@material/mwc-ripple/ripple-directive';
import MDCListFoundation from './_foundation';
import { MDCListAdapter } from './_adapter';
import { strings, cssClasses } from './_constants';
import { style } from './mwc-list-css';
import { ListItem } from './mwc-list-item';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-list': List;
  }
}

@customElement('mwc-list' as any)
export class List extends BaseElement {

  @query('.mdc-list')
  protected mdcRoot!: HTMLElement;

  @query("slot")
  protected slotEl!: HTMLSlotElement;

  @property({type: Number})
  lines = 1;

  @property({type: Boolean})
  ripple = false;

  @property({type: Boolean})
  avatarList = false;

  @property({type: Boolean})
  nonInteractive = false;

  @observer(function(this: List, value: boolean) {
    this.mdcFoundation && this.mdcFoundation.setVerticalOrientation(value);
  })
  @property({type: Boolean})
  vertical = true;

  @observer(function(this: List, value: boolean) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(value);
  })
  @property({type: Boolean})
  wrapFocus = true;

  @observer(function(this: List, value: boolean) {
    this.mdcFoundation && this.mdcFoundation.setSingleSelection(value);
  })
  @property({type: Boolean})
  singleSelection = true;

  @observer(function(this: List, value: number) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(value);
  })
  @property({type: Number})
  selectedIndex = -1;

  protected mdcFoundation!: MDCListFoundation;
  protected readonly mdcFoundationClass = MDCListFoundation;

  firstUpdated() {
    super.firstUpdated();
    this.layout();
    this.initializeListType();
  }

  static styles = style;

  render() {
    const classes = {
    };
    return html`
      <ul class="mdc-list ${classMap(classes)}"
        @keydown=${this.handleKeydownEvent_}
        @click=${this.handleClickEvent_}
        @focusin=${this.handleFocusInEvent_}
        @focusout=${this.handleFocusOutEvent_}
      >
      <slot></slot>
      </ul>
    `;
  }

  createAdapter(): MDCListAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getListItemCount: () => this.listElements.length,
      getFocusedElementIndex: () => 1,
      getAttributeForElementIndex: (index, attr) => `${index} , ${attr}`,
      setAttributeForElementIndex: (index, attr, value) => { return `${index} , ${attr}, ${value}` },
      addClassForElementIndex: (index, className) => {
        const ele = this.listElements[index] as ListItem;
        if (ele) ele.addClass(className); // not sure about this
      },
      removeClassForElementIndex: (index, className) => {
        const ele = this.listElements[index] as ListItem;
        if (ele) ele.removeClass(className); // not sure about this
      },
      focusItemAtIndex: (index: number) => { return `${index} ` },
      setTabIndexForListItemChildren: (listItemIndex: number, tabIndexValue: string) => { return `${listItemIndex} , ${tabIndexValue}` },
      hasRadioAtIndex: (index: number) => { return index === 0 ? false : false },
      hasCheckboxAtIndex: (index: number) => { return index === 0 ? false : false },
      isCheckboxCheckedAtIndex: (index: number) => { return index === 0 ? false : false },
      setCheckedCheckboxOrRadioAtIndex: (index: number) => { return index === 0 ? false : false },
      notifyAction: (index: number) => { emit(this, strings.ACTION_EVENT, { listIndex: index }, true) },
      isFocusInsideList: () => { return true },
    }
  }

  public layout() {
    // List items need to have at least tabindex=-1 to be focusable.
    [].slice.call(this.mdcRoot.querySelectorAll('.mdc-list-item:not([tabindex])'))
        .forEach((el: Element) => {
          el.setAttribute('tabindex', '-1');
        });

    // Child button/a elements are not tabbable until the list item is focused.
    [].slice.call(this.mdcRoot.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
        .forEach((el: Element) => el.setAttribute('tabindex', '-1'));

    this.mdcFoundation.layout();
  }

  public getFound() {
    return this.mdcFoundation
  }

  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */
  public initializeListType() {
    const checkboxListItems = this.mdcRoot.querySelectorAll(strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    const singleSelectedListItem = this.mdcRoot.querySelector(`
      .${cssClasses.LIST_ITEM_ACTIVATED_CLASS},
      .${cssClasses.LIST_ITEM_SELECTED_CLASS}
    `);
    const radioSelectedListItem = this.mdcRoot.querySelector(strings.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      const preselectedItems = this.mdcRoot.querySelectorAll(strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex =
          ([].map.call(preselectedItems, (listItem: Element) => this.listElements.indexOf(listItem)) as number[])[0];
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
        this.mdcFoundation.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  }

  get listElements(): Element[] {
    return findAssignedElements(this.slotEl, 'mwc-list-item');
  }

  private getListItemIndex_(evt: Event) {
    const eventTarget = evt.target as Element;
    const nearestParent = closest(eventTarget, `mwc-list-item, mwc-list`);

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, `mwc-list-item`)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  }

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  private handleFocusInEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.mdcFoundation!.handleFocusIn(evt, index);
  }

    /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  private handleFocusOutEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.mdcFoundation!.handleFocusOut(evt, index);
  }

  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */
  private handleKeydownEvent_(evt: KeyboardEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;

    if (index >= 0 && !this.nonInteractive) {
      this.mdcFoundation!.handleKeydown(evt, target.classList.contains(cssClasses.LIST_ITEM_CLASS), index);
    }
  }

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  private handleClickEvent_(evt: MouseEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;
    if (this.nonInteractive) return;

    // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
    const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
    this.mdcFoundation!.handleClick(index, toggleCheckbox);
  }

  // NOTE: needed only for ShadyDOM where delegatesFocus is not implemented
  public focus() {
    this.mdcRoot.focus();
  }

}
