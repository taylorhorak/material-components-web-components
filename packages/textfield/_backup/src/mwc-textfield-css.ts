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
import {css} from '@material/mwc-base/base-element';

export const style = css`/**
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
.mdc-floating-label {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  position: absolute;
  /* @noflip */
  left: 0;
  /* @noflip */
  transform-origin: left top;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  /* @alternate */
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {
  /* @noflip */
  right: 0;
  /* @noflip */
  left: auto;
  /* @noflip */
  transform-origin: right top;
  /* @noflip */
  text-align: right;
}

.mdc-floating-label--float-above {
  cursor: auto;
}

.mdc-floating-label--float-above {
  transform: translateY(-50%) scale(0.75);
}

.mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-standard 250ms 1;
}

@keyframes mdc-floating-label-shake-float-above-standard {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
  }
}
.mdc-line-ripple {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: 2;
}

.mdc-line-ripple--active {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating {
  opacity: 0;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  /* @noflip */
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {
  /* @noflip */
  text-align: right;
}
.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
  box-sizing: border-box;
  height: 100%;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
}
.mdc-notched-outline__leading {
  /* @noflip */
  border-left: 1px solid;
  /* @noflip */
  border-right: none;
  width: 12px;
}
[dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-left: none;
  /* @noflip */
  border-right: 1px solid;
}
.mdc-notched-outline__trailing {
  /* @noflip */
  border-left: none;
  /* @noflip */
  border-right: 1px solid;
  flex-grow: 1;
}
[dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-left: 1px solid;
  /* @noflip */
  border-right: none;
}
.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
  max-width: calc(100% - 12px * 2);
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  top: 17px;
  bottom: auto;
  max-width: 100%;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(100% / .75);
}

.mdc-notched-outline--notched .mdc-notched-outline__notch {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {
  /* @noflip */
  padding-left: 8px;
  /* @noflip */
  padding-right: 0;
}

.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  padding: 0;
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden;
}
.mdc-ripple-surface--test-edge-var-bug::before {
  border: var(--mdc-ripple-surface-test-edge-var);
}

.mdc-text-field-helper-text {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  margin: 0;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  will-change: opacity;
}
.mdc-text-field-helper-text::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}

.mdc-text-field-helper-text--persistent {
  transition: none;
  opacity: 1;
  will-change: initial;
}

.mdc-text-field-character-counter {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  /* @noflip */
  margin-left: auto;
  /* @noflip */
  margin-right: 0;
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 0;
  white-space: nowrap;
}
.mdc-text-field-character-counter::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: auto;
}
[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon .mdc-text-field__icon,
.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  position: absolute;
  bottom: 16px;
  cursor: pointer;
}

.mdc-text-field__icon:not([tabindex]),
.mdc-text-field__icon[tabindex="-1"] {
  cursor: default;
  pointer-events: none;
}

.mdc-text-field {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: transform, opacity;
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  height: 56px;
  overflow: hidden;
  /* @alternate */
  will-change: opacity, transform, color;
}
.mdc-text-field::before, .mdc-text-field::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-text-field::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
}
.mdc-text-field.mdc-ripple-upgraded::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field.mdc-ripple-upgraded::after {
  top: 0;
  /* @noflip */
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-text-field.mdc-ripple-upgraded--unbounded::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-text-field.mdc-ripple-upgraded--foreground-activation::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field::before, .mdc-text-field::after {
  background-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field:hover::before {
  opacity: 0.04;
}
.mdc-text-field:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-text-field::before, .mdc-text-field::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-text-field.mdc-ripple-upgraded::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field .mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  caret-color: #6200ee;
  /* @alternate */
  caret-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  border-bottom-color: rgba(0, 0, 0, 0.42);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover, .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover {
  border-bottom-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field .mdc-line-ripple {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field:not(.mdc-text-field--disabled) {
  background-color: whitesmoke;
}
.mdc-text-field .mdc-floating-label {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
  top: 18px;
  pointer-events: none;
}
[dir=rtl] .mdc-text-field .mdc-floating-label, .mdc-text-field .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--textarea .mdc-floating-label {
  /* @noflip */
  left: 4px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--textarea .mdc-floating-label, .mdc-text-field--textarea .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 4px;
}
.mdc-text-field--outlined .mdc-floating-label {
  /* @noflip */
  left: 4px;
  /* @noflip */
  right: initial;
  top: 17px;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 4px;
}
.mdc-text-field--outlined--with-leading-icon .mdc-floating-label {
  /* @noflip */
  left: 36px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 36px;
}
.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above {
  /* @noflip */
  left: 40px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 40px;
}

.mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  background: none;
  appearance: none;
}
.mdc-text-field__input::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field__input:-ms-input-placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.54) !important;
}
.mdc-text-field--fullwidth .mdc-text-field__input::placeholder, .mdc-text-field--fullwidth .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--fullwidth .mdc-text-field__input-container::placeholder, .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--no-label .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--no-label .mdc-text-field__input-container::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--focused .mdc-text-field__input-container::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}
.mdc-text-field__input:focus, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:focus {
  outline: none;
}
.mdc-text-field__input:invalid, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:invalid {
  box-shadow: none;
}
.mdc-text-field__input:-webkit-autofill, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:-webkit-autofill {
  z-index: auto !important;
}
.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input, .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  padding: 16px;
}

.mdc-text-field__input:-webkit-autofill + .mdc-floating-label, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:-webkit-autofill + .mdc-floating-label {
  transform: translateY(-50%) scale(0.75);
  cursor: auto;
}

.mdc-text-field--outlined {
  border: none;
  overflow: visible;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.24);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-144%) scale(1);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--outlined::before, .mdc-text-field--outlined::after {
  content: none;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined .mdc-text-field__input-container {
  display: flex;
  padding: 12px 16px 14px;
  border: none !important;
  background-color: transparent;
  z-index: 1;
}
.mdc-text-field--outlined .mdc-text-field__icon {
  z-index: 2;
}

.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}

.mdc-text-field--outlined.mdc-text-field--disabled {
  background-color: transparent;
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input-container {
  border-bottom: none;
}

.mdc-text-field--outlined.mdc-text-field--dense {
  height: 48px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-134%) scale(1);
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.8rem;
}
.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-120%) scale(0.8);
}
.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input-container {
  padding: 12px 12px 7px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
  top: 14px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon {
  top: 12px;
}

.mdc-text-field--with-leading-icon .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input-container, .mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl], .mdc-text-field--with-leading-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
.mdc-text-field--with-leading-icon .mdc-floating-label {
  /* @noflip */
  left: 48px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label, .mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 48px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input-container, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--outlined [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-144%) translateX(-32px) scale(1);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-144%) translateX(32px) scale(1);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) translateX(-32px) scale(0.75);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-130%) translateX(32px) scale(0.75);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
  /* @noflip */
  left: 36px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 36px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-134%) translateX(-21px) scale(1);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-134%) translateX(21px) scale(1);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.8rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-120%) translateX(-21px) scale(0.8);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-120%) translateX(21px) scale(0.8);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
  /* @noflip */
  left: 32px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 32px;
}

.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input-container, .mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl], .mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input-container, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl], .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon.mdc-text-field--outlined [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: auto;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon {
  /* @noflip */
  right: 12px;
  /* @noflip */
  left: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  right: auto;
  /* @noflip */
  left: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input-container, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 48px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  bottom: 16px;
  transform: scale(0.8);
}

.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input-container, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--dense [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 44px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label {
  /* @noflip */
  left: 44px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 44px;
}

.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 44px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input-container, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl], .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-trailing-icon.mdc-text-field--dense [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: auto;
  /* @noflip */
  right: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon {
  /* @noflip */
  right: 12px;
  /* @noflip */
  left: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  right: auto;
  /* @noflip */
  left: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input-container {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 44px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input-container, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl], .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) [dir=rtl].mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense [dir=rtl].mdc-text-field__input-container {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 44px;
}

.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-70%) scale(0.8);
}
.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-dense 250ms 1;
}
.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--dense .mdc-text-field__input-container {
  padding: 12px 12px 0;
}
.mdc-text-field--dense .mdc-floating-label {
  font-size: 0.813rem;
}
.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.813rem;
}

.mdc-text-field__input:required ~ .mdc-floating-label::after, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:required ~ .mdc-floating-label::after,
.mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:required ~ .mdc-notched-outline .mdc-floating-label::after {
  margin-left: 1px;
  content: "*";
}

.mdc-text-field--textarea {
  display: inline-flex;
  width: auto;
  height: auto;
  transition: none;
  overflow: visible;
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.24);
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--textarea .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
.mdc-text-field--textarea::before, .mdc-text-field--textarea::after {
  content: none;
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--textarea .mdc-floating-label--float-above {
  transform: translateY(-144%) scale(1);
}
.mdc-text-field--textarea .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) scale(0.75);
}
.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--textarea .mdc-text-field-character-counter {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
  position: absolute;
  bottom: 13px;
}
[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter, .mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea .mdc-text-field__input-container {
  align-self: auto;
  box-sizing: border-box;
  height: auto;
  margin: 8px 1px 1px 0;
  padding: 0 16px 16px;
  border: none;
}
.mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input, .mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field-character-counter + .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input-container {
  margin-bottom: 28px;
  padding-bottom: 0;
}
.mdc-text-field--textarea .mdc-floating-label {
  top: 17px;
  bottom: auto;
  width: auto;
  pointer-events: none;
}
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}

.mdc-text-field--fullwidth {
  width: 100%;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {
  display: block;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after {
  content: none;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  padding: 0;
}
.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input-container {
  resize: vertical;
}

.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field-helper-line {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.mdc-text-field--dense + .mdc-text-field-helper-line {
  margin-bottom: 4px;
}
.mdc-text-field + .mdc-text-field-helper-line {
  padding-right: 16px;
  padding-left: 16px;
}

.mdc-form-field > .mdc-text-field + label {
  align-self: flex-start;
}

.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(98, 0, 238, 0.87);
}
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after, .mdc-text-field--focused .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:required ~ .mdc-floating-label::after, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--focused .mdc-text-field__input-container:required ~ .mdc-floating-label::after,
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after,
.mdc-text-field--focused .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:required ~ .mdc-notched-outline .mdc-floating-label::after,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--focused .mdc-text-field__input-container:required ~ .mdc-notched-outline .mdc-floating-label::after {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
  opacity: 1;
}

.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}

.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input, .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover, .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple {
  background-color: #b00020;
  /* @alternate */
  background-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid .mdc-text-field__input, .mdc-text-field--invalid .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--invalid .mdc-text-field__input-container {
  caret-color: #b00020;
  /* @alternate */
  caret-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon ~ .mdc-text-field__icon {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  opacity: 1;
}

.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field--disabled {
  background-color: #fafafa;
  border-bottom: none;
  pointer-events: none;
}
.mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field--disabled .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--disabled .mdc-text-field__input-container {
  border-bottom-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field--disabled .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--disabled .mdc-text-field__input-container {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-floating-label {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-text-field-character-counter,
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-text-field__icon {
  color: rgba(0, 0, 0, 0.3);
}
.mdc-text-field--disabled:not(.mdc-text-field--textarea) {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}

.mdc-text-field--textarea.mdc-text-field--disabled {
  background-color: transparent;
  /* @alternate */
  background-color: #f9f9f9;
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input-container {
  border-bottom: none;
}

@keyframes mdc-floating-label-shake-float-above-text-field-dense {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
  0% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense {
  0% {
    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
  0% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl {
  0% {
    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-textarea {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
}
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
.material-icons {
  font-family: var(--mdc-icon-font, "Material Icons");
  font-weight: normal;
  font-style: normal;
  font-size: var(--mdc-icon-size, 24px);
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

:host {
  outline: none;
  display: block;
}

:host(:not([fullwidth])) {
  display: inline-block;
}

.mdc-text-field {
  width: 100%;
}
.mdc-text-field .mdc-text-field__input-container {
  width: 100%;
  height: 100%;
}
.mdc-text-field .mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  position: relative;
}
.mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder, .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input-container::placeholder, .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder, .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container::placeholder, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input-container::placeholder {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container {
  border-bottom-color: rgba(0, 0, 0, 0.42);
  padding: 0;
}
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover {
  border-bottom-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container .mdc-text-field__input, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container .mdc-text-field__input-container {
  border-bottom: none;
}
.mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container {
  padding: 10px 3px 3px 0px;
}
.mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container .mdc-text-field__input-container {
  margin: 0;
  box-sizing: border-box;
}
.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea):hover {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field.mdc-text-field--outlined:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--outlined:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--outlined:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--focused):not(.mdc-text-field--invalid) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}

.mdc-text-field--outlined::before,
.mdc-text-field--outlined::after,
.mdc-text-field--textarea::before,
.mdc-text-field--textarea::after {
  display: none !important;
}

.mdc-text-field.mdc-text-field--textarea {
  border: none;
  overflow: visible;
}
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.24);
}
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field.mdc-text-field--textarea .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
.mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
[dir=rtl] .mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
.mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
[dir=rtl] .mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
.mdc-text-field.mdc-text-field--textarea .mdc-floating-label--float-above {
  transform: translateY(-144%) scale(1);
}
.mdc-text-field.mdc-text-field--textarea .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) scale(0.75);
}
.mdc-text-field.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field.mdc-text-field--textarea::before, .mdc-text-field.mdc-text-field--textarea::after {
  content: none;
}
.mdc-text-field.mdc-text-field--textarea:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field.mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container {
  display: flex;
  padding: 12px 16px 14px;
  border: none !important;
  background-color: transparent;
  z-index: 1;
}
.mdc-text-field.mdc-text-field--textarea .mdc-text-field__icon {
  z-index: 2;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled {
  background-color: transparent;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input-container {
  border-bottom: none;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input-container:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense {
  height: 48px;
  height: auto;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-134%) scale(1);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.8rem;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-120%) scale(0.8);
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field__input-container {
  padding: 12px 12px 7px;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-floating-label {
  top: 14px;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field__icon {
  top: 12px;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-text-field__input-container {
  min-height: 40px;
}
.mdc-text-field.mdc-text-field--textarea.mdc-text-field--dense .mdc-floating-label {
  top: 12px;
}
.mdc-text-field.mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field.mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--textarea .mdc-text-field__input-container {
  display: flex;
  padding: 2px 13px 11px 16px;
  margin: 10px 3px 3px 0px;
  min-height: 56px;
  resize: vertical;
}
.mdc-text-field.mdc-text-field--textarea .mdc-floating-label {
  padding: 0;
  margin: 0;
  bottom: auto;
  top: 18px;
}

.mdc-text-field.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field.mdc-text-field--dense .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--dense .mdc-text-field__input-container {
  padding: 12px;
}
.mdc-text-field.mdc-text-field--dense .mdc-floating-label {
  font-size: 0.813rem;
  bottom: 14px;
}
.mdc-text-field.mdc-text-field--dense.mdc-text-field--outlined .mdc-floating-label {
  bottom: 10px;
}
.mdc-text-field.mdc-text-field--dense:not(.mdc-text-field--textarea) {
  height: 40px;
}
.mdc-text-field.mdc-text-field--dense.mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field.mdc-text-field--dense.mdc-text-field--textarea .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field.mdc-text-field--dense.mdc-text-field--textarea .mdc-text-field__input-container {
  padding: 0px 12px 7px;
}
.mdc-text-field.mdc-text-field--dense.mdc-text-field--textarea .mdc-floating-label {
  bottom: 36px;
}

.mdc-text-field.mdc-text-field--dense:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-floating-label {
  bottom: 10px;
}
.mdc-text-field.mdc-text-field--dense:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-floating-label.mdc-floating-label--float-above {
  display: none;
}

.mdc-text-field--no-label .mdc-text-field__input, .mdc-text-field--no-label .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--no-label .mdc-text-field__input-container {
  padding: 12px 16px 14px;
}

.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field__input, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field__input-container {
  padding: 20px 0px 6px;
}

.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-floating-label {
  left: 0px;
}

.mdc-text-field--no-label .mdc-text-field__input, .mdc-text-field--no-label .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--no-label .mdc-text-field__input-container {
  padding: 12px 16px 14px;
}

.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field__input, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field__input-container, .mdc-text-field:not(.mdc-text-field--outlined):not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-text-field__input-container {
  padding: 20px 0px 6px;
}

.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--no-label) .mdc-floating-label {
  left: 0px;
}`;
