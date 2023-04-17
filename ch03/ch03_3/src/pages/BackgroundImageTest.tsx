import { Div, Title, Subtitle } from "../components";
import * as D from "../data"

const src = D.randomImage(1200, 400)
export default function BackgroundImageTest() {
    return (
        <section className="mt-4">
            <Title>BackgroundImageTest</Title>
            <Div className="bg-cover mt-4 bg-gray-400 h-80" src={src}>
                <Subtitle className="text-gray-500">Some texts</Subtitle>
            </Div>
        </section>
    )
}