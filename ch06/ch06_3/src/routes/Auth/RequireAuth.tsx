import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

type RequireAuthProps = {};

export default function RequireAuth({ children }: PropsWithChildren<RequireAuthProps>) {
    const { loggedUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedUser) navigate(-1);
    }, [loggedUser, navigate]);
    return <>{children}</>;
}
