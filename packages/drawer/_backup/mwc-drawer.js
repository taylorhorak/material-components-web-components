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
import { BaseElement, html, property, observer, query, customElement, classMap } from '@material/mwc-base/base-element.js';
import MDCModalDrawerFoundation from '@material/drawer/modal/foundation.js';
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation.js';
import { strings } from '@material/drawer/constants.js';
import { style } from './mwc-drawer-css.js';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';
let Drawer = class Drawer extends BaseElement {
    constructor() {
        super(...arguments);
        this._previousFocus = null;
        this.open = false;
        this.hasHeader = false;
        this.type = '';
    }
    get mdcFoundationClass() {
        return this.type === 'modal' ? MDCModalDrawerFoundation : MDCDismissibleDrawerFoundation;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { elementHasClass: (element, className) => element.classList.contains(className), computeBoundingRect: () => this.mdcRoot.getBoundingClientRect(), saveFocus: () => {
                // Note, casting to avoid cumbersome runtime check.
                this._previousFocus = this.getRootNode().activeElement;
            }, restoreFocus: () => {
                const previousFocus = this._previousFocus && this._previousFocus.focus;
                if (previousFocus) {
                    this._previousFocus.focus();
                }
            }, notifyClose: () => {
                this.open = false;
                this.dispatchEvent(new Event(strings.CLOSE_EVENT, { bubbles: true, cancelable: true }));
            }, notifyOpen: () => {
                this.open = true;
                this.dispatchEvent(new Event(strings.OPEN_EVENT, { bubbles: true, cancelable: true }));
            }, 
            // TODO(sorvell): Implement list focusing integration.
            focusActiveNavigationItem: () => {
            }, trapFocus: () => {
                document.$blockingElements.push(this);
                this.appContent.inert = true;
            }, releaseFocus: () => {
                document.$blockingElements.remove(this);
                this.appContent.inert = false;
            } });
    }
    _handleScrimClick() {
        this.mdcFoundation.handleScrimClick();
    }
    ;
    render() {
        const dismissible = this.type === 'dismissible' || this.type === 'modal';
        const modal = this.type === 'modal';
        const header = this.hasHeader ? html `
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      ` : '';
        return html `
      <aside class="mdc-drawer
          ${classMap({ 'mdc-drawer--dismissible': dismissible, 'mdc-drawer--modal': modal })}">
        ${header}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${modal ? html `<div class="mdc-drawer-scrim" @click="${this._handleScrimClick}"></div>` : ''}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
    }
    // note, we avoid calling `super.firstUpdated()` to control when `createFoundation()` is called.
    firstUpdated() {
        this.mdcRoot.addEventListener('keydown', (e) => this.mdcFoundation.handleKeydown(e));
        this.mdcRoot.addEventListener('transitionend', (e) => this.mdcFoundation.handleTransitionEnd(e));
    }
    updated(changedProperties) {
        if (changedProperties.has('type')) {
            this.createFoundation();
        }
    }
};
Drawer.styles = style;
__decorate([
    query('.mdc-drawer')
], Drawer.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-drawer-app-content')
], Drawer.prototype, "appContent", void 0);
__decorate([
    observer(function (value) {
        if (this.type === '') {
            return;
        }
        if (value) {
            this.mdcFoundation.open();
        }
        else {
            this.mdcFoundation.close();
        }
    }),
    property({ type: Boolean, reflect: true })
], Drawer.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], Drawer.prototype, "hasHeader", void 0);
__decorate([
    property({ reflect: true })
], Drawer.prototype, "type", void 0);
Drawer = __decorate([
    customElement('mwc-drawer')
], Drawer);
export { Drawer };
//# sourceMappingURL=mwc-drawer.js.map