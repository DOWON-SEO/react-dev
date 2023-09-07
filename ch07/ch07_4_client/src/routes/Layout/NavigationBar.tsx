import { Link } from "../../components";
import { Link as RRLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function NavigationBar() {
    const { loggedUser } = useAuth();
    return (
        <div className="flex justify-between bg-base-100">
            <div className="flex p-2 navbar bg-base-100">
                <Link to="/">Home</Link>
                <Link to="/rest" className="btn btn-link">
                    Rest Test
                </Link>
                {loggedUser ? (
                    <Link to="/board" className="ml-4">
                        Board
                    </Link>
                ) : null}
            </div>
            <div className="flex p-2 items-center">
                {!loggedUser ? (
                    <RRLink to="/login" className="btn btn-sm btn-primary">
                        Login
                    </RRLink>
                ) : null}
                {!loggedUser ? (
                    <RRLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
                        Signup
                    </RRLink>
                ) : null}
                {loggedUser ? (
                    <RRLink to="/logout" className="ml-4 mr-4">
                        LOGOUT
                    </RRLink>
                ) : null}
            </div>
        </div>
    );
}
