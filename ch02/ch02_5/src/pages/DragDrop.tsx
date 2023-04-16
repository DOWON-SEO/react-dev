import { DragEvent } from "react";

export default function DragDrop() {
    function onDragStart (event:DragEvent<HTMLElement>) {
        console.log('onDragStart', event.dataTransfer)
    }
    function onDragEnd (event:DragEvent<HTMLElement>) {
        console.log('onDragEnd', event.dataTransfer)
    }
    function onDragOver (event:DragEvent) {
        event.preventDefault();
        console.log('onDragOver', event.dataTransfer)
    }
    function onDrop(event:DragEvent) {
        event.preventDefault();
        console.log('onDrap', event.dataTransfer);
    }
    return (
        <div>
            <p>DragDrop</p>
            <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <h1>Drag Me</h1>
            </div>
            <div onDrop={onDrop} onDragOver={onDragOver}>
                <h1>Drop here</h1>
            </div>
        </div>
    );
}