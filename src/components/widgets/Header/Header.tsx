import './Header.scss'
import Container from 'components/containers/Container/Container'
import Button from 'components/ui/buttons/Button/Button'
import { data } from 'dictionaries'
import Image from 'components/ui/images/Image/Image'
import logo from 'assets/images/logo.png'
import logoWebp from 'assets/images/logo.webp'

const Header = () => {
	return (
		<header className='header'>
			<Container>
				<div className='header__row'>
					<Image src={logo} webpSrc={logoWebp} width={104} height={28} alt='Logo' />

					<div className='header__actions'>
						<Button className='header__btn'>{data.shared.users}</Button>
						<Button className='header__btn'>{data.shared.signup}</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
