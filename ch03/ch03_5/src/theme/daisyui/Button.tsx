import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = ReactButtonProps & {};

export default function Button({ children, className: _className, ...buttonProps }: PropsWithChildren<ButtonProps>) {
    const className = ["btn", _className].join(" ");
    return (
        <button className={className} {...buttonProps}>
            {/* You can use children here if needed */}
            {children}
        </button>
    );
}
