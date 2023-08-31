import { useDispatch, useSelector } from "react-redux";
import * as Error from "../store/errorMessage";
import * as D from "../data";
import { Appstate } from "../store";
import { useCallback } from "react";
import Button from "../theme/daisyui/Button";

export default function ErrorMessageTest() {
    const dispatch = useDispatch();
    const errorMessage = useSelector<Appstate, Error.State>(({ errorMessage }) => errorMessage);

    const generateErrorMessage = useCallback(() => {
        dispatch<any>(Error.generateErrorMessage(D.randomSentence()));
    }, [dispatch]);
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ErrorMessageTest</h2>
            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button className="btn-sm btn-primary" onClick={generateErrorMessage}>
                        generate error message
                    </Button>
                </div>
                {errorMessage.length ? (
                    <div className="flex items-center justify-center bg-red-200">
                        <p className="text-2xl text-red-600 text-bold">error: {errorMessage}</p>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
