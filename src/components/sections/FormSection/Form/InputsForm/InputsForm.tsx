import TextField from '@mui/material/TextField'
import { formRegex } from 'components/sections/FormSection/regex'
import { data } from 'dictionaries'
import { CSSProperties } from 'react'
import { useFormContext, Controller } from 'react-hook-form'

const InputsForm = () => {
	const {
		control,
		formState: { errors }
	} = useFormContext()

	const styles: CSSProperties = {
		margin: '0 0 50px'
	}

	return (
		<div className='form__inputs-wrap'>
			<Controller
				name='name'
				control={control}
				defaultValue=''
				rules={{
					required: data.error.required,
					maxLength: {
						value: 60,
						message: data.error['max-length-name']
					},
					minLength: {
						value: 2,
						message: data.error['min-length-name']
					}
				}}
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						type='text'
						label={data.form['name-ph']}
						error={!!errors.name}
						helperText={errors.name?.message as string}
						sx={styles}
					/>
				)}
			/>

			<Controller
				name='email'
				control={control}
				defaultValue=''
				rules={{
					required: data.error.required,
					pattern: {
						value: formRegex.email,
						message: data.error['invalid-email']
					}
				}}
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						type='email'
						label={data.form['email-ph']}
						error={!!errors.email}
						helperText={errors.email?.message as string}
						sx={styles}
					/>
				)}
			/>

			<Controller
				name='phone'
				control={control}
				defaultValue=''
				rules={{
					required: data.error.required,
					pattern: {
						value: formRegex.phone,
						message: data.error['invalid-phone']
					}
				}}
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						type='tel'
						label={data.form['phone-ph']}
						error={!!errors.phone}
						helperText={
							errors.phone
								? (errors.phone?.message as string)
								: '+38 (XXX) XXX - XX - XX'
						}
					/>
				)}
			/>
		</div>
	)
}

export default InputsForm
