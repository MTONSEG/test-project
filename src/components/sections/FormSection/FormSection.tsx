import './FormSection.scss'
import { data } from 'dictionaries'
import { Suspense, lazy, useContext } from 'react'
import { AppContext } from 'context/AppContext'
import Heading from 'components/ui/typography/Heading/Heading'
import Loading from 'components/ui/loaders/Loading/Loading'

const Form = lazy(() => import('components/sections/FormSection/Form/Form'))
const SuccessRegister = lazy(
	() =>
		import('components/sections/FormSection/SuccessRegister/SuccessRegister')
)

const FormSection = () => {
	const {
		state: { isRegister }
	} = useContext(AppContext)

	return (
		<section id='form-section' className='form'>
			<Heading
				text={isRegister ? data.form['success-register'] : data.form.title}
			/>

			<Suspense fallback={<Loading />}>
				{!isRegister ? <Form /> : <SuccessRegister />}
			</Suspense>
		</section>
	)
}

export default FormSection
