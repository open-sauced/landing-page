import React, { ElementType, Ref } from 'react';
import { Props } from '../../types';
import { PropsForFeatures } from '../../utils/render';
interface ComboboxRenderPropArg<T> {
    open: boolean;
    disabled: boolean;
    activeIndex: number | null;
    activeOption: T | null;
}
declare let ComboboxRoot: (<TTag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>, TType = string>(props: Props<TTag, ComboboxRenderPropArg<TType>, "value" | "disabled" | "onChange"> & {
    value: TType;
    onChange(value: TType): void;
    disabled?: boolean | undefined;
}, ref: React.Ref<TTag>) => JSX.Element) & {
    displayName: string;
};
interface InputRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type InputPropsWeControl = 'id' | 'role' | 'type' | 'aria-labelledby' | 'aria-expanded' | 'aria-activedescendant' | 'onKeyDown' | 'onChange' | 'displayValue';
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'tabIndex' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'aria-labelledby' | 'disabled' | 'onClick' | 'onKeyDown';
declare let DEFAULT_LABEL_TAG: "label";
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type LabelPropsWeControl = 'id' | 'ref' | 'onClick';
declare function Label<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: Props<TTag, LabelRenderPropArg, LabelPropsWeControl>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
interface OptionsRenderPropArg {
    open: boolean;
}
declare type OptionsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'hold' | 'id' | 'onKeyDown' | 'role' | 'tabIndex';
declare let OptionsRenderFeatures: number;
declare let DEFAULT_OPTION_TAG: "li";
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
declare type ComboboxOptionPropsWeControl = 'id' | 'role' | 'tabIndex' | 'aria-disabled' | 'aria-selected' | 'onPointerLeave' | 'onMouseLeave' | 'onPointerMove' | 'onMouseMove';
declare function Option<TTag extends ElementType = typeof DEFAULT_OPTION_TAG, TType = Parameters<typeof ComboboxRoot>[0]['value']>(props: Props<TTag, OptionRenderPropArg, ComboboxOptionPropsWeControl | 'value'> & {
    disabled?: boolean;
    value: TType;
}): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare let Combobox: (<TTag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>, TType = string>(props: Props<TTag, ComboboxRenderPropArg<TType>, "value" | "disabled" | "onChange"> & {
    value: TType;
    onChange(value: TType): void;
    disabled?: boolean | undefined;
}, ref: React.Ref<TTag>) => JSX.Element) & {
    displayName: string;
} & {
    Input: (<TTag_1 extends React.ElementType<any> = "input", TType_1 = unknown>(props: Props<TTag_1, InputRenderPropArg, InputPropsWeControl> & {
        displayValue?(item: TType_1): string;
        onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    }, ref: Ref<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Button: (<TTag_2 extends React.ElementType<any> = "button">(props: Props<TTag_2, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Label: typeof Label;
    Options: (<TTag_3 extends React.ElementType<any> = "ul">(props: Props<TTag_3, OptionsRenderPropArg, OptionsPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })) & {
        hold?: boolean | undefined;
    }, ref: Ref<HTMLUListElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Option: typeof Option;
};
export {};
