const root = document.getElementById('root');
export default function DispatchEvent() {
    function onCallDispatchEvent() {
        console.log('onCallDispatchEvent');
        root?.dispatchEvent(new Event('click', {bubbles: true}));
        // root 엘리먼트에 대해 click 이벤트를 dispatch하여 발생시킴
    }
    function onCallClick() {
        console.log('onCallClick');
        root?.click();
        // root 엘리먼트에 대해 click 이벤트 발생 (dispatch와 동일)
    }
    return (
        <div>
            <p>dispatchEvent</p>
            <button onClick={onCallDispatchEvent}>call dispatch event</button>
            <button onClick={onCallClick}>call click</button>
        </div>
    );
}