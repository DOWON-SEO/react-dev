import * as C from './chance';
import * as I from './image';

export type IUser = {
    uuid: string,
    name: string,
    jobTitle: string,
    email: string,
    avatar: string
}

export function makeUser(uuid: string, name: string, jobTitle:string, email:string, avatar:string):IUser {
    return {uuid, name, jobTitle, email, avatar}
}

export function makeRandomUser():IUser {
    return makeUser(C.randomUUID(), C.randomName(), C.randomJobTitle(), C.randomEmail(), I.randomAvatar())
}