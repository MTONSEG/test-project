import { useState, type FC } from 'react'
import './Card.scss'
import imagePlaceholder from 'assets/icons/photo-ph.svg'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'
import { Tooltip } from '@mui/material'

interface PropsType {
	imageSrc: string
	name: string
	position: string
	email: string
	phone: string
}

const Card: FC<PropsType> = ({ ...props }) => {
	const [imageError, setImageError] = useState<boolean>(false)

	return (
		<li className='card'>
			<div className='card__image-wrap'>
				<img
					src={imageError ? imagePlaceholder : props.imageSrc}
					alt={props.name}
					className='card__image'
					loading='lazy'
					onError={() => {
						setImageError(true)
					}}
				/>
			</div>

			<h3 className='card__name'>
				<Tooltip title={props.name} placement='bottom-end'>
					<span>{props.name}</span>
				</Tooltip>
			</h3>

			<ul className='card__list'>
				<li className='card__list-item'>
					<Tooltip title={props.position} placement='bottom-end'>
						<span>{props.position}</span>
					</Tooltip>
				</li>

				<li className='card__list-item'>
					<Tooltip title={props.email} placement='bottom-end'>
						<span>{props.email}</span>
					</Tooltip>
				</li>

				<li className='card__list-item'>
					<Tooltip
						title={formatPhoneNumber(props.phone)}
						placement='bottom-end'
					>
						<span>{formatPhoneNumber(props.phone)}</span>
					</Tooltip>
				</li>
			</ul>
		</li>
	)
}

export default Card
