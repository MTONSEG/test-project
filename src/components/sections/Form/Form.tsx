import { FC, useState } from 'react'
import './Form.scss'
import Container from '../../containers/Container/Container'
import Heading from 'components/ui/typography/Heading/Heading'
import { data } from 'dictionaries'
import { Button, Input, TextField } from '@mui/material'

interface PropsType {}

const Form: FC<PropsType> = ({ ...props }) => {
	const [isNameError, setNameError] = useState<boolean>(false)
	const [isEmailError, setEmailError] = useState<boolean>(true)
	const [isPhoneError, setPhoneError] = useState<boolean>(false)

	const handleSubmit = () => {}

	return (
		<section className='form'>
			<Container>
				<Heading text={data.form.title} />

				<form className='form__field' onSubmit={handleSubmit}>
					<TextField
						name='Name'
						type='text'
						label={data.form['name-ph']}
						aria-label='Enter your name'
						error={isNameError}
					/>
					<TextField
						name='Email'
						type='email'
						label={data.form['email-ph']}
						aria-label='Enter your email'
						error={isEmailError}
					/>
					<TextField
						color='primary'
						name='Phone'
						type='tel'
						label={data.form['phone-ph']}
						aria-label='Enter your phone number'
						error={isPhoneError}
					/>

					<Button type='submit'>{data.shared.signup}</Button>
				</form>
			</Container>
		</section>
	)
}

export default Form
