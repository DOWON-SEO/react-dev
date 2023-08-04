import { Subtitle, Title } from "../components";
import Modal, { ModalAction, ModalContent } from "../theme/daisyui/Modal";
import * as D from "../data";
import Button from "../theme/daisyui/Button";

export default function ModalTest() {
    const open = true;
    const closeClicked = () => {
        alert("closeClicked");
    };
    const acceptClicked = () => {
        alert("acceptClicked");
    };
    return (
        <section className="mt-4">
            <Title>ModalTest</Title>
            <Modal open={open}>
                <ModalContent onCloseIconClicked={closeClicked}>
                    <Subtitle>Modal</Subtitle>
                    <p className="mt-4 text-justify">{D.randomParagraph()}</p>
                    <ModalAction>
                        <Button className="w-24 normal-case btn-primary btn-sm" onClick={acceptClicked}>
                            Accept
                        </Button>
                    </ModalAction>
                </ModalContent>
            </Modal>
        </section>
    );
}
