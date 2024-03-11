import { useState, type FC } from 'react'
import './Card.scss'

import imagePlaceholder from 'assets/icons/photo-ph.svg'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'

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

			<h3 className='card__name'>{props.name}</h3>

			<ul className='card__list'>
				<li className='card__list-item'>{props.position}</li>
				<li className='card__list-item'>{props.email}</li>
				<li className='card__list-item'>{formatPhoneNumber(props.phone)}</li>
			</ul>
		</li>
	)
}

export default Card
