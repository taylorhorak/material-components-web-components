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
import { BaseElement } from '@material/mwc-base/base-element.js';
import { ListItem } from '@material/mwc-list';
import { MDCList } from '@material/list';
import { MDCMenuFoundation, Corner } from '@material/menu';
import { MDCMenuSurface } from '@material/menu-surface';
import { AnchorMargin } from '@material/menu-surface/foundation';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-menu': Menu;
    }
}
export declare class Menu extends BaseElement {
    protected mdcRoot: HTMLElement;
    protected list: HTMLElement;
    protected _selectionGroup: HTMLElement;
    selectionGroup: boolean;
    open: boolean;
    multiselect: boolean;
    autofocus: boolean;
    autoclose: boolean;
    noWrapFocus: boolean;
    protected _selectedIndex: number;
    selectedIndex: number;
    readonly Corner: any;
    readonly items: ListItem[];
    readonly enabledItems: ListItem[];
    readonly selectedItems: ListItem[];
    protected _menuSurfaceInstance: MDCMenuSurface;
    protected readonly _menuSurface: MDCMenuSurface;
    protected _listInstance: MDCList;
    protected readonly _list: MDCList;
    protected readonly mdcFoundationClass: any;
    protected mdcFoundation: MDCMenuFoundation;
    protected _preventClose: boolean;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    protected createAdapter(): {
        addClassToElementAtIndex: (index: any, className: any) => void;
        removeClassFromElementAtIndex: (index: any, className: any) => void;
        addAttributeToElementAtIndex: (index: any, attr: any, value: any) => void;
        removeAttributeFromElementAtIndex: (index: any, attr: any) => void;
        elementContainsClass: (element: any, className: any) => any;
        closeSurface: () => void;
        getElementIndex: (element: any) => number;
        getParentElement: (element: any) => any;
        getSelectedElementIndex: () => number;
        notifySelected: (evtData: any) => void;
        addClass: (className: string) => void;
        removeClass: (className: string) => void;
        hasClass: (className: string) => boolean;
    };
    protected _handleKeydown: any;
    protected _handleClick: any;
    firstUpdated(): void;
    render(): import("lit-html/lib/template-result").TemplateResult;
    _notifySelected(data: any): void;
    /**
     * Default anchor corner alignment of top-left
     */
    setAnchorCorner(corner: Corner): void;
    setAnchorMargin(margin: AnchorMargin): void;
    /**
     * Return the item within the menu at the index specified.
     */
    getOptionByIndex(index: number): HTMLElement | null;
    quickOpen: boolean;
    setFixedPosition(isFixed: boolean): void;
    /**
     * Return the menu width
     */
    getWidth(): number;
    hoistMenuToBody(): void;
    setIsHoisted(isHoisted: boolean): void;
    setAbsolutePosition(x: number, y: number): void;
    setAnchorElement(element: HTMLElement): void;
    _afterOpenedCallback(): void;
    _afterClosedCallback(): void;
    setFocus(): void;
}
