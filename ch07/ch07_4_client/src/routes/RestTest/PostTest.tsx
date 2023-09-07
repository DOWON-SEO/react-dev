import { useCallback, useState } from "react";
import { post } from "../../server";
import * as D from "../../data";
import { useAuth } from "../../contexts/AuthContext";

export default function PostTest() {
    const { jwt } = useAuth();
    const [data, setData] = useState<object>({});
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const postTest = useCallback(async () => {
        try {
            const response = await post("/test", D.makeRandomCard, jwt);
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, [jwt]);

    return (
        <section className="mt-4">
            <div className="flex justify-center mt-4">
                <button onClick={postTest} className="btn btn-primary">
                    POST
                </button>
            </div>
            <div className="mt-4 text-center">
                <p>data: {JSON.stringify(data, null, 2)}</p>
                {errorMessage ? <p>error:{errorMessage}</p> : null}
            </div>
        </section>
    );
}
