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
import { BaseElement, Foundation, Adapter } from "@authentic/mwc-base/base-element";
import { Button as MWCButton } from '@authentic/mwc-button';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';
import "@authentic/mwc-button";
export interface DialogFoundation extends Foundation {
    open(): void;
    close(): void;
    handleInteraction(): void;
    handleDocumentKeydown(): void;
    layout: any;
}
export declare var DialogFoundation: {
    prototype: DialogFoundation;
    new (adapter: Adapter): DialogFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-dialog': Dialog;
    }
}
export declare class Dialog extends BaseElement {
    protected mdcFoundation: DialogFoundation;
    protected readonly mdcFoundationClass: typeof DialogFoundation;
    protected mdcRoot: HTMLElement;
    protected container: HTMLElement;
    protected content: HTMLElement;
    protected scrim: HTMLElement;
    protected buttons: MWCButton[];
    protected footerSlot: HTMLSlotElement;
    headerLabel: string;
    acceptLabel: string;
    declineLabel: string;
    scrollable: boolean;
    opened: boolean;
    readonly _buttons: MWCButton[];
    readonly _defaultButton: MWCButton;
    protected _layout: any;
    protected createAdapter(): {
        addClass: (className: any) => void;
        removeClass: (className: any) => void;
        hasClass: (className: any) => boolean;
        addBodyClass: (className: any) => void;
        removeBodyClass: (className: any) => void;
        eventTargetMatches: (target: any, selector: any) => any;
        getActionFromEvent: (event: any) => any;
        clickDefaultButton: () => void;
        reverseButtons: () => void;
        notifyOpening: () => void;
        notifyOpened: () => void;
        notifyClosing: (action: any) => void;
        notifyClosed: (action: any) => void;
    };
    protected _handleInteraction: EventListenerOrEventListenerObject;
    protected _handleDocumentKeydown: EventListenerOrEventListenerObject;
    protected _handleOpening: EventListenerOrEventListenerObject;
    protected _handleClosing: EventListenerOrEventListenerObject;
    firstUpdated(): void;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    renderButton(label: String, action: String, isDefault?: boolean): import("lit-html/lib/template-result").TemplateResult;
    show(): void;
    close(): void;
}
