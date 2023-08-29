import { useEffect, useRef } from "react";

export default function InputFocusTest() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => inputRef.current?.focus(), []);
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">InputFocusTest</h2>
            <div className="flex justify-center mt-4">
                <input ref={inputRef} className="input input-primary" placeholder="enter some text" />
            </div>
        </section>
    );
}
