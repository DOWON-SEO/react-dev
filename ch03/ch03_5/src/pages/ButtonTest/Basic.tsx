import Button from "../../theme/daisyui/Button";

export default function Basic() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center bg-slate-300">Basic</h2>
            <div className="mt-4">
                <button className="btn btn-primary">daysiui button</button>
                <Button className="btn btn-primary">Button</Button>
            </div>
        </section>
    );
}
