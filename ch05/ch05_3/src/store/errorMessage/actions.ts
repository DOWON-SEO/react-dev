import type * as T from "./types";

export function setErrorMessage(payload: T.State): T.SetErrorMessageAction {
    return {
        type: "@errorMessage/setErrorMessage",
        payload,
    };
}
