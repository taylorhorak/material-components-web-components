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
import { FormElement, customElement, query, html, classMap, property, observer } from '@authentic/mwc-base/form-element.js';
import MDCTextFieldFoundation from '@material/textfield/foundation.js';
import { MDCLineRipple } from '@material/line-ripple';
import { MDCFloatingLabel } from '@material/floating-label/index';
import { MDCNotchedOutline } from '@material/notched-outline/index';
import { ripple } from '@authentic/mwc-ripple/ripple-directive.js';
import { emit } from '@authentic/mwc-base/utils';
import { style } from './mwc-textfield-css.js';
// elements to be registered ahead of time
import '@authentic/mwc-icon/mwc-icon-font.js';
let TextField = class TextField extends FormElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = false;
        this.box = false;
        this.outlined = false;
        this.disabled = false;
        this.fullWidth = false;
        this.required = false;
        this.helperText = '';
        this.placeHolder = '';
        this.type = 'input';
        this.mdcFoundationClass = MDCTextFieldFoundation;
    }
    get _lineRipple() {
        if (!this.outlined && this.lineRippleElement) {
            this._lineRippleInstance = this._lineRippleInstance || new MDCLineRipple(this.lineRippleElement);
        }
        return this._lineRippleInstance;
    }
    get _label() {
        if (this.label && this.labelElement) {
            this._labelInstance = this._labelInstance || new MDCFloatingLabel(this.labelElement);
        }
        return this._labelInstance;
    }
    get _outline() {
        if (this.outlined && this.outlineElement) {
            this._outlineInstance = this._outlineInstance || new MDCNotchedOutline(this.outlineElement);
        }
        return this._outlineInstance;
    }
    renderStyle() {
        return style;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { 
            /* Text Field Adapter Methods */
            registerTextFieldInteractionHandler: (evtType, handler) => this.mdcRoot.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.mdcRoot.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
                const observer = new MutationObserver(handler);
                const targetNode = this.formElement;
                const config = { attributes: true };
                observer.observe(targetNode, config);
                return observer;
            }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect(), isFocused: () => {
                return document.activeElement === this.formElement;
            }, isRtl: () => window.getComputedStyle(this.mdcRoot).getPropertyValue('direction') === 'rtl', 
            /* Input Adapter Methods */
            registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler), deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler), getNativeInput: () => this.formElement, 
            /* Floating Label Adapter Methods */
            shakeLabel: (shouldShake) => this._label && this._label.shake(shouldShake), floatLabel: (shouldFloat) => this._label && this._label.float(shouldFloat), hasLabel: () => !!this._label || !!this.outlined, getLabelWidth: () => !!this._label ? this._label.getWidth() : -12, 
            /* Line Ripple Adapter Methods */
            activateLineRipple: () => {
                if (this._lineRipple) {
                    this._lineRipple.activate();
                }
            }, deactivateLineRipple: () => {
                if (this._lineRipple) {
                    this._lineRipple.deactivate();
                }
            }, setLineRippleTransformOrigin: (normalizedX) => {
                if (this._lineRipple) {
                    this._lineRipple.setRippleCenter(normalizedX);
                }
            }, 
            /* Notched Outline Adapter Methods */
            notchOutline: (labelWidth, isRtl) => this._outline.notch(labelWidth, isRtl), closeOutline: () => this._outline.closeNotch(), hasOutline: () => !!this._outline });
    }
    render() {
        const { value, label, box, outlined, disabled, icon, iconTrailing, fullWidth, required, placeHolder, helperText, type, pattern, minLength, maxLength, min, max, step } = this;
        const hostClassInfo = {
            'mdc-text-field--with-leading-icon': icon && !iconTrailing,
            'mdc-text-field--with-trailing-icon': icon && iconTrailing,
            'mdc-text-field--box': box,
            'mdc-text-field--no-label': !label,
            'mdc-text-field--outlined': outlined,
            'mdc-text-field--disabled': disabled,
            'mdc-text-field--fullwidth': fullWidth
        };
        const labelClassInfo = {
            'mdc-floating-label--float-above': !!value
        };
        const inputOptions = {
            value,
            required,
            type,
            placeHolder,
            label,
            disabled,
            pattern,
            minLength,
            maxLength,
            min,
            max,
            step
        };
        return html `
      ${this.renderStyle()}
      <div class="mdc-text-field mdc-text-field--upgraded ${classMap(hostClassInfo)}" .ripple="${!outlined ? ripple({ unbounded: false }) : undefined}">
        ${icon ? html `<i class="material-icons mdc-text-field__icon">${icon}</i>` : ''}
        ${this._renderInput(inputOptions)}
        ${label ? html `<label class="mdc-floating-label ${classMap(labelClassInfo)}" for="text-field">${label}</label>` : ''}
        ${outlined
            ? html `
            <div class="mdc-notched-outline">
              <svg><path class="mdc-notched-outline__path"/></svg>
            </div>
            <div class="mdc-notched-outline__idle"></div>`
            : html `<div class="mdc-line-ripple"></div>`}
      </div>
      ${helperText ? html `<p class="mdc-text-field-helper-text" aria-hidden="true">${helperText}</p>` : ''}
    `;
    }
    _renderInput({ value, required, type, placeHolder, label, disabled, pattern, minLength, maxLength, min, max, step }) {
        return html `<input
      id="text-field"
      class="mdc-text-field__input ${value ? 'mdc-text-field--upgraded' : ''}"
      type="${type}"
      placeholder="${placeHolder}"
      aria-label="${label}"
      .value="${value}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?pattern="${pattern}"
      ?minlength="${minLength}"
      ?maxlength="${maxLength}"
      ?min="${min}"
      ?max="${max}"
      ?step="${step}"
      @input="${this.handleInteractionEvent}"
      @change="${this.handleInteractionEvent}"
      @focus="${this.handleInteractionEvent}"
      @blur="${this.handleInteractionEvent}">`;
    }
    handleInteractionEvent(evt) {
        if (evt.type === 'input') {
            this.value = this.formElement.value;
        }
        emit(this.mdcRoot, evt.type);
    }
    simulateFocus(focused) {
        emit(this.formElement, focused ? 'focus' : 'blur');
    }
};
__decorate([
    query('.mdc-text-field')
], TextField.prototype, "mdcRoot", void 0);
__decorate([
    query('input')
], TextField.prototype, "formElement", void 0);
__decorate([
    query('.mdc-line-ripple')
], TextField.prototype, "lineRippleElement", void 0);
__decorate([
    query('.mdc-floating-label')
], TextField.prototype, "labelElement", void 0);
__decorate([
    query('.mdc-notched-outline')
], TextField.prototype, "outlineElement", void 0);
__decorate([
    property({ type: String, reflect: true }),
    observer(function (value) {
        this.mdcFoundation.setValue(value);
    })
], TextField.prototype, "value", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "label", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "iconTrailing", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "box", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (value) {
        this.mdcFoundation.setDisabled(value);
    })
], TextField.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "fullWidth", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "required", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        this.mdcFoundation.setHelperTextContent(value);
    })
], TextField.prototype, "helperText", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "placeHolder", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "type", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "pattern", void 0);
__decorate([
    property({ type: Number })
], TextField.prototype, "minLength", void 0);
__decorate([
    property({ type: Number })
], TextField.prototype, "maxLength", void 0);
__decorate([
    property()
], TextField.prototype, "min", void 0);
__decorate([
    property()
], TextField.prototype, "max", void 0);
__decorate([
    property({ type: Number })
], TextField.prototype, "step", void 0);
TextField = __decorate([
    customElement('mwc-textfield')
], TextField);
export { TextField };
//# sourceMappingURL=mwc-textfield.js.map