import { useDispatch, useSelector } from "react-redux";
import { Subtitle } from "../components";
import Icon from "../theme/daisyui/Icon";
import { Appstate } from "../store";
import * as C from "../store/counter";
import { useCallback } from "react";

export default function CounterTest() {
    const dispatch = useDispatch();
    console.log("load");
    const counter = useSelector<Appstate, C.State>(({ counter }) => counter);
    const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch]);
    const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch]);
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">CounterTest</h2>
            <div className="flex justify-center mt-4">
                <div className="flex items-cener justify-around w-1/3 text-blue-500 text-bold">
                    <Icon name="add_circle" onClick={increase} />
                    <Subtitle>{counter}</Subtitle>
                    <Icon name="remove_circle" onClick={decrease} />
                </div>
            </div>
        </section>
    );
}
