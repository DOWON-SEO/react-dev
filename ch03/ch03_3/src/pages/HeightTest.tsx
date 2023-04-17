import { Div, Title } from "../components";

export default function HeightTest() {
    return (
        <section className="mt-4">
            <Title>HeightTest</Title>
            <Div className="h-40 bg-blue-500 text-center mt-4">
                {/* h-1/2 : 전체 높이(40)의 절반 */}
                <Div className="bg-blue-500 h-1/2"> 
                    <p className="text-center text-red-50">h-1/2</p>
                </Div>
                {/* h-20 : 전체 높이(40)의 절반 */}
                <Div className="bg-red-500 h-20">
                    <p className="text-center text-red-50">h-20</p>
                </Div>
            </Div>
        </section>
    )
}