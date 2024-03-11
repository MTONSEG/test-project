import { TextField } from '@mui/material'
import { data } from 'dictionaries'
import { useFormContext, Controller } from 'react-hook-form'

const InputsForm = () => {
	const {
		control,
		formState: { errors }
	} = useFormContext()

	return (
		<>
			<Controller
				name='name'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						type='text'
						label={data.form['name-ph']}
						error={!!errors.name}
						helperText={errors.name?.message as string}
					/>
				)}
			/>

			<Controller
				name='email'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						fullWidth
						type='email'
						label={data.form['email-ph']}
						error={!!errors.email}
						helperText={errors.email?.message as string}
					/>
				)}
			/>

			<Controller
				name='phone'
				control={control}
				defaultValue=''
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
		</>
	)
}

export default InputsForm
