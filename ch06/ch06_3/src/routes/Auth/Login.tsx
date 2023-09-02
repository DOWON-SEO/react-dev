import { ChangeEvent, useCallback, useEffect, useState } from "react";
import * as D from "../../data";
import * as U from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

type LoginFormType = Record<"email" | "password", string>;
const initialFormState = {
    email: D.randomEmail(),
    password: "",
};

export default function SignUp() {
    const [{ email, password }, setForm] = useState<LoginFormType>(initialFormState);
    const changed = useCallback(
        (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
            setForm((obj) => ({ ...obj, [key]: event.target.value }));
        },
        []
    );

    const navigate = useNavigate();
    const { login } = useAuth();
    const loginAccount = useCallback(() => {
        login(email, password, () => navigate("/"));
    }, [email, password, navigate, login]);

    useEffect(() => {
        async function readObject() {
            try {
                const user = await U.readObjectP<LoginFormType>("user");
                if (user) setForm(user);
            } catch (error) {
                console.log(error);
            }
        }
        readObject();
    }, []);
    return (
        <div className="flex flex-col min-h-screnn border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
            <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>
                    <input type="text" className="w-full p-3 mb-4 input input-primary" name="email" placeholder="Email" value={email} onChange={changed("email")} />
                    <input type="text" className="w-full p-3 mb-4 input input-primary" name="password" placeholder="Password" value={password} onChange={changed("password")} />
                    <button type="submit" className="w-full btn btn-primary" onClick={loginAccount}>
                        Login
                    </button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Create account?
                    <Link className="btn btn-link btn-primary" to="/signup">
                        SignUp
                    </Link>
                    `
                </div>
            </div>
        </div>
    );
}
