import { SyntheticEvent } from "react";

//이벤트 버블링이란? 자식 요소에서 발생한 이벤트가 부모에게까지 전달되는 현상


export default function EventBubbling() {
    function onDivClick(event: SyntheticEvent) {
        const {isTrusted, target, bubbles, currentTarget} = event;
        alert('zz');
        console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget);
    }
    
    function onButtonClick(event: SyntheticEvent) {
        const {isTrusted, target, bubbles, currentTarget} = event;
        console.log('click event bubbles on <button>', isTrusted, target, bubbles, currentTarget);
    }
    return (
        <div onClick={onDivClick}>
            <p>Event Bubbling</p>
            <button onClick={onButtonClick}>Click Me</button>
        </div>
    );
}