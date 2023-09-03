import { ChangeEvent, useCallback, useState } from "react";
import * as D from "../../data";
import Icon from "../../theme/daisyui/Icon";
export type CreateListFromProps = {
    onCreateList: (uuid: string, title: string) => void;
};

export default function CreateListFrom({ onCreateList }: CreateListFromProps) {
    const [value, setValue] = useState<string>(D.randomTitleText());
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value);
    }, []);
    const addList = useCallback(() => {
        onCreateList(D.randomUUID(), value);
        setValue(() => D.randomTitleText());
    }, [value, onCreateList]);
    return (
        <div className="flex p-2">
            <input placeholder="title" value={value} onChange={onChange} className="input-xs input-bordered input input-primary" />
            <Icon name="add" onClick={addList} disabled={!value.length} className="ml-2 btn-primary btn-xs" />
        </div>
    );
}
