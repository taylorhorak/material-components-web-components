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
import { FormElement, customElement, query, html, classMap, property, observer } from '@authentic/mwc-base/form-element';
import MDCTextFieldFoundation from '@material/textfield/foundation';
import { cssClasses } from '@material/textfield/constants';
import { MDCLineRipple } from '@material/line-ripple';
import { MDCFloatingLabel } from '@material/floating-label/index';
import { MDCNotchedOutline } from '@material/notched-outline/index';
import { ripple } from '@authentic/mwc-ripple/ripple-directive';
import { emit } from '@authentic/mwc-base/utils';
import { style } from './mwc-textfield-css';
// elements to be registered ahead of time
import '@authentic/mwc-icon/mwc-icon-font';
let TextField = class TextField extends FormElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = false;
        this.box = false;
        this.outlined = false;
        this.dense = false;
        this.disabled = false;
        this.fullWidth = false;
        this.required = false;
        this.helperText = '';
        this.persistentHelperText = false;
        this.validationMessage = '';
        this.placeholder = '';
        this.type = 'input';
        this._canDisplayPlaceholder = !this.hasLabel;
        this.mdcFoundationClass = MDCTextFieldFoundation;
    }
    get formElement() {
        return this.input || this.textarea;
    }
    get isTextArea() {
        return this.type === 'textarea';
    }
    get canOutline() {
        return (this.outlined && !this.fullWidth) || this.isTextArea;
    }
    get canNotch() {
        return this.mdcFoundation && this.mdcFoundation.adapter_.hasLabel() && this.mdcFoundation.shouldFloat;
    }
    get canDisplayPlaceholder() {
        return this._canDisplayPlaceholder;
    }
    set canDisplayPlaceholder(value) {
        if (this._canDisplayPlaceholder !== value) {
            this._canDisplayPlaceholder = value;
            this.requestUpdate();
        }
    }
    get hasLabel() {
        return this.label && !this.fullWidth;
    }
    get valid() {
        return this.mdcFoundation && !this.mdcFoundation.adapter_.hasClass(cssClasses.INVALID);
    }
    get _lineRipple() {
        if (!this.canOutline && this.lineRippleElement) {
            this._lineRippleInstance = this._lineRippleInstance || new MDCLineRipple(this.lineRippleElement);
        }
        return this._lineRippleInstance;
    }
    get _label() {
        if (this.hasLabel && this.labelElement) {
            this._labelInstance = this._labelInstance || new MDCFloatingLabel(this.labelElement);
        }
        return this._labelInstance;
    }
    get _outline() {
        if (this.canOutline && this.outlineElement) {
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
            shakeLabel: (shouldShake) => this.hasLabel && this._label.shake(shouldShake), floatLabel: (shouldFloat) => {
                if (this.hasLabel) {
                    this._label.float(shouldFloat);
                    this.canDisplayPlaceholder = shouldFloat;
                }
            }, hasLabel: () => this.hasLabel || this.canOutline, getLabelWidth: () => this.hasLabel ? this._label.getWidth() + 1 : -12, 
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
            notchOutline: (labelWidth, isRtl) => {
                this._outline.notch(labelWidth, isRtl);
            }, closeOutline: () => {
                this._outline.closeNotch();
            }, hasOutline: () => !!this._outline });
    }
    firstUpdated() {
        super.firstUpdated();
        this._bindedUpdateNotch = this.updateNotch.bind(this);
        window.addEventListener('resize', () => {
            if (this.canNotch) {
                this.updateNotch();
            }
        });
        if (this.canNotch) {
            setTimeout(() => {
                this.updateNotch();
            }, 0);
        }
    }
    render() {
        const { value, label, box, outlined, disabled, icon, iconTrailing, dense, fullWidth, required, placeholder, type, pattern, minLength, maxLength, min, max, step, cols, rows, wrap } = this;
        const hostClassInfo = {
            'mdc-text-field': true,
            'mdc-text-field--upgraded': !!value,
            'mdc-text-field--with-leading-icon': icon && !iconTrailing,
            'mdc-text-field--with-trailing-icon': icon && iconTrailing,
            'mdc-text-field--box': box,
            'mdc-text-field--no-label': !this.hasLabel,
            'mdc-text-field--outlined': outlined && type !== 'textarea',
            'mdc-text-field--textarea': this.isTextArea,
            'mdc-text-field--disabled': disabled,
            'mdc-text-field--dense': dense,
            'mdc-text-field--fullwidth': fullWidth
        };
        const inputOptions = {
            value,
            required,
            type,
            placeholder,
            label,
            disabled,
            pattern,
            minLength,
            maxLength,
            min,
            max,
            step,
            cols,
            rows,
            wrap
        };
        return html `
      ${this.renderStyle()}
      <div class="${classMap(hostClassInfo)}" .ripple="${!outlined ? ripple({ unbounded: false }) : null}">
        ${icon ? html `<i class="material-icons mdc-text-field__icon">${icon}</i>` : ''}
        ${this.isTextArea ? this._renderTextarea(inputOptions) : this._renderInput(inputOptions)}
        ${this._renderLabel()}
        ${this._renderOutline()}
      </div>
      ${this._renderHelperText()}
    `;
    }
    _renderLabel() {
        const classes = {
            'mdc-floating-label': true,
            'mdc-floating-label--float-above': !!this.value
        };
        return this.hasLabel
            ? html `<label class="${classMap(classes)}" for="text-field">${this.label}</label>`
            : null;
    }
    _renderHelperText() {
        const isValidationMessage = !this.valid && !!this.validationMessage;
        const classes = {
            'mdc-text-field-helper-text': true,
            'mdc-text-field-helper-text--persistent': this.persistentHelperText,
            'mdc-text-field-helper-text--validation-msg': !this.valid && !!this.validationMessage,
        };
        const message = isValidationMessage ? this.validationMessage : this.helperText;
        return this.helperText || isValidationMessage
            ? html `<p class="${classMap(classes)}" aria-hidden="true">${message}</p>`
            : null;
    }
    _renderOutline() {
        return html `${this.canOutline
            ? html `
          <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
          </div>
          <div class="mdc-notched-outline__idle"></div>`
            : html `<div class="mdc-line-ripple"></div>`}`;
    }
    _renderTextarea({ value, required, cols, placeholder, label, disabled, maxLength, rows, wrap }) {
        return html `
      <textarea
        id="text-field"
        class="mdc-text-field__input"
        placeholder="${this.canDisplayPlaceholder ? placeholder : ''}"
        aria-label="${label}"
        .value="${value}"
        ?cols="${cols}"
        ?required="${required}"
        ?disabled="${disabled}"
        ?maxlength="${maxLength}"
        ?rows="${rows}"
        ?wrap="${wrap}"
        @input="${this._handleInteractionEvent}"
        @mousedown="${this._handleTextAreaMouseDown}"
        @change="${this._handleInteractionEvent}"
        @focus="${this._handleFocusEvent}"
        @blur="${this._handleBlurEvent}"
      ></textarea>
    `;
    }
    _renderInput({ value, required, type, placeholder, label, disabled, pattern, minLength, maxLength, min, max, step }) {
        return html `
      <input
        id="text-field"
        class="mdc-text-field__input"
        type="${type}"
        placeholder="${this.canDisplayPlaceholder ? placeholder : ''}"
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
        @input="${this._handleInteractionEvent}"
        @change="${this._handleInteractionEvent}"
        @focus="${this._handleFocusEvent}"
        @blur="${this._handleBlurEvent}">
    `;
    }
    _handleInteractionEvent(evt) {
        if (evt.type === 'input') {
            this.value = this.formElement.value;
        }
        emit(this.mdcRoot, evt.type);
    }
    _handleFocusEvent(evt) {
        this._handleInteractionEvent(evt);
        this.requestUpdate();
    }
    _handleBlurEvent(evt) {
        this._handleInteractionEvent(evt);
        this.requestUpdate();
    }
    /**
     * Recalculates Notch after resize textarea
     */
    _handleTextAreaMouseDown() {
        if (this.canNotch) {
            document.addEventListener('mousemove', this._bindedUpdateNotch);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', this._bindedUpdateNotch);
            }, { once: true });
        }
    }
    updateNotch() {
        this.mdcFoundation.notchOutline(true);
    }
    setFocus() {
        this.formElement.focus();
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
], TextField.prototype, "input", void 0);
__decorate([
    query('textarea')
], TextField.prototype, "textarea", void 0);
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
    property({ type: Boolean })
], TextField.prototype, "dense", void 0);
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
    property({ type: Boolean })
], TextField.prototype, "persistentHelperText", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "validationMessage", void 0);
__decorate([
    property({ type: String })
], TextField.prototype, "placeholder", void 0);
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
__decorate([
    property({ type: Number })
], TextField.prototype, "cols", void 0);
__decorate([
    property({ type: Number })
], TextField.prototype, "rows", void 0);
__decorate([
    property({ type: Boolean })
], TextField.prototype, "wrap", void 0);
TextField = __decorate([
    customElement('mwc-textfield')
], TextField);
export { TextField };
//# sourceMappingURL=mwc-textfield.js.map