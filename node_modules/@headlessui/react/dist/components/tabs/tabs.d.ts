import React, { ElementType } from 'react';
import { Props } from '../../types';
declare let DEFAULT_TABS_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface TabsRenderPropArg {
    selectedIndex: number;
}
declare function Tabs<TTag extends ElementType = typeof DEFAULT_TABS_TAG>(props: Props<TTag, TabsRenderPropArg> & {
    defaultIndex?: number;
    onChange?: (index: number) => void;
    selectedIndex?: number;
    vertical?: boolean;
    manual?: boolean;
}): JSX.Element;
interface ListRenderPropArg {
    selectedIndex: number;
}
declare type ListPropsWeControl = 'role' | 'aria-orientation';
declare let DEFAULT_TAB_TAG: "button";
interface TabRenderPropArg {
    selected: boolean;
}
declare type TabPropsWeControl = 'id' | 'role' | 'type' | 'aria-controls' | 'aria-selected' | 'tabIndex';
export declare function Tab<TTag extends ElementType = typeof DEFAULT_TAB_TAG>(props: Props<TTag, TabRenderPropArg, TabPropsWeControl>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare namespace Tab {
    var Group: typeof Tabs;
    var List: <TTag extends React.ElementType<any> = "div">(props: Props<TTag, ListRenderPropArg, ListPropsWeControl> & {}) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    var Panels: <TTag extends React.ElementType<any> = "div">(props: Props<TTag, PanelsRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    var Panel: <TTag extends React.ElementType<any> = "div">(props: Props<TTag, PanelRenderPropArg, PanelPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    }))) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}
interface PanelsRenderPropArg {
    selectedIndex: number;
}
interface PanelRenderPropArg {
    selected: boolean;
}
declare type PanelPropsWeControl = 'id' | 'role' | 'aria-labelledby' | 'tabIndex';
export {};
