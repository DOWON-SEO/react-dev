import { Div, Subtitle, Title } from "../components";

export type ClockProps = {
    today: Date;
};

export default function Clock({ today }: ClockProps) {
    return (
        <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
            <Title>{today.toLocaleTimeString()}</Title>
            <Subtitle>{today.toLocaleDateString()}</Subtitle>
        </Div>
    );
}
