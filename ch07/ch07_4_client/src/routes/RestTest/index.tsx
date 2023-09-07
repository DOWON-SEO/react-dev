import DeleteTest from "./DeleteTest";
import GetTest from "./GetTest";
import PostTest from "./PostTest";
import PutTest from "./PutTest";

export default function RestTest() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">RestTest</h2>
            <div className="mt-4">
                <DeleteTest />
                <PutTest />
                <PostTest />
                <GetTest />
            </div>
        </section>
    );
}
