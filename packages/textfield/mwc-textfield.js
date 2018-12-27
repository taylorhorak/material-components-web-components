var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, query, observer, property, customElement } from '@authentic/mwc-base/base-element.js';
import { FormElement } from '@authentic/mwc-base/form-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { style } from './mwc-textfield-css.js';
import MDCTextfieldFoundation from '@material/textfield/foundation.js';
let Textfield = class Textfield extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTextfieldFoundation;
        this.value = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = false;
        this.box = false;
        this.outlined = false;
        this.disabled = false;
        this.fullWidth = true;
        this.required = false;
        this.helperText = '';
        this.placeHolder = '';
        this.type = '';
    }
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    renderStyle() {
        return style;
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
            ${!fullWidth && icon ? html `<i class="material-icons mdc-text-field__icon" tabindex="0">${icon}</i>` : ''}
            ${this._renderInput({ value, required, type, placeHolder, label })}
            ${!fullWidth && label ? html `<label class="mdc-floating-label ${value ? 'mdc-floating-label--float-above' : ''}" for="text-field">${label}</label>` : ''}
            ${!fullWidth && outlined ? html `<div class="mdc-notched-outline">
                <svg><path class="mdc-notched-outline__path"/></svg>
                </div>
                <div class="mdc-notched-outline__idle"></div>` :
            html `<div class="mdc-line-ripple"></div>`}
            </div>
            ${helperText ? html `<p class="mdc-text-field-helper-text" aria-hidden="true">${helperText}</p>` : ''}
        `;
    }
    _renderInput({ value, required, type, placeHolder, label }) {
        return html `<input type="${type}" placeholder="${placeHolder}" ?required="${required}" class="mdc-text-field__input ${value ? 'mdc-text-field--upgraded' : ''}" id="text-field" .value="${value}" aria-label="${label}">`;
    }
    firstUpdated() {
        super.firstUpdated();
    }
    get valid() {
        // return this._component && this._component.isValid();
        return true;
    }
    set valid(value) {
        // this.componentReady().then((component) => {
        //     component.setValid(value);
        // });
        console.log(value);
    }
    click() {
        // this._input.click();
    }
    focus() {
        // this._input.focus();
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter());
    }
};
__decorate([
    query('.mdc-textfield')
], Textfield.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-textfield')
], Textfield.prototype, "formElement", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        1;
        this.mdcFoundation.setValue(value);
    })
], Textfield.prototype, "value", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "label", void 0);
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
    property({ type: String })
], Textfield.prototype, "helperText", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "placeHolder", void 0);
__decorate([
    property({ type: String })
], Textfield.prototype, "type", void 0);
Textfield = __decorate([
    customElement('mwc-textfield')
], Textfield);
export { Textfield };
//# sourceMappingURL=mwc-textfield.js.map