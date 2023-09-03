import { useCallback, useEffect, useState } from "react";
import { get } from "../../server";

export default function GetTest() {
    const [data, setData] = useState<object>({});
    const [errorMessage, setErrorMessage] = useState<string>("");

    const getAllTest = useCallback(async () => {
        try {
            const response = await get("/test");
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);

    const getTest = useCallback(async () => {
        try {
            const response = await get("/test/1234");
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);

    return (
        <section className="mt-4">
            <div className="flex justify-center mt-4">
                <button onClick={getAllTest} className="mr-12 btn btn-primary">
                    GET ALL
                </button>
                <button onClick={getTest} className="mr-12 btn btn-primary">
                    GET id 1234
                </button>
            </div>
            <div className="mt-4 text-center">
                <p>data: {JSON.stringify(data, null, 2)}</p>
                {errorMessage ? <p>error: {errorMessage}</p> : null}
            </div>
        </section>
    );
}
