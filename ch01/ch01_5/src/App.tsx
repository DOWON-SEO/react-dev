import * as D from './data';

export default function App() {
    console.log("app called")
    return (
        <div>
            <p>{D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}</p>
            <img src={D.randomAvatar()}/>
            <img src={D.randomImage()}/>
        </div>
    );

}