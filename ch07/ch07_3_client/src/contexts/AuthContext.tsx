import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";
import * as U from "../utils";

export type LoggedUser = {
    email: string;
    password: string;
};

type Callback = () => void;

type ContextType = {
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

    const signup = useCallback((email: string, password: string, callback?: Callback) => {
        console.log("0");
        const user = { email, password };
        setLoggedUser((notused) => ({ email, password }));
        console.log("1");
        U.writeObjectP("user", user).finally(() => callback && callback());
        console.log("2");
    }, []);

    const login = useCallback((email: string, password: string, callback?: Callback) => {
        setLoggedUser((notUsed) => ({ email, password }));
        callback && callback();
    }, []);

    const logout = useCallback((callback: Callback) => {
        setLoggedUser(undefined);
        callback && callback();
    }, []);

    const value = {
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
