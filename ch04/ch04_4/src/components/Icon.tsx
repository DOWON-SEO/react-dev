import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
    name: string
    style?: CSSProperties
};

export function Icon({name, className: _className, ...props}:IconProps) {
    const className = ['material-icons', _className].join(' ');
    console.log(className);
    return <span className={className} {...props}>{name}</span>;
}