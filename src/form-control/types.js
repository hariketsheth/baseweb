/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow
import * as React from 'react';
import type {OverrideT} from '../helpers/overrides.js';

export type FormControlStateT = {|
  captionId: string,
|};

export type OverridesT = {
  /** Customizes the label element. */
  Label?: OverrideT,
  /** Customizes the label end enhancer element. */
  LabelEndEnhancer?: OverrideT,
  /** Customizes the label container element. */
  LabelContainer?: OverrideT,
  /** Customizes the caption element. */
  Caption?: OverrideT,
  /** Customizes the container element. */
  ControlContainer?: OverrideT,
};
export type FormControlPropsT = {
  overrides: OverridesT,
  /** A label rendered above the input field. */
  label: ?(React.Node | ((props: {}) => React.Node)),
  /** A caption rendered below the input field. */
  caption: ?(React.Node | ((props: {}) => React.Node)),
  /** Displays label in light gray color if true */
  disabled?: boolean,
  /** Error state of the input. If an error prop passed it will be rendered in place of caption as an error message. */
  error?: React.Node | ((props: {}) => React.Node),
  /** Positive state of the input. If an error prop passed it will be rendered in place of positive as an error message. */
  positive?: React.Node | ((props: {}) => React.Node),
  /** The id of the related form element. Defaults to the id property of the child, if any. */
  htmlFor?: string,
  /** Adds a label end enhancer to the label */
  labelEndEnhancer?: ?(React.Node | ((props: {}) => React.Node)),
  /** Adds a length counter to the form control. If your input does not have a "string" value exposed as a prop, you provide the length as an object.*/
  counter?: boolean | {|length?: number, maxLength?: number, error?: boolean|},
  children: React.Node,
};

export type StylePropsT = {
  $disabled?: boolean,
  $error?: boolean,
  $positive?: boolean,
  $length?: number,
  $maxLength?: number,
};
