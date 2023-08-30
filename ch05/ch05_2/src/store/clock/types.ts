import { Action } from "redux";

export type State = Date; // 상태값의 타입은 Date

// 액션 이름은 @clock/setClock
// payload에 들어갈 값은 State와 같은 Date
export type SetClockAction = Action<"@clock/setClock"> & {
    payload: State;
};

export type Actions = SetClockAction;
