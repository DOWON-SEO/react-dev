import { DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type IconProps = ReactSpanProps & {
    name: string;
};

export function Icon({ name, className: _className, ...props }: IconProps) {
    const className = ["material-icons", _className].join(" ");
    return (
        <span className={className} {...props}>
            {name}
        </span>
    );
}
