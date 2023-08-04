import { useCallback, useMemo, useState } from "react";
import * as D from "../data";
import { Div } from "../components";
import Icon from "../theme/daisyui/Icon";

export default function ArrayState() {
    const [images, setImages] = useState<string[]>([]);
    const addImage = useCallback(() => setImages((images) => [D.randomImage(200, 100, 50), ...images]), []);
    const clearImages = useCallback(() => setImages(() => []), []);
    const children = useMemo(() => images.map((image, index) => <Div key={index} src={image} className="w-1/5 m-2" height="5rem" minHeight="5rem" />), [images]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">ArrayState</h2>
            <div className="flex justify-center mt-4">
                <div data-tip="add image" className="tooltrip">
                    <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
                </div>
                <div data-tip="clear all" className="tooltrip">
                    <Icon name="clear_all" onClick={clearImages} />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">{children}</div>
        </section>
    );
}
