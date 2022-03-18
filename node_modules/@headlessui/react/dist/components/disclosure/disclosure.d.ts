import React, { ElementType, MutableRefObject } from 'react';
import { Props } from '../../types';
declare let DEFAULT_DISCLOSURE_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface DisclosureRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>): void;
}
export declare function Disclosure<TTag extends ElementType = typeof DEFAULT_DISCLOSURE_TAG>(props: Props<TTag, DisclosureRenderPropArg> & {
    defaultOpen?: boolean;
}): JSX.Element;
export declare namespace Disclosure {
    var Button: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    var Panel: (<TTag extends React.ElementType<any> = "div">(props: Omit<import("../../types").PropsOf<TTag>, "id" | ("as" | "children" | "refName" | "className")> & {
        as?: TTag | undefined;
        children?: React.ReactNode | ((bag: PanelRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (import("../../types").PropsOf<TTag> extends {
        className?: any;
    } ? {
        className?: string | ((bag: PanelRenderPropArg) => string) | undefined;
    } : {}) & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: React.Ref<HTMLDivElement>) => JSX.Element) & {
        displayName: string;
    };
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick';
interface PanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
export {};
