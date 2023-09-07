import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

type RequireAuthProps = {};

export default function RequireAuth({ children }: PropsWithChildren<RequireAuthProps>) {
    const { jwt } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!jwt) navigate(-1);
    }, [jwt, navigate]);
    return <>{children}</>;
}
