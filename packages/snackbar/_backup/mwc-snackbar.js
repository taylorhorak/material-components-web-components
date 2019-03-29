var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { BaseElement, html, property, query, customElement } from '@material/mwc-base/base-element.js';
import { style } from './mwc-snackbar-css.js';
import MDCSnackbarFoundation from '@material/snackbar/foundation.js';
import { getCorrectEventName } from '@material/animation/index.js';
const { SHOW_EVENT, HIDE_EVENT } = MDCSnackbarFoundation.strings;
let Snackbar = class Snackbar extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSnackbarFoundation;
        this.message = '';
        this.timeout = 0;
        this.actionText = '';
        this.multiline = false;
        this.actionOnBottom = false;
        this.boundActionHandler = this._actionHandler.bind(this);
    }
    render() {
        return html `
      <div class="mdc-snackbar"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true">
      <div class="mdc-snackbar__text"></div>
      <div class="mdc-snackbar__action-wrapper">
        <button type="button" class="mdc-snackbar__action-button"></button>
      </div>
    </div>`;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { setAriaHidden: () => this.mdcRoot.setAttribute('aria-hidden', 'true'), unsetAriaHidden: () => this.mdcRoot.removeAttribute('aria-hidden'), setActionAriaHidden: () => this.actionButton.setAttribute('aria-hidden', 'true'), unsetActionAriaHidden: () => this.actionButton.removeAttribute('aria-hidden'), setActionText: (text) => this.actionButton.textContent = text, setMessageText: (text) => this.textElement.textContent = text, setFocus: () => this.actionButton.focus(), isFocused: () => this.shadowRoot.activeElement === this.actionButton, visibilityIsHidden: () => document.hidden, registerCapturedBlurHandler: (handler) => this.actionButton.addEventListener('blur', handler, true), deregisterCapturedBlurHandler: (handler) => this.actionButton.removeEventListener('blur', handler, true), registerVisibilityChangeHandler: (handler) => document.addEventListener('visibilitychange', handler), deregisterVisibilityChangeHandler: (handler) => document.removeEventListener('visibilitychange', handler), registerCapturedInteractionHandler: (evtType, handler) => document.body.addEventListener(evtType, handler, true), deregisterCapturedInteractionHandler: (evtType, handler) => document.body.removeEventListener(evtType, handler, true), registerActionClickHandler: (handler) => this.actionButton.addEventListener('click', handler), deregisterActionClickHandler: (handler) => this.actionButton.removeEventListener('click', handler), registerTransitionEndHandler: (handler) => this.mdcRoot.addEventListener(getCorrectEventName(window, 'transitionend'), handler), deregisterTransitionEndHandler: (handler) => this.mdcRoot.removeEventListener(getCorrectEventName(window, 'transitionend'), handler), notifyShow: () => this.dispatchEvent(new CustomEvent(SHOW_EVENT, { bubbles: true, cancelable: true })), notifyHide: () => this.dispatchEvent(new CustomEvent(HIDE_EVENT, { bubbles: true, cancelable: true })) });
    }
    _actionHandler() {
        this.dispatchEvent(new CustomEvent('MDCSnackbar:action'));
    }
    show(data) {
        const options = {
            message: this.message,
            timeout: this.timeout,
            actionText: this.actionText,
            multiline: this.multiline,
            actionOnBottom: this.actionOnBottom,
            actionHandler: this.boundActionHandler,
        };
        this.mdcFoundation.show(Object.assign(options, data));
    }
    get dismissesOnAction() {
        return this.mdcFoundation.dismissesOnAction();
    }
    set dismissesOnAction(dismissesOnAction) {
        this.mdcFoundation.setDismissOnAction(dismissesOnAction);
    }
};
Snackbar.styles = style;
__decorate([
    query('.mdc-snackbar')
], Snackbar.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-snackbar__action-button')
], Snackbar.prototype, "actionButton", void 0);
__decorate([
    query('.mdc-snackbar__text')
], Snackbar.prototype, "textElement", void 0);
__decorate([
    property()
], Snackbar.prototype, "message", void 0);
__decorate([
    property({ type: Number })
], Snackbar.prototype, "timeout", void 0);
__decorate([
    property({})
], Snackbar.prototype, "actionText", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Snackbar.prototype, "multiline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Snackbar.prototype, "actionOnBottom", void 0);
Snackbar = __decorate([
    customElement('mwc-snackbar')
], Snackbar);
export { Snackbar };
//# sourceMappingURL=mwc-snackbar.js.map