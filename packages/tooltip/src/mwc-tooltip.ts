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
import { MDCTooltipFoundation } from './mdc-tooltip/foundation.js';
import { style } from './mwc-tooltip-css.js';

export interface TooltipFoundation extends Foundation {
    handleTouchEnd(evt: Event): void;
    handleBlur(evt: Event): void;
    handleMouseLeave(evt: MouseEvent): void;
    handleTouchStart(evt: Event): void;
    handleFocus(evt: Event): void;
    handleMouseEnter(evt: MouseEvent): void;
    handleClick(evt: MouseEvent): void;
    showDelayed(evt: Event): void;
    show(): void;
    hide(): void;
    destroy(): void;
    displayed_:Boolean;
    placement:String;
    showTimeout_:Number;
    checkHideFlag_:Boolean;
    hideDelay:Number;
    showDelay:Number;
    gap:Number;
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

    @property({ type: String })
    for = '';

    @property({ type: String })
    text = 'Tooltip Placeholder';

    @property({ type: String })
    placement = 'below';

    @property({ type: Boolean })
    open = false;

    @property({ type: Number })
    showDelay = 1500;

    @property({ type: Number })
    hideDelay = 0; //NOT IMPLEMENTED

    @property({ type: Number })
    gap = 20; //NOT IMPLEMENTED

    protected readonly mdcFoundationClass: typeof TooltipFoundation = MDCTooltipFoundation;
    protected mdcFoundation!: TooltipFoundation;
    protected _preventClose = false;
    protected controller_:HTMLElement|null = this.mdcRoot;
    protected _handleKeydown;
    protected _handleClick;
    protected createAdapter() {
        return {
            ...super.createAdapter(),
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            getRootWidth: () => this.mdcRoot.offsetWidth,
            getRootHeight: () => this.mdcRoot.offsetHeight,
            getControllerWidth: () => this.controller_!.offsetWidth,
            getControllerHeight: () => this.controller_!.offsetHeight,
            getControllerBoundingRect: () => this.controller_!.getBoundingClientRect(),
            getClassList: () => this.classList,
            setStyle: (propertyName, value) => this.mdcRoot.style.setProperty(propertyName, value),
        }
    }

    static styles = style;

    firstUpdated() {
        super.firstUpdated();
        this.controller_ = this.for === '' ? this.mdcRoot.parentElement : document.getElementById(this.for);
        this.initListeners();
    }

    updated(changedProperties) {
        console.log("Tooltip updated", changedProperties);
        this.mdcFoundation.showDelay = this.showDelay;
        this.mdcFoundation.hideDelay = this.hideDelay;
        this.mdcFoundation.gap = this.gap;
        this.mdcFoundation.placement = this.placement;
    }

    render() {
        return html`
            <div class="mdc-tooltip" tabindex="-1">
                ${this.text}
            </div>
        `;
    }

    show() {
        this.mdcFoundation.show();
    }
    hide() {
        this.mdcFoundation.hide();
    }

    initListeners() {
        if (this.controller_ !== null) {
            this.controller_.addEventListener('blur', this.mdcFoundation.handleBlur.bind(this.mdcFoundation));
            this.controller_.addEventListener('click', this.mdcFoundation.handleClick.bind(this.mdcFoundation));
            this.controller_.addEventListener('focus', this.mdcFoundation.handleFocus.bind(this.mdcFoundation));
            this.controller_.addEventListener('mouseleave', this.mdcFoundation.handleMouseLeave.bind(this.mdcFoundation));
            this.controller_.addEventListener('mouseenter', this.mdcFoundation.handleMouseEnter.bind(this.mdcFoundation));
            this.controller_.addEventListener('touchstart', this.mdcFoundation.handleTouchStart.bind(this.mdcFoundation));
            this.controller_.addEventListener('touchend', this.mdcFoundation.handleTouchEnd.bind(this.mdcFoundation));
        }
    }

    destroy() {
        if (this.controller_ !== null) {
            this.controller_.removeEventListener('blur', this.mdcFoundation.handleBlur);
            this.controller_.removeEventListener('click', this.mdcFoundation.handleClick);
            this.controller_.removeEventListener('focus', this.mdcFoundation.handleFocus);
            this.controller_.removeEventListener('mouseenter', this.mdcFoundation.handleMouseEnter);
            this.controller_.removeEventListener('mouseleave', this.mdcFoundation.handleMouseLeave);
            this.controller_.removeEventListener('touchstart', this.mdcFoundation.handleTouchStart);
            this.controller_.removeEventListener('touchend', this.mdcFoundation.handleTouchEnd);
        }
    }

    get visible() {
        return this.mdcFoundation.displayed_;
    }

    get width(): number {
        this.mdcRoot.style.display = 'block';
        const width = this.mdcRoot.offsetWidth;
        this.mdcRoot.style.display = null;
        return width;
    }
}
