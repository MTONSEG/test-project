import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#D0CFCF'
		},
		secondary: {
			main: '#00BDD3'
		},
		error: {
			main: '#CB3D40'
		}
	},
	typography: {
		fontFamily: 'Nunito, sans serif'
	},
	components: {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					background: 'rgba(0, 0, 0, 0.87)',
					fontSize: '16px'
				}
			}
		}
	}
})
