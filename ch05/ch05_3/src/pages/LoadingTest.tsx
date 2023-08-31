import { useDispatch, useSelector } from "react-redux";
import * as Loading from "../store/loading";
import { Appstate } from "../store";
import { useCallback } from "react";
import Button from "../theme/daisyui/Button";

export default function LoadingTest() {
    const dispatch = useDispatch();
    const loading = useSelector<Appstate, Loading.State>(({ loading }) => loading);

    const doTimedLoading = useCallback(() => {
        dispatch<any>(Loading.doTimedLoading(1000));
    }, [dispatch]);
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">LoadingTest</h2>
            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button className="btn-sm btn-primary" onClick={doTimedLoading} disabled={loading}>
                        do timed loading
                    </Button>
                </div>
                {loading ? (
                    <div className="flex items-center justify-center">
                        <button className="btn btn-circle loading"></button>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
