import  TextField  from '@mui/material/TextField'
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
