import './FormSection.scss'
import Container from '../../containers/Container/Container'
import Heading from 'components/ui/typography/Heading/Heading'
import { data } from 'dictionaries'
import Form from 'components/sections/FormSection/Form/Form'
import { useContext } from 'react'
import { AppContext } from 'context/AppContext'
import SuccessRegister from 'components/sections/FormSection/SuccessRegister/SuccessRegister'

const FormSection = () => {
	const {
		state: { isRegister }
	} = useContext(AppContext)

	return (
		<section className='form'>
			<Container>
				<Heading
					text={isRegister ? data.form['success-register'] : data.form.title}
				/>

				{!isRegister ? <Form /> : <SuccessRegister />}
			</Container>
		</section>
	)
}

export default FormSection
