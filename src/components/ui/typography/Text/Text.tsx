import type { FC, ReactNode } from 'react'
import './Text.scss'

interface PropsType {
	Tag?: 'h1' | 'h2'
	children: ReactNode | string
	color?: 'white' | 'black'
	className?: string
}

const Text: FC<PropsType> = ({
	Tag = 'h2',
	children,
	className = '',
	color = 'black'
}) => {
	return <Tag className={`title ${className} title_${color}`}>{children}</Tag>
}

export default Text
