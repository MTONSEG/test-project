import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'styles/style.scss'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'themes/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<HashRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</HashRouter>
)
