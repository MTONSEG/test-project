import './Header.scss'
import Container from 'components/containers/Container/Container'
import Button from 'components/ui/buttons/Button/Button'
import { data } from 'dictionaries'
import Image from 'components/ui/images/Image/Image'
import logo from 'assets/images/logo.png'
import logoWebp from 'assets/images/logo.webp'
import { memo, useCallback } from 'react'
import { scrollTo } from 'utils/scrollTo'

const Header = memo(() => {
	const handleScroll = useCallback(scrollTo, [])

	return (
		<header className='header'>
			<Container>
				<div className='header__row'>
					<Image
						src={logo}
						webpSrc={logoWebp}
						width={104}
						height={28}
						alt='Logo'
					/>

					<div className='header__actions'>
						<Button
							className='header__btn'
							aria-label='Scroll to User List'
							onClick={() => {
								handleScroll('users-section')
							}}
						>
							{data.shared.users}
						</Button>
						<Button
							className='header__btn'
							aria-label='Scroll to Sign Up'
							onClick={() => {
								handleScroll('form-section')
							}}
						>
							{data.shared.signup}
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
})

export default Header
