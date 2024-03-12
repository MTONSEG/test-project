import './Hero.scss'
import Container from 'components/containers/Container/Container'
import Heading from 'components/ui/typography/Heading/Heading'
import { data } from 'dictionaries'
import Text from 'components/ui/typography/Text/Text'
import Button from 'components/ui/buttons/Button/Button'
import HeroBG from 'components/sections/Hero/HeroBG/HeroBG'

const Hero = () => {
	return (
		<section className='hero'>
			<Container variant='hero'>
				<div className='hero__row'>
					<Heading
						className='hero__title'
						color='white'
						text={data.hero.title}
					/>

					<Text className='hero__text' color='white'>
						{data.hero.text}
					</Text>

					<Button className='hero__btn' children={data.shared.signup} />
				</div>
			</Container>

			<HeroBG />
		</section>
	)
}

export default Hero
