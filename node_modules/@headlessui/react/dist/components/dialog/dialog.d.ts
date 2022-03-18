import React, { ElementType, MutableRefObject, Ref } from 'react';
import { Props } from '../../types';
import { PropsForFeatures } from '../../utils/render';
import { Description } from '../description/description';
interface DialogRenderPropArg {
    open: boolean;
}
declare type DialogPropsWeControl = 'id' | 'role' | 'aria-modal' | 'aria-describedby' | 'aria-labelledby' | 'onClick';
declare let DialogRenderFeatures: number;
interface OverlayRenderPropArg {
    open: boolean;
}
declare type OverlayPropsWeControl = 'id' | 'aria-hidden' | 'onClick';
declare let DEFAULT_TITLE_TAG: "h2";
interface TitleRenderPropArg {
    open: boolean;
}
declare type TitlePropsWeControl = 'id';
declare function Title<TTag extends ElementType = typeof DEFAULT_TITLE_TAG>(props: Props<TTag, TitleRenderPropArg, TitlePropsWeControl>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare let Dialog: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, DialogRenderPropArg, DialogPropsWeControl> & (({
    static?: undefined;
} & {
    unmount?: boolean | undefined;
}) | ({
    unmount?: undefined;
} & {
    static?: boolean | undefined;
})) & {
    open?: boolean | undefined;
    onClose(value: boolean): void;
    initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
}, ref: Ref<HTMLDivElement>) => JSX.Element) & {
    displayName: string;
} & {
    Overlay: (<TTag_1 extends React.ElementType<any> = "div">(props: Props<TTag_1, OverlayRenderPropArg, OverlayPropsWeControl>, ref: Ref<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Title: typeof Title;
    Description: typeof Description;
};
export {};
