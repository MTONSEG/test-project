import type { FC, ReactNode } from 'react'
import './Text.scss'

interface PropsType {
	children: ReactNode | string
	color?: 'white' | 'black' | 'red'
	className?: string
}

const Text: FC<PropsType> = ({
	children,
	className = '',
	color = 'black'
}) => {
	return <p className={`text ${className} text_${color}`}>{children}</p>
}

export default Text
