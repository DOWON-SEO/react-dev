import { getServerUrl } from "./getServerUrl";

function getAndDel(methodName: string, jwt?: string | null | undefined) {
    return (path: string, jwt?: string | null | undefined) => {
        let headers = { "Content-Type": "application/json" };
        let init: RequestInit = { method: methodName };
        if (jwt) {
            init = {
                ...init,
                headers: { ...headers, Authorization: `bearer ${jwt}` },
            };
        } else init = { ...init, headers };
        return fetch(getServerUrl(path), init);
    };
}

export const get = getAndDel("GET");
export const del = getAndDel("DELETE");
