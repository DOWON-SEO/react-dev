import { Subtitle } from "../components";
import { useWindowResize } from "../hooks";

export default function WindowResizeTest() {
    const [width, height] = useWindowResize();
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">WindowResizeTest</h2>
            <div className="flex justify-center mt-4">
                <Subtitle className="mt-4">
                    width: {width}, height: {height}
                </Subtitle>
            </div>
        </section>
    );
}
