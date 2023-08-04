import { ChangeEvent, FormEvent, useCallback, useState } from "react";

export default function BasicForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("mail", email);
        alert(JSON.stringify(Object.fromEntries(formData), null, 2));
    }, []);

    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(() => event.target.value);
    }, []);

    const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(() => event.target.value);
    }, []);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">BasicForm</h2>
            <div className="flex justify-center mt-4">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span>Username</span>
                        </label>
                        <input value={name} onChange={onChangeName} id="name" type="text" placeholder="enter your name" className="input input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={email} onChange={onChangeEmail} id="email" type="email" placeholder="enter your name" className="input input-primary" />
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
