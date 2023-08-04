import { useCallback, useState } from "react";
import { Icon } from "../components";

export default function NumberState() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((count) => count - 1);
    }, []);
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">NumberState</h2>
            <div className="mt-4">
                <div className="flex itmes-center justify-between w-1/4 mt-4">
                    <Icon name="add" className="btn-primary btn-lg" onClick={increment}></Icon>
                    <p className="text-3xl text-bold text-primary">{count}</p>
                    <Icon name="remove" className="btn-accept btn-lg" onClick={decrement}></Icon>
                </div>
            </div>
        </section>
    );
}
