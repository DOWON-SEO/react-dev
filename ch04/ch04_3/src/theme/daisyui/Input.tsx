import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
export type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type inputProps = ReactInputProps & {};

export function Input({ className: _className, ...inputProps }: inputProps) {
    const className = ["input", _className].join(" ");
    return <input {...inputProps} className={className} />;
}
