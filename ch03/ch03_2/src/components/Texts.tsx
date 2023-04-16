import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react';
import { makeClassName } from './textUtil';

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export type TitleProps = TextProps & {
    numberOfLines?: number
}
export function Title({className: _className, numberOfLines, ...props}:TitleProps) {
    const className = makeClassName('font-bold text-5xl text-center whitespace-pre-line', _className, numberOfLines);
    return <p {...props} className={className}/>
}

export type SubtitleProps = TitleProps & {}
export function Subtitle({className: _className, numberOfLines, ...props}:SubtitleProps) {
    const className = makeClassName('font-semibold text-3xl text-center whitespace-pre-line', _className, numberOfLines);
    return <p {...props} className={className}/>
}

export type SummaryProps = SubtitleProps & {}
export function Summary({className: _className, numberOfLines, ...props}:SummaryProps) {
    const className = makeClassName('text-sm whitespace-pre-line', _className, numberOfLines);
    return <p {...props} className={className}/>
}

export type ParagraphProps = SummaryProps & {};
export function Paragraph({className: _className, numberOfLines, ...props}:ParagraphProps) {
    const className = makeClassName('font-normal text-base whitespace-pre-line', _className, numberOfLines)
    return <p {...props} className={className}/>
}