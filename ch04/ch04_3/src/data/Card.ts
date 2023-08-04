import type {IUser} from './User';
import * as D from './date';
import * as C from './chance';
import * as I from './image';
import { makeRandomUser } from './User';

export type ICard = {
    uuid: string,
    writer: IUser,
    image: string,
    title: string,
    paragraphs: string,
    dayMonthYearDate: string
    relativeDate: string|null
}

export function makeCard(uuid:string, writer:IUser, image:string, title:string, paragraphs:string, dayMonthYearDate:string, relativeDate:string|null):ICard {
    return {uuid, writer, image, title, paragraphs, dayMonthYearDate, relativeDate}
}

export function makeRandomCard() {
    const date = D.makeRandomPastDate()
    return makeCard(C.randomUUID(), makeRandomUser(), I.randomImage(), C.randomTitleText(), C.randomParagraph(), D.makeDayMonthYear(date), D.makeRelativeDate(date));
}