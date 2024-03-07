import { createTheme } from '@mui/material'

export const theme = createTheme({
	breakpoints: {
		keys: ['lg', 'md', 'sm', 'xl', 'xs']
	},
	palette: {
		primary: {
			main: '#D0CFCF',
			dark: '#7E7E7E'
		},
		secondary: {
			main: '#00BDD3'
		}
	},
	typography: {
		fontFamily: 'Nunito, sans-serif',
		fontSize: 16,
		h1: {
			fontSize: 40
		},
		h2: {
			fontSize: 40
		}
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'&:hover': {
						borderColor: '#fcfcfc'
					},
					label: {
						color: '#7E7E7E'
					}
				}
			}
		}
	}
})
