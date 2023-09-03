import { useCallback, useState } from "react";
import * as D from "../../data";
import { put } from "../../server";

type Body = Record<"id" | string, any>;
type Data = {
    ok: boolean;
    body?: Body;
    errorMessage?: string;
};

export default function PutTest() {
    const [data, setData] = useState<Data | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const putTest = useCallback(async () => {
        try {
            const response = await put("/test/1234", D.makeRandomCard());
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);
    return (
        <section className="mt-4">
            <div className="flex justify-center mt-4">
                <button onClick={putTest} className="btn btn-primary">
                    PUT ID 1234
                </button>
            </div>
            <div className="mt-4 text-center">
                <p>id: {data?.body?.id}</p>
                <p>data:{JSON.stringify(data, null, 2)}</p>
                {errorMessage ? <p>error: {errorMessage}</p> : null}
            </div>
        </section>
    );
}
