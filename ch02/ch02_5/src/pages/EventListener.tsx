const root = document.getElementById('root');

root?.addEventListener('click', (event: Event) => {
    const {isTrusted, target, bubbles} = event;
    console.log('mouse click occurs.', isTrusted, target, bubbles);
});

root?.addEventListener('click', (event: Event) => {
    const {isTrusted, target, bubbles} = event;
    console.log('mouse click also occurs.', isTrusted, target, bubbles);
});


export default function EventListener() {
    return (
        <div>EventListener</div>
    );
}