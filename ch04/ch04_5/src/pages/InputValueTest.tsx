import { useCallback, useEffect, useRef } from "react";

export default function InputValueTest() {
    const inputRef = useRef<HTMLInputElement>(null);
    const getValue = useCallback(() => alert(`input value : ${inputRef.current?.value}`), []);

    useEffect(() => inputRef.current?.focus(), []);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">InputValueTest</h2>
            <div className="flex justify-center mt-4">
                <div className="flex flex-col w-1/3 p-2">
                    <input ref={inputRef} className="input input-primary" />
                    <button onClick={getValue} className="mt-4 btn btn-primary">
                        get Value
                    </button>
                </div>
            </div>
        </section>
    );
}
