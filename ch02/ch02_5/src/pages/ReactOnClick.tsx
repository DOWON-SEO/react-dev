import { SyntheticEvent } from "react";

export default function ReactOnClick() {
    function onClick(event: SyntheticEvent) {
        const {isTrusted, target, bubbles} = event;
        console.log('mouse click occurs on <button>', isTrusted, target, bubbles);
    }
    return (
        <div>
            <p>ReactOnClick</p>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}