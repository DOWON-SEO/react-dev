import * as D from '../data';
import {Title, Subtitle, Summary, Paragraph} from '../components';

const paragraphs = D.makeArray(2).map(() => D.randomParagraph()).join('\n\n');
const summary = D.makeArray(3).map(() => D.randomSentence()).join('\n');

export default function TextsTest() {
    return(
        <div>
            <Title className='text-blue-600'>{D.randomTitleText()}</Title>
            <Subtitle>{D.randomSentence()}</Subtitle>
            <p className="text-xl italic text-center text-gray-900 text-bold">{D.randomName()}</p>
            <Paragraph>{paragraphs}</Paragraph>
            <Summary className='text-center text-gray-500'>{summary}</Summary>
            <p className='text-center text-pink-400'>{D.randomDayMonthYear()} ({D.randomRelativeDate()})</p>
        </div>
    )
}