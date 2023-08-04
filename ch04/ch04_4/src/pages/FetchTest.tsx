import { useToggle } from "../hooks";
import * as D from "../data";
import { useCallback, useEffect, useState } from "react";
import { Avatar, Icon } from "../components";

export default function FetchTest() {
    const [loading, toggleLoading] = useToggle();
    const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const getRandomUser = useCallback(() => {
        const fetchData = async () => {
            toggleLoading();
            try {
                const result = await D.fetchRandomUser();
                setRandomUser(result);
            } catch (error) {
                setError(error as Error);
            } finally {
                toggleLoading();
            }
        };
        fetchData();
    }, [toggleLoading]);

    useEffect(getRandomUser, [getRandomUser]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">FetchTest</h2>
            <div className="flex justify-center mt-4">
                <button className="btn btn-sm btn-primary" onClick={getRandomUser}>
                    <Icon name="get_app" />
                    <span>get random user</span>
                </button>
            </div>
            <div className="h-20 mb-4">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <button className="btn btn-circle loading"></button>
                    </div>
                ) : null}
                {error ? (
                    <div className="p-4 mt-4 bg-red-200">
                        <p className="text-3xl text-red-500 text-bold">{error.message}</p>
                    </div>
                ) : null}
                {randomUser && !loading ? (
                    <div className="flex justify-center p-4">
                        <Avatar src={randomUser.picture.large} />
                        <div className="ml-4">
                            <p className="text-xl text-bold">
                                {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
                            </p>
                            <p className="italic text-gray-600">{randomUser.email}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
