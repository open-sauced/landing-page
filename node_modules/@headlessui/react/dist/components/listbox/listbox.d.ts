import React, { ElementType } from 'react';
import { Props } from '../../types';
declare let DEFAULT_LISTBOX_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface ListboxRenderPropArg {
    open: boolean;
    disabled: boolean;
}
export declare function Listbox<TTag extends ElementType = typeof DEFAULT_LISTBOX_TAG, TType = string>(props: Props<TTag, ListboxRenderPropArg, 'value' | 'onChange'> & {
    value: TType;
    onChange(value: TType): void;
    disabled?: boolean;
    horizontal?: boolean;
}): JSX.Element;
export declare namespace Listbox {
    var Button: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Label: <TTag extends React.ElementType<any> = "label">(props: Props<TTag, LabelRenderPropArg, LabelPropsWeControl>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    var Options: (<TTag extends React.ElementType<any> = "ul">(props: Props<TTag, OptionsRenderPropArg, OptionsPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: React.Ref<HTMLUListElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Option: <TTag extends React.ElementType<any> = "li", TType = unknown>(props: Props<TTag, OptionRenderPropArg, "value" | ListboxOptionPropsWeControl> & {
        disabled?: boolean | undefined;
        value: TType;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'aria-labelledby' | 'disabled' | 'onKeyDown' | 'onClick';
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type LabelPropsWeControl = 'id' | 'ref' | 'onClick';
interface OptionsRenderPropArg {
    open: boolean;
}
declare type OptionsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'aria-orientation' | 'id' | 'onKeyDown' | 'role' | 'tabIndex';
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
declare type ListboxOptionPropsWeControl = 'id' | 'role' | 'tabIndex' | 'aria-disabled' | 'aria-selected' | 'onPointerLeave' | 'onMouseLeave' | 'onPointerMove' | 'onMouseMove' | 'onFocus';
export {};
