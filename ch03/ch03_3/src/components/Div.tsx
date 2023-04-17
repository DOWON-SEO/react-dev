import type {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import { WidthHeight } from './WidthHeight'
import { LeftRightTopBottom } from './LeftRightTopBottom'

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & LeftRightTopBottom & {
    src?: string
}
// export type DivProps = ReactDivProps & WidthHeight

export function Div({width, height, style:_style, src, className: _className, left, right, top, bottom, ...props}:DivProps) {
    const style = {..._style, width, height, backgroundImage: src && `url(${src})`, left, right, top, bottom}; //src가 존재할 경우 url(${src}) 값 반환
    const className = ['box-sizing', src && 'bg-gray-300' , _className].join(' ')
    return <div {...props} className={className} style={style}/>
}