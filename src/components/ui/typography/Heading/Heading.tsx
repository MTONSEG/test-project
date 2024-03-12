import type { FC } from 'react'
import './Heading.scss'

interface PropsType {
	Tag?: 'h1' | 'h2'
	text: string
	color?: 'white' | 'black'
	className?: string
}

const Heading: FC<PropsType> = ({
	Tag = 'h2',
	text,
	className = '',
	color = 'black'
}) => {
	return <Tag className={`title ${className} title_${color}`}>{text}</Tag>
}

export default Heading
