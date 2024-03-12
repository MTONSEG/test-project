import Image from 'components/ui/images/Image/Image'

const HeroBG = () => {
	return (
		<Image
			className='hero__bg'
			src={'/hero/hero.jpeg'}
			webpSrc={'/hero/hero.webp'}
			imgTab={'/hero/hero_768.jpg'}
			webpTab={'/hero/hero_768.webp'}
			imgMob={'/hero/hero_360.jpg'}
			webpMob={'/hero/hero_360.webp'}
			widthTab={1024}
			widthMob={480}
			width={1170}
			height={650}
			alt='Hero image step'
		/>
	)
}

export default HeroBG
