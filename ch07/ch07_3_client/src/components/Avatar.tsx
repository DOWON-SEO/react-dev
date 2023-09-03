import { Div } from "./Div";
import type { DivProps } from "./Div";

export type AvatarProps = DivProps & {
    size?: string
}

export function Avatar({className: _className, style, src, size, ...props}:AvatarProps) {
    const w_or_h = size ?? '3rem';
    const className = [_className, 'rounded-full bg-cover bg-gray-300'].join(' ')
    return <Div className={className} src={src} width={w_or_h} height={w_or_h} style={style} {...props}/>
}