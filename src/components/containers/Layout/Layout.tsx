import { FC, ReactNode } from 'react'
import './Layout.scss'
import Header from 'components/widgets/Header/Header'

interface PropsType {
	children: ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />

			<main className='main'>{children}</main>
		</div>
	)
}

export default Layout
