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
  html,
  addHasRemoveClass,
  property,
  observer,
} from '@material/mwc-base/form-element';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { MDCMenuAdapter } from '@material/menu/adapter';
import { cssClasses, strings } from '@material/menu/constants';
import { Corner, MDCMenuSurface, MDCMenuSurfaceFactory } from '@material/menu-surface';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { MDCMenuDistance } from '@material/menu-surface/types';
import { MDCList, MDCListFactory } from '@material/list';
import { MDCListFoundation } from '@material/list/foundation';
import { emit } from '@material/mwc-base/utils';

import { style } from './mwc-menu-css.js';

const menuSurfaceFactory: MDCMenuSurfaceFactory = el => new MDCMenuSurface(el);
const listFactory: MDCListFactory = el => new MDCList(el);

declare global {
  interface HTMLElementTagNameMap {
    'mwc-menu': Menu;
  }
}

@customElement('mwc-menu' as any)
export class Menu extends BaseElement {

  @query('.mdc-menu')
  protected mdcRoot!: HTMLElement;

  @query('.mdc-list')
  protected listElement!: HTMLElement;

  @property({ type: Boolean })
  @observer(function(this: Menu, value: boolean) {
    if (this._menuSurface) {
      this._menuSurface.open = value;
    }
  })
  public open = false;

  @property({ type: Boolean })
  @observer(function(this: Menu, value: boolean) {
    if (this._list) {
      this._list.wrapFocus = value;
    }
  })
  public wrapFocus = false;

  @property({ type: Boolean })
  @observer(function(this: Menu, value: boolean) {
    if (this._menuSurface) {
      this._menuSurface.quickOpen = value;
    }
  })
  public quickOpen = false;

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   */
  get items(): Element[] {
    return this._list ? this._list.listElements : [];
  }

  protected _menuSurface!: MDCMenuSurface;

  protected _list!: MDCList | null;

  protected _handleAfterOpened = this._onAfterOpened.bind(this);

  protected _handleAfterClosed = this._onAfterClosed.bind(this);

  protected _handleKeydown = this._onKeydown.bind(this);

  protected _handleItemAction = this._onItemAction.bind(this);

  protected mdcFoundation!: MDCMenuFoundation;

  protected readonly mdcFoundationClass = MDCMenuFoundation;

  createAdapter(): MDCMenuAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      addClassToElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const list = this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const list = this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: () => this.open = false,
      getElementIndex: (element) => this.items.indexOf(element),
      getParentElement: (element) => element.parentElement,
      getSelectedElementIndex: (selectionGroup) => {
        const selectedListItem = selectionGroup.querySelector(`.${cssClasses.MENU_SELECTED_LIST_ITEM}`);
        return selectedListItem ? this.items.indexOf(selectedListItem) : -1;
      },
      notifySelected: (evtData) => emit(this, strings.SELECTED_EVENT, {
        index: evtData.index,
        item: this.items[evtData.index],
      }),
    }
  }

  static styles = style;

  render() {
    return html`
      <div class="mdc-menu mdc-menu-surface" tabindex="-1">
        <div class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
          <slot></slot>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();

    this._menuSurface = menuSurfaceFactory(this.mdcRoot);

    if (this.listElement) {
      this._list = listFactory(this.listElement);
      this._list!.wrapFocus = true;
    } else {
      this._list = null;
    }

    this._menuSurface.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this._handleAfterOpened);
    this._menuSurface.listen(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, this._handleAfterClosed);
    this.addEventListener('keydown', this._handleKeydown);
    this.addEventListener(MDCListFoundation.strings.ACTION_EVENT, this._handleItemAction);
  }

  protected _onKeydown(evt) {
    this.mdcFoundation.handleKeydown(evt);
  }

  protected _onItemAction(evt) {
    this.mdcFoundation.handleItemAction(this.items[evt.detail.index]);
  }

  protected _onAfterOpened() {
    var list = this.items;
    if (list.length > 0) {
      (list[0] as HTMLElement).focus();
    }
  }

  protected _onAfterClosed() {
    this.open = this._menuSurface.open;
  }

  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */
  setAnchorCorner(corner: Corner) {
    this._menuSurface.setAnchorCorner(corner);
  }

  setAnchorMargin(margin: Partial<MDCMenuDistance>) {
    this._menuSurface.setAnchorMargin(margin);
  }

  /**
   * @return The item within the menu at the index specified.
   */
  getOptionByIndex(index: number): Element | null {
    const items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  }

  setFixedPosition(isFixed: boolean) {
    this._menuSurface.setFixedPosition(isFixed);
  }

  hoistMenuToBody() {
    this._menuSurface.hoistMenuToBody();
  }

  setIsHoisted(isHoisted: boolean) {
    this._menuSurface.setIsHoisted(isHoisted);
  }

  setAbsolutePosition(x: number, y: number) {
    this._menuSurface.setAbsolutePosition(x, y);
  }

  /**
   * Sets the element that the menu-surface is anchored to.
   */
  setAnchorElement(element: Element) {
    this._menuSurface.anchorElement = element;
  }
}
