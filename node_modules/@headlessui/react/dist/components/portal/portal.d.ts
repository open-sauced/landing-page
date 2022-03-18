import React, { ElementType } from 'react';
import { Props } from '../../types';
declare let DEFAULT_PORTAL_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface PortalRenderPropArg {
}
export declare function Portal<TTag extends ElementType = typeof DEFAULT_PORTAL_TAG>(props: Props<TTag, PortalRenderPropArg>): React.ReactPortal | null;
export declare namespace Portal {
    var Group: <TTag extends React.ElementType<any> = React.ExoticComponent<{
        children?: React.ReactNode;
    }>>(props: Omit<import("../../types").PropsOf<TTag>, "as" | "children" | "refName" | "className"> & {
        as?: TTag | undefined;
        children?: React.ReactNode | ((bag: GroupRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (import("../../types").PropsOf<TTag> extends {
        className?: any;
    } ? {
        className?: string | ((bag: GroupRenderPropArg) => string) | undefined;
    } : {}) & {
        target: React.MutableRefObject<HTMLElement | null>;
    }) => JSX.Element;
}
interface GroupRenderPropArg {
}
export {};
