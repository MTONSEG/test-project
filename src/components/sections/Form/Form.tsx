import { FC } from 'react'
import './Form.scss'
import Container from '../../containers/Container/Container'

interface PropsType {}

const Form: FC<PropsType> = ({ ...props }) => {
	return (
		<section className='form'>
			<Container>form</Container>
		</section>
	)
}

export default Form
