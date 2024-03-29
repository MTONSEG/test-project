import { CircularProgress } from '@mui/material'

const Loading = () => {
	return (
		<CircularProgress
			color='secondary'
			sx={{
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}}
		/>
	)
}

export default Loading
