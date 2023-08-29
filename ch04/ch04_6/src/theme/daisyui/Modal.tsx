import { Div, ReactDivProps } from "../../components";
import Icon from "./Icon";

export type ModalProps = ReactDivProps & {
    open?: boolean;
};

export default function Modal({ open, className: _className, ...props }: ModalProps) {
    const className = ["modal", open ? "modal-open" : "", _className].join(" ");
    return <div {...props} className={className} />;
}

export type ModalContentProps = ReactDivProps & {
    onCloseIconClicked?: () => void;
    closeIconClassName?: string;
};

export function ModalContent({ onCloseIconClicked, closeIconClassName: _closeIconClassName, className: _className, children, ...props }: ModalContentProps) {
    const showCloseIcon = onCloseIconClicked ? true : false;
    const className = ["modal-box", showCloseIcon && "relative", _className].join(" ");
    if (!showCloseIcon) return <div {...props} className={className} />;

    const closeIconClassName = _closeIconClassName ?? "btn-primary btn-outline btn-sm";
    return (
        <div {...props} className={className}>
            <Div className="absolute" right="0.5rem" top="0.5rem">
                <Icon name="close" className={closeIconClassName} onClick={onCloseIconClicked} />
            </Div>
            {children}
        </div>
    );
}

export type ModalActionProps = ReactDivProps & {};
export function ModalAction({ className: _className, ...props }: ModalActionProps) {
    const className = ["modal-action", _className].join(" ");
    return <div {...props} className={className} />;
}
