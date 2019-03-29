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
import { Menu as MWCMenu } from '@material/mwc-menu/mwc-menu';
import '@material/mwc-menu';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item-separator';
export interface SelectFoundation extends Foundation {
    setValue(value: String): void;
    setDisabled(value: Boolean): void;
    setSelectedIndex(value: Number): void;
    deactivateBottomLine(): void;
    adapter_: any;
}
export interface SelectProxy {
    value?: string;
    text?: string;
    selectedIndex: number;
    selectedOptions?: any;
    selectedItems?: any;
    options?: any;
    items?: any;
    updateComplete?: Promise<any>;
}
export declare var SelectFoundation: {
    prototype: SelectFoundation;
    new (adapter: Adapter): SelectFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-select': Select;
    }
}
export declare class HTMLSelectElementProxy {
    protected select: SelectProxy;
    protected isReady: boolean;
    value: string;
    selectedIndex: number;
    readonly selectedOptions: any[];
    readonly items: any[];
    readonly text: string;
    constructor(select: SelectProxy);
}
export declare class Select extends FormElement {
    protected mdcRoot: HTMLElement;
    protected input: HTMLInputElement;
    protected slotSelect: HTMLSlotElement;
    protected slotMenu: HTMLSlotElement;
    protected lineRippleElement: HTMLElement;
    protected labelElement: HTMLElement;
    protected outlineElement: HTMLElement;
    protected helperTextElement: HTMLElement;
    selectedIndex: number;
    label: string;
    box: boolean;
    outlined: boolean;
    dense: boolean;
    disabled: boolean;
    fullWidth: boolean;
    required: boolean;
    value: string;
    name: string;
    helperText: string;
    persistentHelperText: boolean;
    validationMessage: string;
    protected _valid: boolean;
    valid: boolean;
    protected readonly slottedElement: HTMLElement | null;
    protected readonly select: HTMLSelectElement;
    protected readonly menu: MWCMenu;
    protected readonly isMenuOpen: boolean;
    protected readonly items: any[];
    protected _selectProxyInstance: HTMLSelectElementProxy;
    protected readonly selectProxy: HTMLSelectElementProxy;
    protected _formElementInstance: HTMLElement;
    protected readonly formElement: HTMLElement;
    private _lineRippleInstance;
    private readonly _lineRipple;
    private _labelInstance;
    private readonly _label;
    private _outlineInstance;
    private readonly _outline;
    protected readonly mdcFoundationClass: typeof SelectFoundation;
    protected mdcFoundation: SelectFoundation;
    protected _isMouseDown: Boolean;
    protected _isFocused: Boolean;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    protected createAdapter(): {
        floatLabel: (value: any) => void;
        activateBottomLine: () => void;
        deactivateBottomLine: () => void;
        setDisabled: (disabled: any) => void;
        registerInteractionHandler: (type: any, handler: any) => void;
        deregisterInteractionHandler: (type: any, handler: any) => void;
        getSelectedIndex: () => number;
        setSelectedIndex: (index: any) => void;
        getValue: () => string;
        setValue: (value: any) => void;
    };
    firstUpdated(): Promise<void>;
    render(): import("lit-html/lib/template-result").TemplateResult;
    _renderHelperText(): import("lit-html/lib/template-result").TemplateResult | null;
    _isValid(): boolean;
    _setValid(isValid: boolean): void;
    _styleValidity(isValid: boolean): void;
    _hideHelperText(): void;
    _showHelperTextToScreenReader(): void;
    _openNotch(): void;
    /**
     * Updates value and selectedIndex
     */
    _handleSelection(evt: any): void;
    /**
     * Updates select proxy selectedIndex
     */
    _handleMenuSelected(evt: CustomEvent): void;
    /**
     * Recover focus
     */
    _handleMenuClosed(): void;
    /**
     * Opens menu if already focused
     */
    _handleMouseDown(): void;
    /**
     * Handle keys that open the menu
     */
    _handleKeydown(evt: any): void;
    /**
     * Adds focused class, opens menu and redirects focus even to mdcRoot
     */
    _handleFocus(): void;
    /**
     * Removes focused class and redirects blur event to mdcRoot
     */
    _handleBlur(evt: any): void;
    _notifyChange(): void;
    _notifyFocus(): void;
    _notifyBlur(): void;
    openMenu(): void;
    closeMenu(): void;
}
