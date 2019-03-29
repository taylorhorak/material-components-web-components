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
import { BaseElement, Adapter, Foundation } from '@material/mwc-base/base-element.js';
export interface ActionData {
    message?: string;
    timeout?: number;
    actionText?: string;
    multiline?: boolean;
    actionOnBottom?: boolean;
    actionHandler?: Function;
}
export interface SnackbarFoundation extends Foundation {
    dismissesOnAction(): boolean;
    setDismissOnAction(value: boolean): void;
    show(data: ActionData): void;
}
export declare var SnackbarFoundation: {
    prototype: SnackbarFoundation;
    new (adapter: Adapter): SnackbarFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-snackbar': Snackbar;
    }
}
export declare class Snackbar extends BaseElement {
    protected mdcFoundation: SnackbarFoundation;
    protected readonly mdcFoundationClass: typeof SnackbarFoundation;
    protected mdcRoot: HTMLElement;
    protected actionButton: HTMLElement;
    protected textElement: HTMLElement;
    message: string;
    timeout: number;
    actionText: string;
    multiline: boolean;
    actionOnBottom: boolean;
    protected boundActionHandler: () => void;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    protected createAdapter(): {
        setAriaHidden: () => void;
        unsetAriaHidden: () => void;
        setActionAriaHidden: () => void;
        unsetActionAriaHidden: () => void;
        setActionText: (text: string) => string;
        setMessageText: (text: string) => string;
        setFocus: () => void;
        isFocused: () => boolean;
        visibilityIsHidden: () => boolean;
        registerCapturedBlurHandler: (handler: EventListener) => void;
        deregisterCapturedBlurHandler: (handler: EventListener) => void;
        registerVisibilityChangeHandler: (handler: EventListener) => void;
        deregisterVisibilityChangeHandler: (handler: EventListener) => void;
        registerCapturedInteractionHandler: (evtType: string, handler: EventListener) => void;
        deregisterCapturedInteractionHandler: (evtType: string, handler: EventListener) => void;
        registerActionClickHandler: (handler: EventListener) => void;
        deregisterActionClickHandler: (handler: EventListener) => void;
        registerTransitionEndHandler: (handler: EventListener) => void;
        deregisterTransitionEndHandler: (handler: EventListener) => void;
        notifyShow: () => boolean;
        notifyHide: () => boolean;
    };
    _actionHandler(): void;
    show(data: ActionData): void;
    dismissesOnAction: boolean;
}
