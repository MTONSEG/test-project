import React from 'react'
import { FC } from 'react'
import './Hero.scss'
import Container from 'components/containers/Container/Container'

interface PropsType {}

const Hero: FC<PropsType> = ({ ...props }) => {
	return (
		<section className='hero'>
			<Container>hero</Container>
		</section>
	)
}

export default Hero
