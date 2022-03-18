import React, { ElementType } from 'react';
import { Props } from '../../types';
declare let DEFAULT_RADIO_GROUP_TAG: "div";
interface RadioGroupRenderPropArg {
}
declare type RadioGroupPropsWeControl = 'role' | 'aria-labelledby' | 'aria-describedby' | 'id';
export declare function RadioGroup<TTag extends ElementType = typeof DEFAULT_RADIO_GROUP_TAG, TType = string>(props: Props<TTag, RadioGroupRenderPropArg, RadioGroupPropsWeControl | 'value' | 'onChange' | 'disabled'> & {
    value: TType;
    onChange(value: TType): void;
    disabled?: boolean;
}): JSX.Element;
export declare namespace RadioGroup {
    var Option: <TTag extends React.ElementType<any> = "div", TType = unknown>(props: Props<TTag, OptionRenderPropArg, "value" | "disabled" | RadioPropsWeControl> & {
        value: TType;
        disabled?: boolean | undefined;
    }) => JSX.Element;
    var Label: typeof import("../../components/label/label").Label;
    var Description: typeof import("../../components/description/description").Description;
}
interface OptionRenderPropArg {
    checked: boolean;
    active: boolean;
    disabled: boolean;
}
declare type RadioPropsWeControl = 'aria-checked' | 'id' | 'onBlur' | 'onClick' | 'onFocus' | 'ref' | 'role' | 'tabIndex';
export {};
