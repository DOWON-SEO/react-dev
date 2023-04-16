import { DragEvent } from "react";

export default function FileDrop() {
    function onDragOver(event:DragEvent) {
        event.preventDefault();
    }
    function onDrop(event:DragEvent) {
        event.preventDefault();
        const files = event.dataTransfer?.files;
        if(files) {
            Array.from(files).forEach(file => {
                console.log(file);
            })
        }
    }
    return (
        <div>
            <h1>FileDrop</h1>
            <div onDrop={onDrop} onDragOver={onDragOver}>
                <h2>Drop Image Here</h2>
            </div>
        </div>
    );
}