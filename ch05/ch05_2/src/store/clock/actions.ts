import type * as T from "./types";

// dispatch에 넣을 Action 설정값
export const setClock = (payload: T.State): T.SetClockAction => ({
    type: "@clock/setClock",
    payload,
});
