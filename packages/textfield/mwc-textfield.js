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
import { html, query, observer, property, customElement, FormElement } from '@authentic/mwc-base/form-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { style } from './mwc-textfield-css.js';
import { lineRipple } from '@authentic/mwc-line-ripple/line-ripple-directive';
import MDCTextfieldFoundation from '@material/textfield/foundation.js';
let Textfield = class Textfield extends FormElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.icon = '';
        this.iconTrailing = false;
        this.box = false;
        this.outlined = false;
        this.disabled = false;
        this.fullWidth = false;
        this.required = false;
        this.helperText = '';
        this.placeHolder = '';
        this.type = '';
        this.mdcFoundationClass = MDCTextfieldFoundation;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { addClass: () => { }, removeClass: () => { }, hasClass: () => { }, registerInputInteractionHandler: (type, handler) => {
                this.formElement.addEventListener(type, handler);
            }, deregisterInputInteractionHandler: (type, handler) => {
                this.formElement.removeEventListener(type, handler);
            }, registerTextFieldInteractionHandler: (type, handler) => {
                this.formElement.addEventListener(type, handler);
            }, deregisterTextFieldInteractionHandler: (type, handler) => {
                this.formElement.removeEventListener(type, handler);
            }, registerInteractionHandler: (type, handler) => {
                this.label.addEventListener(type, handler);
            }, deregisterInteractionHandler: (type, handler) => {
                this.label.removeEventListener(type, handler);
            }, registerValidationAttributeChangeHandler: () => { }, deregisterValidationAttributeChangeHandler: () => { }, getNativeInput: () => {
                return this.formElement;
            }, isFocused: () => { }, isRtl: () => { }, activateLineRipple: () => {
                if (this.ripple) {
                    this.ripple.activate();
                }
            }, deactivateLineRipple: () => {
                if (this.ripple) {
                    this.ripple.deactivate();
                }
            }, setLineRippleTransformOrigin: () => { }, shakeLabel: () => { }, floatLabel: () => { }, hasLabel: () => { }, getLabelWidth: () => { }, hasOutline: () => { }, notchOutline: () => { }, closeOutline: () => { } });
    }
    renderStyle() {
        return style;
    }
    get ripple() {
        return this.rippleNode ? this.rippleNode.ripple : undefined;
    }
    render() {
        const { value, label, box, outlined, disabled, icon, iconTrailing, fullWidth, required, placeHolder, helperText, type } = this;
        const hostClassInfo = {
            'mdc-text-field--with-leading-icon': icon && !iconTrailing,
            'mdc-text-field--with-trailing-icon': icon && iconTrailing,
            'mdc-text-field--box': !fullWidth && box,
            'mdc-text-field--outlined': !fullWidth && outlined,
            'mdc-text-field--disabled': disabled,
            'mdc-text-field--fullwidth': fullWidth,
        };
        return html `
            ${this.renderStyle()}
            <div class="mdc-text-field mdc-text-field--upgraded ${classMap(hostClassInfo)}">
                ${this._renderIcon({ icon, fullWidth })}
                ${this._renderInput({ value, required, type, placeHolder, label })}
                ${this._renderLabel({ label, value, fullWidth })}
                ${this._renderSVG({ fullWidth, outlined })}
            </div>
            ${this._renderHelperText({ helperText })}
        `;
    }
    _renderIcon({ icon, fullWidth }) {
        return !fullWidth && icon
            ? html `<i class="material-icons mdc-text-field__icon" tabindex="0">${icon}</i>`
            : '';
    }
    _renderInput({ value, required, type, placeHolder, label }) {
        return html `<input type="${type}" placeholder="${placeHolder}" ?required="${required}" class="mdc-text-field__input ${value ? 'mdc-text-field--upgraded' : ''}" id="text-field" .value="${value}" aria-label="${label}">`;
    }
    _renderLabel({ label, value, fullWidth }) {
        return !fullWidth && label
            ? html `<label class="mdc-floating-label ${value ? 'mdc-floating-label--float-above' : ''} for=" text-field">${label}</label>`
            : '';
    }
    _renderSVG({ outlined, fullWidth }) {
        return !fullWidth && outlined
            ? html `
                <div class="mdc-notched-outline">
                    <svg>
                        <path class="mdc-notched-outline__path" /></svg>
                </div>
                <div class="mdc-notched-outline__idle"></div>
            `
            : html `<div class="mdc-line-ripple" .ripple="${lineRipple({})}"></div>`;
    }
    _renderHelperText({ helperText }) {
        return helperText
            ? html `<p class="mdc-text-field-helper-text" aria-hidden="true">${helperText}</p>`
            : '';
    }
};
__decorate([
    query('.mdc-textfield')
], Textfield.prototype, "mdcRoot", void 0);
__decorate([
    query('input')
], Textfield.prototype, "formElement", void 0);
__decorate([
    query('label')
], Textfield.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        this.mdcFoundation.setValue(value);
    })
], Textfield.prototype, "value", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], Textfield.prototype, "iconTrailing", void 0);
__decorate([
    property({ type: Boolean })
], Textfield.prototype, "box", void 0);
__decorate([
    property({ type: Boolean })
], Textfield.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (value) {
        this.mdcFoundation.setDisabled(value);
    })
], Textfield.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Textfield.prototype, "fullWidth", void 0);
__decorate([
    property({ type: Boolean })
], Textfield.prototype, "required", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        this.mdcFoundation.setHelperTextContent(value);
    })
], Textfield.prototype, "helperText", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "placeHolder", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "type", void 0);
__decorate([
    query('.mdc-line-ripple')
], Textfield.prototype, "rippleNode", void 0);
Textfield = __decorate([
    customElement('mwc-textfield')
], Textfield);
export { Textfield };
//# sourceMappingURL=mwc-textfield.js.map