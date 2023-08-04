import { ChangeEvent, useCallback, useState } from "react";

export default function InputTest() {
    const [value, setValue] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);

    const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(() => e.target.value);
    }, []);
    const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setChecked(() => e.target.checked);
    }, []);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">InputTest</h2>
            <div className="mt-4 flex justify-center bg-slate-200">
                <input type="text" value={value} onChange={onChangeValue} />
                <input type="checkbox" checked={checked} onChange={onChangeChecked} />
            </div>
        </section>
    );
}
