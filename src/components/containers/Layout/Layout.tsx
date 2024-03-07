import { FC, ReactNode } from 'react'
import './Layout.scss'
import Header from 'components/widgets/Header/Header'
import { ThemeProvider } from '@mui/material'
import { theme } from 'themes'

interface PropsType {
	children: ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<div className='wrapper'>
				<Header />

				<main className='main'>{children}</main>
			</div>
		</ThemeProvider>
	)
}

export default Layout
