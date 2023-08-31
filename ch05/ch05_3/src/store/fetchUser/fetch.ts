import * as Loading from "../loading";
import * as Error from "../errorMessage";
import * as D from "../../data";
import { Dispatch } from "redux";
import { changeEmail, changeName, changePicture, setUser } from "./actions";

export const getRemoteUser = () => async (dispatch: Dispatch) => {
    dispatch(Loading.setLoading(true));
    dispatch(Error.setErrorMessage(""));
    try {
        const user = await D.fetchRandomUser();
        dispatch(setUser(user));
    } catch (error: any) {
        Error.setErrorMessage(error.message);
    } finally {
        dispatch(Loading.setLoading(false));
    }
};

export const changeNameByFetching = () => async (dispatch: Dispatch) => {
    dispatch(Loading.setLoading(true));
    dispatch(Error.setErrorMessage(""));
    try {
        const user = await D.fetchRandomUser();
        dispatch(changeName(user.name));
    } catch (error: any) {
        Error.setErrorMessage(error.message);
    } finally {
        dispatch(Loading.setLoading(false));
    }
};

export const changeEmailByFetching = () => async (dispatch: Dispatch) => {
    dispatch(Loading.setLoading(true));
    dispatch(Error.setErrorMessage(""));
    try {
        const user = await D.fetchRandomUser();
        dispatch(changeEmail(user.email));
    } catch (error: any) {
        Error.setErrorMessage(error.message);
    } finally {
        dispatch(Loading.setLoading(false));
    }
};

export const changePictureByFetching = () => async (dispatch: Dispatch) => {
    dispatch(Loading.setLoading(true));
    dispatch(Error.setErrorMessage(""));
    try {
        const user = await D.fetchRandomUser();
        dispatch(changePicture(user.picture));
    } catch (error: any) {
        Error.setErrorMessage(error.message);
    } finally {
        dispatch(Loading.setLoading(false));
    }
};
