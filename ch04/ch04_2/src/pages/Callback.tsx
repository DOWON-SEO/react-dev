import { useCallback, useMemo } from "react";
import * as D from "../data";
import Button from "../theme/daisyui/Button";

export default function CallBack() {
    const onClick = useCallback(() => alert("button clicked"), []);

    const buttons = useMemo(
        () =>
            D.makeArray(3)
                .map(D.randomName)
                .map((name, index) => (
                    <Button key={index} onClick={onClick} className="btn btn-primary normal-case btn-wide btn-xs">
                        {name}
                    </Button>
                )),
        [onClick]
    );
    return (
        <section>
            <h2 className="font-bold text-5xl text-center">Callback</h2>
            <div className="mt-4">{buttons}</div>
        </section>
    );
}
