import type { FC, ReactNode } from 'react'
import './Container.scss'

interface PropsType {
	children: ReactNode
}

const Container: FC<PropsType> = ({ children }) => {
	return <div className='container'>{children}</div>
}

export default Container
