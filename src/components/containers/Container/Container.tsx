import type { FC, ReactNode } from 'react'
import './Container.scss'

interface PropsType {
	children: ReactNode
	variant?: 'default' | 'hero'
}

const Container: FC<PropsType> = ({ children, variant = 'default' }) => {
	return <div className={`container container_${variant}`}>{children}</div>
}

export default Container
