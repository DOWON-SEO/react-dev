import { ChangeEvent } from "react";

export default function OnChange() {
    function onChange(event:ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();
        event.preventDefault();
        console.log('onchange', event.target.value);
    }
    function onChangeChecked(event:ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();
        console.log('onChangeChecked', event.target.checked);
    }
    function onChangeFiles(event:ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();
        console.log('onChangeChecked', event.target.files);
    }
    return (
        <div>
            <input type="text" onChange={onChange}/>
            <input type="checkbox" onChange={onChangeChecked}/>
            <input type="file" onChange={onChangeFiles} />
        </div>
    );
}