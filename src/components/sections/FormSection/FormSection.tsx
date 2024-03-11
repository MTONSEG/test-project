import './FormSection.scss'
import Container from '../../containers/Container/Container'
import Heading from 'components/ui/typography/Heading/Heading'
import { data } from 'dictionaries'
import Form from 'components/sections/FormSection/Form/Form'

const FormSection = () => {
	

	return (
		<section className='form'>
			<Container>
				<Heading text={data.form.title} />

				<Form />
			</Container>
		</section>
	)
}

export default FormSection
