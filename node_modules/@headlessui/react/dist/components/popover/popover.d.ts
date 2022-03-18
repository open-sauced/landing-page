import React, { ElementType, MutableRefObject } from 'react';
import { Props } from '../../types';
declare let DEFAULT_POPOVER_TAG: "div";
interface PopoverRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>): void;
}
export declare function Popover<TTag extends ElementType = typeof DEFAULT_POPOVER_TAG>(props: Props<TTag, PopoverRenderPropArg>): JSX.Element;
export declare namespace Popover {
    var Button: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Overlay: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, OverlayRenderPropArg, OverlayPropsWeControl> & (({
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
    var Panel: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, PanelRenderPropArg, PanelPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })) & {
        focus?: boolean | undefined;
    }, ref: React.Ref<HTMLDivElement>) => JSX.Element) & {
        displayName: string;
    };
    var Group: <TTag extends React.ElementType<any> = "div">(props: Props<TTag, GroupRenderPropArg, "id">) => JSX.Element;
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick';
interface OverlayRenderPropArg {
    open: boolean;
}
declare type OverlayPropsWeControl = 'id' | 'aria-hidden' | 'onClick';
interface PanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
declare type PanelPropsWeControl = 'id' | 'onKeyDown';
interface GroupRenderPropArg {
}
export {};
