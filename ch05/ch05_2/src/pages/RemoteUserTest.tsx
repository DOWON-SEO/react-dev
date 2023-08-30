import { useCallback, useState } from "react";
import { useToggle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import Button from "../theme/daisyui/Button";
import { Avatar } from "../components";
import { Appstate } from "../store";
import * as D from "../data";
import * as R from "../store/remoteUser";

export default function RemoteUserTest() {
    const dispatch = useDispatch();
    const user = useSelector<Appstate, R.State>(({ remoteUser }) => remoteUser);
    const [loading, toggleLoading] = useToggle();
    const [error, setError] = useState<Error | null>();

    const getRemoteUser = useCallback(async () => {
        toggleLoading();
        try {
            const user = await D.fetchRandomUser();
            dispatch(R.setUser(user));
        } catch (error) {
            setError(error as Error | null);
        } finally {
            toggleLoading();
        }
    }, [dispatch, toggleLoading]);

    const changeName = useCallback(async () => {
        toggleLoading();
        try {
            const user = await D.fetchRandomUser();
            dispatch(R.changeName(user.name));
        } catch (error) {
            setError(error as Error | null);
        } finally {
            toggleLoading();
        }
    }, [dispatch, toggleLoading]);

    const changeEmail = useCallback(() => dispatch(R.changeEmail(D.randomEmail())), [dispatch]);
    const changePicture = useCallback(() => dispatch(R.changePicture({ large: D.randomAvatar() })), []);

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
            {error ? (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{error.message}</p>
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
