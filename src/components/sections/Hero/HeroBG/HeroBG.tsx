import { FC } from 'react'
import img from 'assets/images/hero/hero.jpeg'
import webp from 'assets/images/hero/hero.webp'
import imgTab from 'assets/images/hero/hero_768.jpg'
import webTab from 'assets/images/hero/hero_768.jpg'
import imgMob from 'assets/images/hero/hero_360.jpg'
import webMob from 'assets/images/hero/hero_360.jpg'
import Image from 'components/ui/images/Image/Image'

interface PropsType {}

const HeroBG: FC<PropsType> = () => {
	return (
		<Image
			className='hero__bg'
			src={img}
			webpSrc={webp}
			imgTab={imgTab}
			webpTab={webTab}
			widthTab={1024}
			imgMob={imgMob}
			webpMob={webMob}
			widthMob={480}
			width={1170}
			height={650}
			alt='Hero image step'
		/>
	)
}

export default HeroBG
