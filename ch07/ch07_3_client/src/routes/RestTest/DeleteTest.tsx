import { useCallback, useState } from "react";
import { del } from "../../server";

export default function DeleteTest() {
    const [data, setData] = useState<object>({});
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const deleteTest = useCallback(async () => {
        try {
            const response = await del("/test/1234");
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);
    return (
        <section className="mt-4">
            <div className="flex justify-center mt-4">
                <button onClick={deleteTest} className="btn btn-primary">
                    DELETE id 1234
                </button>
            </div>
            <div className="mt-4 text-center">
                <p>data: {JSON.stringify(data, null, 2)}</p>
                {errorMessage ? <p>error: {errorMessage}</p> : null}
            </div>
        </section>
    );
}
