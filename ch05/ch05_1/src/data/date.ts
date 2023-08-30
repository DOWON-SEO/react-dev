import { DateTime } from "luxon";

export function makeRandomPastDate() {
    const value = new Date().valueOf();
    const n = 100000;
    return new Date(value - Math.floor(Math.random() * n * n));
}

export function makeRelativeDate(date: Date){
    return DateTime.fromJSDate(date).startOf('day').toRelative();
}

export function randomRelativeDate() {
    return makeRelativeDate(makeRandomPastDate());
}

export function makeDayMonthYear(date: Date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
}

export function randomDayMonthYear() {
    return makeDayMonthYear(makeRandomPastDate())
}