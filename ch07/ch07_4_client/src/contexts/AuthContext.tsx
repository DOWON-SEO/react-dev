import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from "react";
import * as U from "../utils";
import { post } from "../server";

export type LoggedUser = {
    email: string;
    password: string;
};

type Callback = () => void;

type ContextType = {
    jwt?: string;
    errorMessage?: string;
    loggedUser?: LoggedUser;
    signup: (email: string, password: string, callback: Callback) => void;
    login: (email: string, password: string, callback: Callback) => void;
    logout: (callback: Callback) => void;
};

export const AuthContext = createContext<ContextType>({
    signup: (email: string, password: string, callback?: Callback) => {},
    login: (email: string, password: string, callback?: Callback) => {},
    logout: (callback: Callback) => {},
});

type AuthProviderProps = {};

export function AuthProvider({ children }: PropsWithChildren<AuthProviderProps>) {
    const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(undefined);

    const [jwt, setJwt] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const signup = useCallback(async (email: string, password: string, callback?: Callback) => {
        console.log("0");
        const user = { email, password };
        try {
            const response = await post("/auth/signup", user);
            const result = await response.json();

            const { ok, body, errorMessage } = result;
            if (ok) {
                try {
                    U.writeStringP("jwt", body ?? "");
                } finally {
                    setJwt(body ?? "");
                    setLoggedUser((notUsed) => user);
                    try {
                        U.writeObjectP("user", user);
                    } finally {
                        callback && callback();
                    }
                }
            } else setErrorMessage(errorMessage ? errorMessage : "");
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);

    const login = useCallback(async (email: string, password: string, callBack?: Callback) => {
        const user = { email, password };
        try {
            const jwt = await U.readStringP("jwt");
            const response = await post("/auth/login", user, jwt);
            const result: { ok: boolean; errorMessage?: string } = await response.json();
            if (result.ok) {
                setLoggedUser((notUsed) => user);
                callBack && callBack();
            } else {
                setErrorMessage(result.errorMessage ?? "");
            }
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message);
        }
    }, []);

    const logout = useCallback((callback: Callback) => {
        setJwt((notUsed) => "");
        setLoggedUser(undefined);
        callback && callback();
    }, []);

    useEffect(() => {
        const deleteToken = false;
        if (deleteToken) {
            U.writeStringP("jwt", jwt);
        } else {
            U.readStringP("jwt").then((jwt) => setJwt(jwt ?? ""));
        }
        U.readStringP("jwt").then((jwt) => setJwt(jwt ?? ""));
    }, []);

    useEffect(() => {
        if (errorMessage) {
            alert(errorMessage);
            setErrorMessage((notUsed) => "");
        }
    }, [errorMessage]);

    const value = {
        jwt,
        errorMessage,
        loggedUser,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value} children={children} />;
}

export const useAuth = () => {
    return useContext(AuthContext);
};
