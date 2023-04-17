import { Div, Icon, Title } from "../components";
import { Overlay } from "../components/Overlay";

export default function OverlayTest() {
    return (
        <section className="mt-4">
            <Title>OverlayTest</Title>
            <Overlay opacityClass="bg-black/70">
                <Div className="relative flex items-center justify-center p-8 bg-white h-1/2">
                    <Div className="absolute" right="1rem" top="1rem">
                        <Icon name="close" className="text-gray-500"/>
                    </Div>
                    <p className="text-5xl">modal dialog box</p>
                </Div>
            </Overlay>
        </section>
    )
}