import { Div, DivProps, Title } from "../components";
import * as D from "../data"
import User from "./User";

export type CardProps = DivProps & {
    card:  D.ICard
}

export default function Card({card, ...props}:CardProps) {
    const {writer, image, title, paragraphs, dayMonthYearDate, relativeDate} = card;
    return (
        <Div {...props}>
            <div className="flex flex-col">
                <Div src={image} className="h-60"/>
                <User user={writer} className="mt-2"/>
            </div>
        </Div>
    )
}