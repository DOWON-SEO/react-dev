import { Subtitle } from "../components";
import { useResponsive } from "../contexts";

type ContextType = {};

export default function ResponsiveContextTest() {
    const breakpoint = useResponsive();
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ResponsiveContextTest</h2>
            <div className="flex justify-center mt-4">
                <Subtitle>breakpoint: {breakpoint}</Subtitle>
            </div>
        </section>
    );
}
