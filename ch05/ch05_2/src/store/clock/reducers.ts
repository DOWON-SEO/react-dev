import * as T from "./types";

const initialState: T.State = new Date();

//초기값 설정을 위한 리듀서
export const reducer = (state: T.State = initialState, action: T.Actions) => {
    // dispatch에서 전달받은 action.type 값에 따라 수행할 동작 설정
    switch (action.type) {
        case "@clock/setClock":
            return action.payload;
    }
    return state;
};
