import { useOrCreate } from "./useOrCreate";
import * as D from "../data";
import { Avatar } from "../components";

export default function UseOrCreateTest() {
    const headTexts = useOrCreate<string[]>("headTexts", () => ["No.", "Name", "Job Title", "Email Address"]);
    const users = useOrCreate<D.IUser[]>("users", () => D.makeArray(100).map(D.makeRandomUser));
    const head = useOrCreate("head", () => headTexts.map((text) => <th key={text}>{text}</th>));
    const body = useOrCreate("children", () =>
        users.map((user, index) => (
            <tr key={user.uuid}>
                <th>{index + 1}</th>
                <td className="flex items-center">
                    <Avatar src={user.avatar} size="1.5rem" />
                    <p className="ml-2">{user.name}</p>
                </td>
                <td>{user.jobTitle}</td>
                <td>{user.email}</td>
            </tr>
        ))
    );
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">CreateOrUseTest</h2>
            <div className="mt-4 p-4 overflow-x-auto">
                <table className="table table-zebra table-compact w-full">
                    <thead>
                        <tr>{head}</tr>
                    </thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        </section>
    );
}
