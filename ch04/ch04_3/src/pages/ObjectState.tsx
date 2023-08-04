import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type FormType = {
    name: string;
    email: string;
};

export default function ObjectState() {
    const [form, setForm] = useState<FormType>({ name: "", email: "" });

    const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        alert(JSON.stringify(form, null, 2));
    }, []);

    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setForm((prevState) => ({ ...prevState, name: event.target.value }));
    }, []);

    const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setForm((prevState) => ({ ...prevState, email: event.target.value }));
    }, []);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ObjectState</h2>
            <div className="flex justify-center mt-4">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span>Username</span>
                        </label>
                        <input value={form.name} onChange={onChangeName} id="name" type="text" placeholder="enter your name" className="input input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={form.email} onChange={onChangeEmail} id="email" type="email" placeholder="enter your name" className="input input-primary" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <input type="submit" value="Submit" className="w-1/2 btn btn-sm btn-primary" />
                        <input defaultValue="Cancel" className="w-1/2 ml-2 btn btn-sm btn-primary" />
                    </div>
                </form>
            </div>
        </section>
    );
}
