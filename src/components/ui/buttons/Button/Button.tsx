import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './Button.scss'

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode | string
	variant?: 'yellow'
	className?: string
}

const Button: FC<PropsType> = ({
	variant = 'yellow',
	className = '',
	children,
	...props
}) => {
	return (
		<button className={`button ${className} button_${variant}`} {...props}>
			{children}
		</button>
	)
}

export default Button
