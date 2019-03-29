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
import { FormElement, Foundation, Adapter } from '@material/mwc-base/form-element';
import '@material/mwc-icon/mwc-icon-font';
export interface TextFieldFoundation extends Foundation {
    setValue(value: string): void;
    getValue(): string;
    setDisabled(value: boolean): void;
    setHelperTextContent(value: string): void;
    styleValidity_(isValid: any): void;
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
    new (adapter: Adapter): TextFieldFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-textfield': TextField;
    }
}
export declare class TextField extends FormElement {
    protected mdcRoot: HTMLElement;
    protected input: HTMLInputElement;
    protected textarea: HTMLTextAreaElement;
    protected lineRippleElement: HTMLElement;
    protected labelElement: HTMLElement;
    protected outlineElement: HTMLElement;
    value: string;
    name: string;
    label: string;
    icon: string;
    iconTrailing: boolean;
    box: boolean;
    outlined: boolean;
    dense: boolean;
    disabled: boolean;
    fullWidth: boolean;
    required: boolean;
    helperText: string;
    persistentHelperText: boolean;
    validationMessage: string;
    placeholder: string;
    type: string;
    pattern: any;
    minLength: any;
    maxLength: any;
    min: any;
    max: any;
    step: any;
    cols: any;
    rows: any;
    wrap: any;
    protected readonly formElement: HTMLInputElement;
    protected readonly isTextArea: boolean;
    protected readonly canOutline: boolean;
    protected readonly canNotch: boolean;
    protected _canDisplayPlaceholder: boolean;
    protected canDisplayPlaceholder: boolean;
    protected readonly hasLabel: boolean | "";
    valid: boolean;
    private _lineRippleInstance;
    private readonly _lineRipple;
    private _labelInstance;
    private readonly _label;
    private _outlineInstance;
    private readonly _outline;
    protected readonly mdcFoundationClass: typeof TextFieldFoundation;
    protected mdcFoundation: TextFieldFoundation;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    protected createAdapter(): {
        registerTextFieldInteractionHandler: (evtType: any, handler: any) => void;
        deregisterTextFieldInteractionHandler: (evtType: any, handler: any) => void;
        registerValidationAttributeChangeHandler: (handler: any) => MutationObserver;
        deregisterValidationAttributeChangeHandler: (observer: any) => any;
        isFocused: () => boolean;
        isRtl: () => boolean;
        registerInputInteractionHandler: (evtType: any, handler: any) => void;
        deregisterInputInteractionHandler: (evtType: any, handler: any) => void;
        getNativeInput: () => HTMLInputElement;
        shakeLabel: (shouldShake: any) => any;
        floatLabel: (shouldFloat: any) => void;
        hasLabel: () => boolean;
        getLabelWidth: () => any;
        activateLineRipple: () => void;
        deactivateLineRipple: () => void;
        setLineRippleTransformOrigin: (normalizedX: any) => void;
        notchOutline: (labelWidth: any, isRtl: any) => void;
        closeOutline: () => void;
        hasOutline: () => boolean;
    };
    protected _bindedUpdateNotch: EventListenerOrEventListenerObject;
    firstUpdated(): void;
    render(): import("lit-html/lib/template-result").TemplateResult;
    _renderLabel(): import("lit-html/lib/template-result").TemplateResult | null;
    _renderHelperText(): import("lit-html/lib/template-result").TemplateResult | null;
    _renderOutline(): import("lit-html/lib/template-result").TemplateResult;
    _renderTextarea({ value, required, cols, placeholder, label, disabled, maxLength, rows, wrap }: {
        value: any;
        required: any;
        cols: any;
        placeholder: any;
        label: any;
        disabled: any;
        maxLength: any;
        rows: any;
        wrap: any;
    }): import("lit-html/lib/template-result").TemplateResult;
    _renderInput({ value, required, type, placeholder, label, disabled, pattern, minLength, maxLength, min, max, step }: {
        value: any;
        required: any;
        type: any;
        placeholder: any;
        label: any;
        disabled: any;
        pattern: any;
        minLength: any;
        maxLength: any;
        min: any;
        max: any;
        step: any;
    }): import("lit-html/lib/template-result").TemplateResult;
    _handleInteractionEvent(evt: Event): void;
    _handleFocusEvent(evt: Event): void;
    _handleBlurEvent(evt: Event): void;
    /**
     * Recalculates Notch after resize textarea
     */
    _handleTextAreaMouseDown(): void;
    updateNotch(): void;
    setFocus(): void;
    simulateFocus(focused: Boolean): void;
}
