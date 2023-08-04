import { Component } from "react";

export default class ClassLifecycle extends Component {
    state = {
        today: new Date(),
        intervalId: null as unknown as NodeJS.Timer,
    };
    componentDidMount(): void {
        const intervalId = setInterval(() => this.setState({ today: new Date() }), 1000);
        this.setState({ intervalId });
    }

    componentWillUnmount(): void {
        clearInterval(this.state?.intervalId);
    }

    render() {
        const { today } = this.state;
        return (
            <section className="mt-4">
                <h2 className="font-bold text-5xl text-center">ClassLifecycle</h2>
                <div className="flex flex-col items-center mt-4">
                    <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
                    <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
                </div>
            </section>
        );
    }
}
