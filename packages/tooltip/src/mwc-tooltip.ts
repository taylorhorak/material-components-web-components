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

    renderStyle() {
        return style;
    }

    protected createAdapter() {
        return {
            ...super.createAdapter(),
            addClass: (className) => {
                this.mdcRoot.classList.add(className);
            },
            removeClass: (className) => {
                this.mdcRoot.classList.remove(className);
            },
            getRootWidth: () => {
                return 0; //TODO
            },
            getRootHeight: (index, attr) => {
                return [index, attr]; //TODO
            },
            getControllerWidth: (element, className) => {
                return [element, className]; //TODO
            },
            getControllerHeight: () => {
                return 0; //TODO
            },
            getControllerBoundingRect: () => {
                return {}; //TODO
            },
            getClassList: () => this.classList,
            setStyle: (propertyName, value) => {
                //TODO
                return [propertyName, value];
            },
        }
    }

    protected _handleKeydown;
    protected _handleClick;

    firstUpdated() {
        super.firstUpdated();


    }

    render() {
        return html`
            ${this.renderStyle()}
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


    /**
     * Return the menu width
     */
    getWidth(): number {
        this.mdcRoot.style.display = 'block';
        const width = this.mdcRoot.offsetWidth;
        this.mdcRoot.style.display = null;

        return width;
    }

    _afterOpenedCallback() {
        emit(this, 'MDCTootip:opened');
    }

    _afterClosedCallback() {
        this.open = false;
        emit(this, 'MDCTootip:closed');
    }
}
