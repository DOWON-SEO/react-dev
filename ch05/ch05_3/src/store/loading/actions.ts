import type * as T from "./types";

export const setLoading = (payload: T.State) => ({
    type: "@loading/setLoadingAction",
    payload,
});
