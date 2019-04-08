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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseElement, customElement, html, property, query, observer, queryAll, classMap } from "@authentic/mwc-base/base-element";
import { closest, matches } from '@material/dom/ponyfill';
import MDCDialogFoundation from "@material/dialog/foundation";
import { strings } from "@material/dialog/constants";
// Commented due to focus-trap not working
// import * as createFocusTrap from 'focus-trap';
// import * as util from '@material/dialog/util';
import { emit } from '@authentic/mwc-base/utils';
import { Button as MWCButton } from '@authentic/mwc-button';
import { style } from './mwc-dialog-css.js';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';
// elements to be registered ahead of time
import "@authentic/mwc-button";
let Dialog = class Dialog extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCDialogFoundation;
        this.headerLabel = '';
        this.acceptLabel = 'OK';
        this.declineLabel = 'Cancel';
        this.scrollable = false;
        this.opened = false;
    }
    get _buttons() {
        const actionButtons = [...this.buttons] || [];
        const slottedButtons = this.footerSlot
            ? this.footerSlot
                .assignedNodes({ flatten: true })
                .filter(node => node instanceof MWCButton)
            : [];
        return [
            ...actionButtons,
            ...slottedButtons
        ];
    }
    get _defaultButton() {
        return this._buttons.filter(item => item.classList.contains('is-default'))[0];
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { addClass: (className) => this.mdcRoot.classList.add(className), removeClass: (className) => this.mdcRoot.classList.remove(className), hasClass: (className) => this.mdcRoot.classList.contains(className), addBodyClass: (className) => document.body.classList.add(className), removeBodyClass: (className) => document.body.classList.remove(className), eventTargetMatches: (target, selector) => matches(target, selector), 
            // Commented due to focus-trap not working
            // trapFocus: () => this._focusTrap && this._focusTrap.activate(),
            // releaseFocus: () => this._focusTrap && this._focusTrap.deactivate(),
            // isContentScrollable: () => !!this.content && util.isScrollable(this.content),
            // areButtonsStacked: () => util.areTopsMisaligned(this._buttons),
            getActionFromEvent: (event) => {
                const element = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
                return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
            }, clickDefaultButton: () => {
                if (this._defaultButton) {
                    this._defaultButton.click();
                }
            }, reverseButtons: () => {
                this._buttons.reverse();
                this._buttons.forEach((button) => button.parentElement.appendChild(button));
            }, notifyOpening: () => {
                this.opened = true;
                emit(this, strings.OPENING_EVENT, {});
            }, notifyOpened: () => emit(this, strings.OPENED_EVENT, {}), notifyClosing: (action) => emit(this, strings.CLOSING_EVENT, action ? { action } : {}), notifyClosed: (action) => {
                this.opened = false;
                emit(this, strings.CLOSED_EVENT, action ? { action } : {});
            } });
    }
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
    render() {
        const { headerLabel, acceptLabel, declineLabel, scrollable } = this;
        return html `
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
                        <section id="my-dialog-content" class="mdc-dialog__content ${classMap({ 'mdc-dialog__body--scrollable': scrollable })}">
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
    renderButton(label, action, isDefault = false) {
        const classes = {
            'is-default': isDefault
        };
        return html `<mwc-button data-mdc-dialog-action="${action}" class="${classMap(classes)}" label="${label}"></mwc-button>`;
    }
    show() {
        this.mdcFoundation.open();
    }
    close() {
        this.mdcFoundation.close();
    }
};
Dialog.styles = style;
__decorate([
    query('.mdc-dialog')
], Dialog.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-dialog_container')
], Dialog.prototype, "container", void 0);
__decorate([
    query('.mdc-dialog__content')
], Dialog.prototype, "content", void 0);
__decorate([
    query('.mdc-dialog__scrim')
], Dialog.prototype, "scrim", void 0);
__decorate([
    queryAll('[data-mdc-dialog-action]')
], Dialog.prototype, "buttons", void 0);
__decorate([
    query('slot[name="footer"]')
], Dialog.prototype, "footerSlot", void 0);
__decorate([
    property({ type: String })
], Dialog.prototype, "headerLabel", void 0);
__decorate([
    property({ type: String })
], Dialog.prototype, "acceptLabel", void 0);
__decorate([
    property({ type: String })
], Dialog.prototype, "declineLabel", void 0);
__decorate([
    property({ type: Boolean })
], Dialog.prototype, "scrollable", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (value) {
        if (value) {
            this.show();
        }
        else {
            this.close();
        }
    })
], Dialog.prototype, "opened", void 0);
Dialog = __decorate([
    customElement('mwc-dialog')
], Dialog);
export { Dialog };
//# sourceMappingURL=mwc-dialog.js.map
