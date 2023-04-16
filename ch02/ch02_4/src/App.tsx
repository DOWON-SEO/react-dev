import ClassComponent from './component/ClassComponent';
import FunctionalComponent from './component/FunctionalComponent';
import * as D from './data';

export default function App() {
    const texts = [<p key={1}>hello</p>, <p key={2}>world</p>];
    return <div>{texts}</div>
}