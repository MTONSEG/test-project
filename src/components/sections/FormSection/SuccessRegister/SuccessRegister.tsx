import Image from 'components/ui/images/Image/Image'
import img from 'assets/images/success-image.png'
import webp from 'assets/images/success-image.webp'

const SuccessRegister = () => {
	return (
		<div className='form__success-image-wrap'>
			<Image
				src={img}
				webpSrc={webp}
				className='form__success-image'
				width={328}
				height={290}
			/>
		</div>
	)
}

export default SuccessRegister
