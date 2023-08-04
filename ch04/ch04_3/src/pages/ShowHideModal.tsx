import { useCallback } from "react";
import { useToggle } from "../hooks";
import Button from "../theme/daisyui/Button";
import Modal, { ModalAction, ModalContent } from "../theme/daisyui/Modal";
import { Subtitle } from "../components";
import * as D from "../data";

export default function ShowHideModal() {
    const [open, toggleOpen] = useToggle(false);
    const onAccept = useCallback(() => {
        toggleOpen();
    }, [toggleOpen]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ShowHideModal</h2>
            <div className="flex justify-center mt-4">
                <Button className="btn-primary" onClick={toggleOpen}>
                    open modal
                </Button>
                <Modal open={open}>
                    <div>안녕 세상아</div>
                    <ModalContent closeIconClassName="btn-primary btn-outline" onCloseIconClicked={toggleOpen}>
                        <Subtitle>Modal</Subtitle>
                        <p>{D.randomParagraph()}</p>
                        <ModalAction>
                            <button className="btn btn-primary" onClick={onAccept}>
                                Accept
                            </button>
                            <button className="btn" onClick={toggleOpen}>
                                Close
                            </button>
                        </ModalAction>
                    </ModalContent>
                </Modal>
            </div>
        </section>
    );
}
