import type { ReactDivProps } from "./Div";
import { Div } from "./Div";

export type OverlayProps = ReactDivProps & {
    opacityClass?: string
}

export function Overlay({className: _className, opacityClass, children, ...props}:OverlayProps) {
    const className = [_className, 'abolute z-50 w-screen h-screen', opacityClass ?? 'bg-black/70', 'flex items-center justify-center'].join(' ');
    return <Div {...props} className={className} top="0" left="0">{children}</Div>
}