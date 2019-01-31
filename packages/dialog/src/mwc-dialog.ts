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
    Foundation,
    Adapter,
    html,
    property,
    query,
    observer,
    queryAll,
    classMap
} from "@material/mwc-base/base-element";
import { closest, matches } from '@material/dom/ponyfill';
import MDCDialogFoundation from "@material/dialog/foundation";
import { strings } from "@material/dialog/constants";
// Commented due to focus-trap not working
// import * as createFocusTrap from 'focus-trap';
// import * as util from '@material/dialog/util';
import { emit } from '@material/mwc-base/utils';
import { Button as MWCButton } from '@material/mwc-button';

import { style } from './mwc-dialog-css.js';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';

export interface DialogFoundation extends Foundation {
    open(): void;
    close(): void;
    handleInteraction(): void;
    handleDocumentKeydown() :void;
    layout;
}

export declare var DialogFoundation: {
    prototype: DialogFoundation;
    new(adapter: Adapter): DialogFoundation;
};

declare global {
    interface HTMLElementTagNameMap {
        'mwc-dialog': Dialog;
    }
}

@customElement('mwc-dialog' as any)
export class Dialog extends BaseElement {

    protected mdcFoundation!: DialogFoundation;

    protected readonly mdcFoundationClass: typeof DialogFoundation = MDCDialogFoundation;

    @query('.mdc-dialog')
    protected mdcRoot!: HTMLElement

    @query('.mdc-dialog_container')
    protected container!: HTMLElement;

    @query('.mdc-dialog__content')
    protected content!: HTMLElement;

    @query('.mdc-dialog__scrim')
    protected scrim!: HTMLElement;

    @queryAll('[data-mdc-dialog-action]')
    protected buttons!: MWCButton[];

    @query('slot[name="footer"]')
    protected footerSlot!: HTMLSlotElement;

    @property({ type: String })
    headerLabel = '';

    @property({ type: String })
    acceptLabel = 'OK';

    @property({ type: String })
    declineLabel = 'Cancel';

    @property({ type: Boolean })
    scrollable = false;

    @property({ type: Boolean })
    @observer(function(this: Dialog, value: boolean) {
        if (value) {
            this.show();
        } else {
            this.close();
        }
    })
    opened = false;

    get _buttons(): MWCButton[] {
        const actionButtons = [...this.buttons] || [];
        const slottedButtons = this.footerSlot
            ? this.footerSlot
                .assignedNodes({flatten: true})
                .filter(node => node instanceof MWCButton)
            : [];

        return [
            ...actionButtons,
            ...slottedButtons
        ] as MWCButton[];
    }

    get _defaultButton() {
        return this._buttons.filter(item => item.classList.contains('is-default'))[0];
    }

    // Commented due to focus-trap not working
    // protected _focusTrap;
    protected _layout;

    protected createAdapter() {
        return {
            ...super.createAdapter(),
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            hasClass: (className) => this.mdcRoot.classList.contains(className),
            addBodyClass: (className) => document.body.classList.add(className),
            removeBodyClass: (className) => document.body.classList.remove(className),
            eventTargetMatches: (target, selector) => matches(target, selector),
            // Commented due to focus-trap not working
            // trapFocus: () => this._focusTrap && this._focusTrap.activate(),
            // releaseFocus: () => this._focusTrap && this._focusTrap.deactivate(),
            // isContentScrollable: () => !!this.content && util.isScrollable(this.content),
            // areButtonsStacked: () => util.areTopsMisaligned(this._buttons),
            getActionFromEvent: (event) => {
                const element = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
                return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
            },
            clickDefaultButton: () => {
                if (this._defaultButton) {
                    this._defaultButton.click();
                }
            },
            reverseButtons: () => {
                this._buttons.reverse();
                this._buttons.forEach((button) => button.parentElement!.appendChild(button));
            },
            notifyOpening: () => {
                this.opened = true;
                emit(this, strings.OPENING_EVENT, {});
            },
            notifyOpened: () => emit(this, strings.OPENED_EVENT, {}),
            notifyClosing: (action) => emit(this, strings.CLOSING_EVENT, action ? {action} : {}),
            notifyClosed: (action) => {
                this.opened = false;
                emit(this, strings.CLOSED_EVENT, action ? { action } : {});
            },
        }
    }

    protected _handleInteraction!: EventListenerOrEventListenerObject;
    protected _handleDocumentKeydown!: EventListenerOrEventListenerObject;
    protected _handleOpening!: EventListenerOrEventListenerObject;
    protected _handleClosing!: EventListenerOrEventListenerObject;

    firstUpdated() {
        // Commented due to focus-trap not working
        // this._focusTrap = util.createFocusTrapInstance(this.container, createFocusTrap, null);
        super.firstUpdated();

        this._handleInteraction = this.mdcFoundation.handleInteraction.bind(this.mdcFoundation);
        this._handleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
        this._layout = this.mdcFoundation.layout.bind(this.mdcFoundation);

        const LAYOUT_EVENTS = ['resize', 'orientationchange'];
        this._handleOpening = () => {
            LAYOUT_EVENTS.forEach(type => window.addEventListener(type, this._layout));
            document.addEventListener('keydown', this._handleDocumentKeydown);
        };
        this._handleClosing = () => {
            LAYOUT_EVENTS.forEach(type => window.removeEventListener(type, this._layout));
            document.removeEventListener('keydown', this._handleDocumentKeydown);
        };

        this.addEventListener('keydown', this._handleInteraction);
        this.addEventListener(strings.OPENING_EVENT, this._handleOpening);
        this.addEventListener(strings.CLOSING_EVENT, this._handleClosing);
        
        this.scrim.addEventListener('click', this._handleInteraction);
        this._buttons
            .filter(el => !!el.getAttribute('data-mdc-dialog-action'))
            .forEach(el => {
                el.addEventListener('click', this._handleInteraction);
            });
    }

    renderStyle() {
        return style;
    }

    render() {
        const { headerLabel, acceptLabel, declineLabel, scrollable } = this;
        return html`
            ${this.renderStyle()}
            <aside class="mdc-dialog"
                role="alertdialog"
                aria-labelledby="my-dialog-title"
                aria-describedby="my-dialog-content">
                <div class="mdc-dialog_container">
                    <div class="mdc-dialog__surface">
                        <header class="mdc-dialog__header">
                            <h2 id="my-dialog-title" class="mdc-dialog__title">${headerLabel}</h2>
                            <slot name="header"></slot>
                        </header>
                        <section id="my-dialog-content" class="mdc-dialog__content ${classMap({'mdc-dialog__body--scrollable': scrollable})}">
                            <slot></slot>
                        </section>
                        <footer class="mdc-dialog__actions">
                            <slot name="footer"></slot>
                            ${this.renderButton(declineLabel, 'cancel')}
                            ${this.renderButton(acceptLabel, 'accept', true)}
                        </footer>
                    </div>
                </div>
                <div class="mdc-dialog__scrim"></div>
            </aside>
        `;
    }

    renderButton(label: String, action: String, isDefault: boolean = false) {
        const classes = {
            'is-default': isDefault
        };

        return html`<mwc-button data-mdc-dialog-action="${action}" class="${classMap(classes)}" label="${label}"></mwc-button>`;
    }

    show() {
        this.mdcFoundation.open();
    }
    
    close() {
        this.mdcFoundation.close();
    }

}
