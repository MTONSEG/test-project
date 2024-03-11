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
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: '#7E7E7E'
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: '#D0CFCF'
				},
				
			}
		}
	}
})
