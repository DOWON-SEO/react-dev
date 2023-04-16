import { ChangeEvent } from "react";

export default function FileInput() {
    function onChange(event:ChangeEvent<HTMLInputElement>) {
        const files: FileList | null = event.target.files;
        if(files) {
            for(let i = 0; i < files.length; i++) {
                const file: File | null = files.item(i);
                console.log(file);
            }
        }
    }
    return (
        <div>
            <p>file input</p>
            <input type="file" onChange={onChange} multiple accept="image/*"/>
        </div>
    );
}