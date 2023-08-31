import { Dispatch } from "redux";
import { setErrorMessage } from "./actions";

export const generateErrorMessage =
    (errorMessage: string = "some error occurred") =>
    (dispatch: Dispatch) => {
        dispatch(setErrorMessage(""));
        try {
            throw new Error(errorMessage);
        } catch (error) {
            if (error instanceof Error) dispatch(setErrorMessage(error.message));
        }
    };
