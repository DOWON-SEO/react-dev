import Button, { ButtonProps } from "./Button";
import type { IconProps as CIconProps } from "../../components";
import { Icon as CIcon } from "../../components";

export type IconProps = ButtonProps &
    CIconProps & {
        iconClassName?: string;
    };

export default function Icon({ name, iconClassName, className, ...buttonProps }: IconProps) {
    const btnClassName = ["btn-circle", className].join(" ");
    return (
        <div>
            <Button {...buttonProps} className={btnClassName}>
                <CIcon className={iconClassName} name={name}></CIcon>
            </Button>
            <h1>23</h1>
        </div>
    );
}
