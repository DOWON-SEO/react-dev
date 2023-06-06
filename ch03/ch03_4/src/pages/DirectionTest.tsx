import { Div, Title, Subtitle } from "../components";
import * as D from "../data";

const boxes = D.range(1, 9 + 1).map(index => {
    return (
        <p key={index} className="border-2 border-blue-300 p-1 mt-1 ml-1">
            {index}
        </p>
    )
})

export default function DirectionTest() {
    
    return (
        <section className="mt-4">
            <Title>DirectionTest</Title>
            <Div className="flex flex-row mt-4">
                <Div className="mr-2">
                    <Subtitle>flow-row</Subtitle>
                    <Div className="flex flex-row">{boxes}</Div>
                </Div>
                <Div className="mr-2">
                    <Subtitle>flow-row-reverse</Subtitle>
                    <Div className="flex flex-row-reverse">{boxes}</Div>
                </Div>
                <Div className="mr-2">
                    <Subtitle>flow-col</Subtitle>
                    <Div className="flex flex-col">{boxes}</Div>
                </Div>
                <Div className="mr-2">
                    <Subtitle>flow-col-reverse</Subtitle>
                    <Div className="flex flex-col-reverse">{boxes}</Div>
                </Div>
            </Div>
        </section>
    )
}