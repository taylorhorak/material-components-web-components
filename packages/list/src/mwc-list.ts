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
	customElement,
	query,
	html,
	property,
	observer
  } from '@material/mwc-base/base-element.js';
import { LitElement } from 'lit-element';
import { ripple } from '@material/mwc-ripple/ripple-directive';

import { style } from './mwc-list-item-css.js';

declare global {
	interface HTMLElementTagNameMap {
		'mwc-list': List;
	}
}

@customElement('mwc-list' as any)
export class List extends LitElement {

	@query ('.mdc-list')
	mdcRoot!: HTMLElement;

	// Default displays the expanded panel with gutters and elevation. Flat display flat ui.
	@property({ type: String })
	displayMode = 'default';

	// Whether the expansion indicator should be hidden.
	@property({ type: Boolean })
	hideToggle = false;

	// Whether the accordion should allow multiple expanded accordion items simultaneously.
	@property({ type: Boolean })
	multi = true;

	// A readonly id value to use for unique selection coordination.
	@property({ type: String })
	id = '';

	protected closeAll() {
		console.log('here is where you closed all!')
	}

	protected openAll(){
		console.log('here is where you opened all!')
	}

	get classList() {
		return this.mdcRoot.classList;
	}

	get setAttribute() {
		return this.mdcRoot ? this.mdcRoot.setAttribute : () => {};
	}

	static styles = style;

	render() {
		const { displayMode, hideToggle, multi, id } = this;
	
		return html`
		  <div class="mdc-list" role="menuitem" displayMode="${displayMode}" ${hideToggle} ${multi} id=${id} .ripple="${ripple({ unbounded: false })}">
			<slot></slot>>
		  </div>`;
	}
}
