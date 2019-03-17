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
  FormElement,
  Foundation,
  Adapter,
  customElement,
  query,
  html,
  classMap,
  property,
  observer
} from '@authentic/mwc-base/form-element';
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

export interface TextFieldFoundation extends Foundation {
  setValue(value: string): void;
  getValue(): string;
  setDisabled(value: boolean): void;
  setHelperTextContent(value: string): void;
  styleValidity_(isValid):void;
  getNativeInput_(): any;
  isValid(): boolean;
  setValid(bool: boolean): void;
  isBadInput_(): boolean;
  shouldFloat: boolean;
  shouldAlwaysFloat_: boolean;
  shouldShake: boolean;
  isFocused_: boolean;
  notchOutline(value: boolean): void;
  adapter_: any;
}

export declare var TextFieldFoundation: {
  prototype: TextFieldFoundation;
  new(adapter: Adapter): TextFieldFoundation;
}

declare global {
  interface HTMLElementTagNameMap {
    'mwc-textfield': TextField;
  }
}

@customElement('mwc-textfield' as any)
export class TextField extends FormElement {

  @query('.mdc-text-field')
  protected mdcRoot!: HTMLElement;

  @query('input')
  protected input!: HTMLInputElement;

  @query('textarea')
  protected textarea!: HTMLTextAreaElement;

  @query('.mdc-line-ripple')
  protected lineRippleElement!: HTMLElement;

  @query('.mdc-floating-label')
  protected labelElement!: HTMLElement;

  @query('.mdc-notched-outline')
  protected outlineElement!: HTMLElement;

  @property({ type: String, reflect: true })
  @observer(function(this: TextField, value: string) {
    this.mdcFoundation.setValue(value);
  })
  value = '';

  @property({type: String})
  name = ''

  @property({ type: String })
  label = '';

  @property({ type: String })
  icon = '';

  @property({ type: Boolean })
  iconTrailing = false;

  @property({ type: Boolean })
  box = false;

  @property({ type: Boolean })
  outlined = false;

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  @observer(function(this: TextField, value: boolean) {
    this.mdcFoundation.setDisabled(value);
  })
  disabled = false;

  @property({ type: Boolean })
  fullWidth = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  @observer(function(this: TextField, value: string) {
    this.mdcFoundation.setHelperTextContent(value);
  })
  helperText = '';

  @property({ type: Boolean })
  persistentHelperText = false;

  @property({ type: String })
  validationMessage = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  type = 'text';

  @property({ type: String })
  pattern;

  @property({ type: Number })
  minLength;

  @property({ type: Number })
  maxLength;

  // type can be 'number' || 'Date'
  @property()
  min;

  // type can be 'number' || 'Date'
  @property()
  max;

  @property({ type: Number })
  step;

  @property({ type: Number })
  cols;

  @property({ type: Number })
  rows;

  @property({ type: Boolean })
  wrap;

  protected get formElement() {
    return this.input || this.textarea;
  }

  protected get isTextArea() {
    return this.type === 'textarea';
  }

  protected get canOutline() {
    return (this.outlined && !this.fullWidth) || this.isTextArea;
  }

  protected get canNotch() {
    return this.mdcFoundation && this.mdcFoundation.adapter_.hasLabel() && this.mdcFoundation.shouldFloat;
  }

  protected _canDisplayPlaceholder = !this.hasLabel;
  protected get canDisplayPlaceholder() {
    return this._canDisplayPlaceholder;
  }
  protected set canDisplayPlaceholder(value: boolean) {
    if (this._canDisplayPlaceholder !== value) {
      this._canDisplayPlaceholder = value;
      this.requestUpdate();
    }
  }

  protected get hasLabel() {
    return this.label && !this.fullWidth;
  }

  get valid(): boolean {
    return this.mdcFoundation && !this.mdcFoundation.adapter_.hasClass(cssClasses.INVALID);
  }

  set valid(bool:boolean) {
    this.mdcFoundation.setValid(bool);
    this.requestUpdate();
  }

  private _lineRippleInstance!: MDCLineRipple;
  private get _lineRipple(): MDCLineRipple {
    if ( !this.canOutline && this.lineRippleElement ) {
      this._lineRippleInstance = this._lineRippleInstance || new MDCLineRipple(this.lineRippleElement);
    }
    return this._lineRippleInstance;
  }

  private _labelInstance!: MDCFloatingLabel;
  private get _label(): MDCFloatingLabel {
    if ( this.hasLabel && this.labelElement ) {
      this._labelInstance = this._labelInstance || new MDCFloatingLabel(this.labelElement);
    }

    return this._labelInstance;
  }

  private _outlineInstance!: MDCNotchedOutline;
  private get _outline(): MDCNotchedOutline {
    if ( this.canOutline && this.outlineElement ) {
      this._outlineInstance = this._outlineInstance || new MDCNotchedOutline(this.outlineElement);
    }

    return this._outlineInstance;
  }

  protected readonly mdcFoundationClass: typeof TextFieldFoundation = MDCTextFieldFoundation;

  protected mdcFoundation!: TextFieldFoundation;

  static styles = style;

  protected createAdapter() {
    return {
      ...super.createAdapter(),

      /* Text Field Adapter Methods */
      registerTextFieldInteractionHandler: (evtType, handler) => this.mdcRoot.addEventListener(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) => this.mdcRoot.removeEventListener(evtType, handler),
      registerValidationAttributeChangeHandler: (handler) => {
        const observer = new MutationObserver(handler);
        const targetNode = this.formElement;
        const config = {attributes: true};
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect(),
      isFocused: () => {
        return document.activeElement === this.formElement;
      },
      isRtl: () => window.getComputedStyle(this.mdcRoot).getPropertyValue('direction') === 'rtl',

      /* Input Adapter Methods */
      registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
      getNativeInput: () => this.formElement,

      /* Floating Label Adapter Methods */
      shakeLabel: (shouldShake) => this.hasLabel && this._label.shake(shouldShake),
      floatLabel: (shouldFloat) => {
        if (this.hasLabel) {
          this._label.float(shouldFloat);
          this.canDisplayPlaceholder = shouldFloat;
        }
      },
      hasLabel: () => this.hasLabel || this.canOutline, // due to notched outline
      getLabelWidth: () => this.hasLabel ? this._label.getWidth() + 1 : -12, // due to notched outline label spacing

      /* Line Ripple Adapter Methods */
      activateLineRipple: () => {
        if (this._lineRipple) {
          this._lineRipple.activate();
        }
      },
      deactivateLineRipple: () => {
        if (this._lineRipple) {
          this._lineRipple.deactivate();
        }
      },
      setLineRippleTransformOrigin: (normalizedX) => {
        if (this._lineRipple) {
          this._lineRipple.setRippleCenter(normalizedX);
        }
      },

      /* Notched Outline Adapter Methods */
      notchOutline: (labelWidth, isRtl) => {
        this._outline.notch(labelWidth, isRtl)
      },
      closeOutline: () => {
        this._outline.closeNotch()
      },
      hasOutline: () => !!this._outline,
    }
  }

  protected _bindedUpdateNotch!: EventListenerOrEventListenerObject;

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
    const {
      value,
      label,
      box,
      outlined,
      disabled,
      icon,
      iconTrailing,
      dense,
      fullWidth,
      required,
      placeholder,
      type,
      pattern,
      minLength,
      maxLength,
      min,
      max,
      step,
      cols,
      rows,
      wrap
    } = this;

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
    }

    return html`
      <div class="${classMap(hostClassInfo)}" .ripple="${!outlined ? ripple({ unbounded: false }) : null}">
        ${icon ? html`<i class="material-icons mdc-text-field__icon">${icon}</i>` : ''}
        <div class="mdc-text-field__input-container">
          ${this.isTextArea ? this._renderTextarea(inputOptions) : this._renderInput(inputOptions)}
        </div>
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
      ? html`<label class="${classMap(classes)}" for="text-field">${this.label}</label>`
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
      ? html`<p class="${classMap(classes)}" aria-hidden="true">${message}</p>`
      : null;
  }

  _renderOutline() {
    return html`${
      this.canOutline
        ? html`
          <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
          </div>
          <div class="mdc-notched-outline__idle"></div>`
        : html`<div class="mdc-line-ripple"></div>`
    }`;
  }

  _renderTextarea({
    value,
    required,
    cols,
    placeholder,
    label,
    disabled,
    maxLength,
    rows,
    wrap
  }) {
    return html`
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

  _renderInput({
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
    step
  }) {
    return html`
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

  _handleInteractionEvent(evt: Event) {
    if (evt.type === 'input') {
      this.value = this.formElement.value;
    }

    emit(this.mdcRoot, evt.type);
  }

  _handleFocusEvent(evt: Event) {
    this._handleInteractionEvent(evt);
    this.requestUpdate();
  }

  _handleBlurEvent(evt: Event) {
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
        document.removeEventListener('mousemove', this._bindedUpdateNotch)
      }, { once: true });
    }
  }

  updateNotch() {
    this.mdcFoundation.notchOutline(true);
  }

  setFocus() {
    this.formElement.focus();
  }

  simulateFocus(focused: Boolean) {
    emit(this.formElement, focused ? 'focus' : 'blur');
  }
}
