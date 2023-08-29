import { useCallback, useRef } from "react";

export default function ClickTest() {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = useCallback(() => inputRef.current?.click(), []);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ClickTest</h2>
            <div className="flex justify-center mt-4">
                <button className="btn btn-primary mr-4" onClick={onClick}>
                    Click me
                </button>
                <input ref={inputRef} className="hidden" type="file" accept="image/*" />
            </div>
        </section>
    );
}
