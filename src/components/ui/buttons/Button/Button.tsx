import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './Button.scss'
import { CircularProgress } from '@mui/material'

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode | string
	variant?: 'yellow'
	className?: string
	isLoading?: boolean
}

const Button: FC<PropsType> = ({
	variant = 'yellow',
	className = '',
	children,
	isLoading = false,
	...props
}) => {

	return (
		<button className={`button ${className} button_${variant}`} {...props}>
			{!isLoading ? (
				children
			) : (
				<CircularProgress color='secondary' />
			)}
		</button>
	)
}

export default Button
