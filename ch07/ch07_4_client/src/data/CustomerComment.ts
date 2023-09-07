import * as C from "./chance";
import * as I from "./image";
export type CustomerComment = {
    uuid: string;
    name: string;
    jobTitle: string;
    company: string;
    avatar: string;
    comment: string;
};

export const makeRandomCustomerComment = (): CustomerComment => ({
    uuid: C.randomUUID(),
    name: C.randomName(),
    jobTitle: C.randomJobTitle(),
    company: C.randomCompanyName(),
    avatar: I.randomAvatar(),
    comment: C.randomParagraph(1),
});
