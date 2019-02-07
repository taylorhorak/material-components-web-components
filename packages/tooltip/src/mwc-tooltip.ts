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
    Foundation,
    Adapter,
    customElement,
    query,
    html,
    property
} from '@material/mwc-base/base-element.js';
import { MDCTooltipFoundation } from './mdc-tooltip';
import { emit } from '@material/mwc-base/utils';

import { style } from './mwc-tooltip-css.js';

export interface TooltipFoundation extends Foundation {
    handleTouchEnd(evt: KeyboardEvent): void;
    handleBlur(evt: MouseEvent): void;
    handleMouseLeave(evt: MouseEvent): void;
    handleTouchStart(evt: MouseEvent): void;
    handleFocus(evt: MouseEvent): void;
    handleMouseEnter(evt: MouseEvent): void;
    handleClick(evt: MouseEvent): void;
    showDelayed(evt: MouseEvent): void;
    show(): void;
    hide(): void;
    destroy(): void;
}

export declare var TooltipFoundation: {
    prototype: TooltipFoundation;
    new(adapter: Adapter): TooltipFoundation;
}

declare global {
    interface HTMLElementTagNameMap {
        'mwc-tooltip': Tooltip;
    }
}

@customElement('mwc-tooltip' as any)
export class Tooltip extends BaseElement {

    @query('.mdc-tooltip')
    protected mdcRoot!: HTMLElement;

    @property({ type: Boolean })
    selectionGroup = false;

    @property({ type: Boolean })
    open = false;

    @property({ type: Boolean })
    multiselect = false;

    @property({ type: Boolean })
    autofocus = false;

    @property({ type: Boolean })
    autoclose = false;

    @property({ type: Boolean })
    noWrapFocus = false;

    protected readonly mdcFoundationClass: typeof TooltipFoundation = MDCTooltipFoundation;

    protected mdcFoundation!: TooltipFoundation;

    protected _preventClose = false;

    static styles = style;

    protected createAdapter() {
        return {
            ...super.createAdapter(),
            addClass: (className) => {
                this.mdcRoot.classList.push(className);
            },
            removeClass: (className) => {
                this.mdcRoot.classList.remove(className);
            },
            getRootWidth: () => {
                return 0; //TODO
            },
            getRootHeight: (index, attr) => {
                return 0; //TODO
            },
            getControllerWidth: (element, className) => {
                return 0; //TODO
            },
            getControllerHeight: () => {
                return 0; //TODO
            },
            getControllerBoundingRect: () => {
                return {}; //TODO
            },
            getClassList: () => this._classList,
            setStyle: (propertyName, value) => {
                //TODO
            },
        }
    }

    protected _handleKeydown;
    protected _handleClick;

    firstUpdated() {
        super.firstUpdated();

        this._handleKeydown = evt => {
            this.mdcFoundation.handleKeydown(evt);
            this._list.handleKeydown_(evt);
        }
        this._handleClick = evt => {
            this._preventClose = !this.autoclose;
            this.mdcFoundation.handleClick(evt)
        };

        this._menuSurface.listen('MDCMenuSurface:opened', () => this._afterOpenedCallback());
        this._menuSurface.listen('MDCMenuSurface:closed', () => this._afterClosedCallback());
    }

    render() {
        return html`
            <div class="mdc-tooltip" tabindex="-1">

            </div>
        `;
    }

    show() {
        this.mdcFoundation.show();
    }
    hide() {
        this.mdcFoundation.hide();
    }

    get gap(): Number {
        return this.mdcFoundation.gap;
    }

    set gap(gap): void {
        this.mdcFoundation.gap = gap;
    }

    _notifySelected(data) {
        const selectedElement = this.items[data.index];
        this._list.selectedIndex = this.enabledItems.indexOf(selectedElement);
        this.selectedIndex = data.index;
        emit(this, 'MDCMenu:selected', { index: data.index, item: this.items[data.index] });
    }

    /**
     * Return the item within the menu at the index specified.
     */
    getOptionByIndex(index: number): HTMLElement | null {
        const items = this.items;

        if (index < items.length) {
            return this.items[index];
        } else {
            return null;
        }
    }

    set quickOpen(quickOpen: boolean) {
        this._menuSurface.quickOpen = quickOpen;
    }

    setFixedPosition(isFixed: boolean) {
        this._menuSurface.setFixedPosition(isFixed);
    }

    /**
     * Return the menu width
     */
    getWidth(): number {
        this.mdcRoot.style.display = 'block';
        const width = this.mdcRoot.offsetWidth;
        this.mdcRoot.style.display = null;

        return width;
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

    _afterOpenedCallback() {
        if (this.autofocus) {
            this.setFocus();
        }

        emit(this, 'MDCMenu:opened');

        this.addEventListener('keydown', this._handleKeydown);
        this.addEventListener('click', this._handleClick);
    }

    _afterClosedCallback() {
        this.open = false;
        emit(this, 'MDCMenu:closed');

        this.removeEventListener('keydown', this._handleKeydown);
        this.removeEventListener('click', this._handleClick);
    }

    setFocus() {
        if (this.enabledItems.length > 0) {
            this.items[this.selectedIndex !== -1 ? this.selectedIndex : 0].focus();
        }
    }
}
