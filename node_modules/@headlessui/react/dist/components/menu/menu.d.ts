import React, { ElementType } from 'react';
import { Props } from '../../types';
declare let DEFAULT_MENU_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface MenuRenderPropArg {
    open: boolean;
}
export declare function Menu<TTag extends ElementType = typeof DEFAULT_MENU_TAG>(props: Props<TTag, MenuRenderPropArg>): JSX.Element;
export declare namespace Menu {
    var Button: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Items: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, ItemsRenderPropArg, ItemsPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: React.Ref<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Item: <TTag extends React.ElementType<any> = React.ExoticComponent<{
        children?: React.ReactNode;
    }>>(props: Props<TTag, ItemRenderPropArg, MenuItemPropsWeControl> & {
        disabled?: boolean | undefined;
        onClick?: ((event: {
            preventDefault: Function;
        }) => void) | undefined;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onKeyDown' | 'onClick';
interface ItemsRenderPropArg {
    open: boolean;
}
declare type ItemsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'id' | 'onKeyDown' | 'role' | 'tabIndex';
interface ItemRenderPropArg {
    active: boolean;
    disabled: boolean;
}
declare type MenuItemPropsWeControl = 'id' | 'role' | 'tabIndex' | 'aria-disabled' | 'onPointerLeave' | 'onPointerMove' | 'onMouseLeave' | 'onMouseMove' | 'onFocus';
export {};
