import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'

interface PropsType
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	src: string
	webpSrc?: string
	imgMob?: string
	webpMob?: string
	widthMob?: number
	imgTab?: string
	webpTab?: string
	widthTab?: number
}

const Image: FC<PropsType> = ({
	src,
	webpSrc,
	imgMob,
	webpMob,
	imgTab,
	webpTab,
	widthMob,
	widthTab,
	...props
}) => {

	const imageExt = src.slice(-7).split('.')[1]
	let type: string = 'image/' + imageExt

	if (imageExt !== 'png') {
		type = 'image/jpeg'
	}

	return (
		<picture>
			{imgMob ? (
				<>
					<source
						srcSet={webpMob}
						type='image/webp'
						media={`(max-width: ${widthMob}px)`}
					/>
					<source
						srcSet={imgMob}
						type={type}
						media={`(max-width: ${widthMob}px)`}
					/>
				</>
			) : (
				''
			)}
			{imgTab ? (
				<>
					<source
						srcSet={webpTab}
						type='image/webp'
						media={`(max-width: ${widthTab}px)`}
					/>
					<source
						srcSet={imgTab}
						type={type}
						media={`(max-width: ${widthTab}px)`}
					/>
				</>
			) : (
				''
			)}
			<source srcSet={webpSrc} type='image/webp' />
			<img src={src} {...props} alt={props.alt}/>
		</picture>
	)
}

export default Image
