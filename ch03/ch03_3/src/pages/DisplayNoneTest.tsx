import { Title } from "../components";

export default function DisplayNoneTest() {
    return (
        <section className="mt-4">
            <Title>DisplayNoneTest</Title>
            <div className="mt-4">
                <p className="visible">visibility: visible text</p>
                <p className="invisible">visibility: invisible text</p>
                <p className="hidden">display: none text</p>
            </div>
        </section>
    )
}