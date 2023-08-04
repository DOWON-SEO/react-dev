import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Subtitle } from "../components";
import * as D from "../data";

export default function HigherOrderRadioInputTest() {
    const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);
    const [selectedJobTitle, setSelectedJobTitle] = useState(0);
    const onChange = useCallback(
        (index: number) => () => {
            setSelectedJobTitle(index);
        },
        []
    );
    const radioInputs = useMemo(() => {
        return jobTitles.map((value, index) => (
            <label key={index} className="flex justify-start cursor-pointer label">
                <input type="radio" name="higher-jobs" className="mr-4 radio radio-primary" checked={index === selectedJobTitle} onChange={onChange(index)} defaultValue={value} />
                <span className="label-text">{value}</span>
            </label>
        ));
    }, [jobTitles, selectedJobTitle]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">HigherOrderRadioInputTest</h2>
            <div className="mt-4 flex flex-col justify-center">
                <Subtitle>What is your job?</Subtitle>
                <Subtitle>Selected Job:{jobTitles[selectedJobTitle]}</Subtitle>
                <div className="flex justify-center p-4 mt-4">
                    <div className="flex flex-col mt-4">{radioInputs}</div>
                </div>
            </div>
        </section>
    );
}
