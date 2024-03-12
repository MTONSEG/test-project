import './FormSection.scss'
import { data } from 'dictionaries'
import { useContext } from 'react'
import { AppContext } from 'context/AppContext'
import SuccessRegister from 'components/sections/FormSection/SuccessRegister/SuccessRegister'
import Heading from 'components/ui/typography/Heading/Heading'
import Form from 'components/sections/FormSection/Form/Form'


const FormSection = () => {
	const {
		state: { isRegister }
	} = useContext(AppContext)

	return (
		<section id='form-section' className='form'>
				<Heading
					text={isRegister ? data.form['success-register'] : data.form.title}
			/>
			
				{!isRegister ? <Form /> : <SuccessRegister />}
		</section>
	)
}

export default FormSection
