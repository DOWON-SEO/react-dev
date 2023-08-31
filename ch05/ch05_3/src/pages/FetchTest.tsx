import { useCallback, useEffect, useState } from "react";
import { useToggle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import Button from "../theme/daisyui/Button";
import { Avatar } from "../components";
import { Appstate } from "../store";
import * as D from "../data";
import * as F from "../store/fetchUser";

export default function FetchTest() {
    const dispatch = useDispatch();
    const { loading, errorMessage, fetchUser: user } = useSelector<Appstate, Appstate>((state) => state);

    const getRemoteUser = useCallback(() => {
        dispatch<any>(F.getRemoteUser());
    }, [dispatch]);
    const changeName = useCallback(() => {
        dispatch<any>(F.changeNameByFetching());
    }, [dispatch]);
    const changeEmail = useCallback(() => {
        dispatch<any>(F.changeEmailByFetching());
    }, [dispatch]);
    const changePicture = useCallback(() => {
        dispatch<any>(F.changePictureByFetching());
    }, [dispatch]);

    useEffect(getRemoteUser, [getRemoteUser]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">RemoteUserTest</h2>
            <div className="flex justify-center mt-4">
                <Button className="btn-sm btn btn-primary" onClick={getRemoteUser}>
                    get remote user
                </Button>
                <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>
                    change user
                </Button>
                <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>
                    change email
                </Button>
                <Button className="ml-4 btn-sm btn btn-secondary" onClick={changePicture}>
                    change picture
                </Button>
            </div>
            {loading ? (
                <div className="flex items-center justify-center">
                    <button className="btn btn-circle loading"></button>
                </div>
            ) : null}
            {errorMessage.length ? (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
                </div>
            ) : null}

            <div className="flex justify-center p-4 mt-4">
                <Avatar src={user.picture.large} />
                <div className="ml-4">
                    <p className="text-xl text-bold">
                        {user.name.title}. {user.name.first} {user.name.last}
                    </p>
                    <p className="italic text-gray-600">{user.email}</p>
                </div>
            </div>
        </section>
    );
}
