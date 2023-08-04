import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = ReactButtonProps & {};

export default function Button({ children, ...buttonProps }: PropsWithChildren<ButtonProps>) {
    return (
        <button {...buttonProps}>
            {/* You can use children here if needed */}
            {children}
        </button>
    );
}
