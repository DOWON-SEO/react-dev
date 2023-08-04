import Button from "../../theme/daisyui/Button";

export default function Size() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">Size</h2>
            <div className="mt-4 flex justify-evenly">
                <Button className="btn-lg btn-primary">Size lg</Button>
                <Button className="btn-md btn-secondary">Size md</Button>
                <Button className="btn-sm btn-accent">Size sm</Button>
                <Button className="btn-xs btn-info">Size xs</Button>
            </div>
        </section>
    );
}
