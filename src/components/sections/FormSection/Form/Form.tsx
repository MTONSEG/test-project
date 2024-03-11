import { yupResolver } from '@hookform/resolvers/yup'
import InputsForm from 'components/sections/FormSection/Form/InputsForm/InputsForm'
import RadiosForm from 'components/sections/FormSection/Form/RadioGroup/RadioGroup'
import { schemaValidation } from 'components/sections/FormSection/schemaValidation'
import Button from 'components/ui/buttons/Button/Button'
import UploadFile from 'components/ui/forms/UploadFile'
import Text from 'components/ui/typography/Text/Text'
import { AppContext } from 'context/AppContext'
import { data } from 'dictionaries'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { getPositions } from 'services/getPositions'
import { setUser } from 'services/setUser'
import { FormValues, IFormState } from 'types/types'

const Form = () => {
	// Getting the application state from the context
	const { state: appState, setState: setAppState } = useContext(AppContext)

	// Initializing the local form state
	const [state, setState] = useState<IFormState>({
		positions: [],
		photo: undefined,
		isErrorPhoto: false,
		errorMess: ''
	})

	// Fetch positions on component mount
	useEffect(() => {
		if (!state.positions.length)
			getPositions().then((res) => {
				const positions = [...(res?.positions ? res?.positions : [])]

				setState({ ...state, positions })
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Form validation and submission handling
	// Initializing form control methods using the react-hook-form library
	const methods = useForm<FormValues>({
		resolver: yupResolver(schemaValidation)
	})

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		if (!state.photo || state.isErrorPhoto) return

		const formData = new FormData()

		formData.append('name', data.name)
		formData.append('email', data.email)
		formData.append('phone', data.phone)
		formData.append('photo', state.photo)
		formData.append('position_id', data.position)

		await setUser(formData)
			.then((res) => {
				setAppState({
					...appState,
					currentPage: 1,
					isRegister: true
				})
			})
			.catch((error) => {
				if (error instanceof Error) {
					setState({ ...state, errorMess: error.message })
				}
			})
	}

	// Handle file upload and image validation
	const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
		// Checking for the presence of a file
		if (!e.target.files?.length) {
			setState({ ...state, photo: undefined })
			return
		}

		const photo: File = e.target.files[0]

		// Creating an Image object for image validation
		const image = new Image()

		image.src = URL.createObjectURL(photo)

		image.onload = () => {
			// File upload and image validation handler
			const isErrorPhoto =
				image.width >= 70 && image.height >= 70 && photo.size > 5 * 1024 * 1024

			// Setting the photo error and photo state
			setState({ ...state, isErrorPhoto, photo })
		}
	}

	return (
		<FormProvider {...methods}>
			<form className='form__wrap' onSubmit={methods.handleSubmit(onSubmit)}>
				{state.errorMess && (
					<Text className='form__error-text' color='red'>
						{state.errorMess}
					</Text>
				)}

				<div className='form__inputs-wrap'>
					<InputsForm />

					<RadiosForm positions={state.positions} />

					<UploadFile
						accept='image/jpeg, image/jpg'
						onChange={handleUpload}
						placeholder='Upload to photo'
						fileName={state.photo?.name}
						error={state.isErrorPhoto}
						errorMess={data.error['invalid-photo']}
					/>
				</div>

				<Button
					className='form__btn'
					type='submit'
					// disabled={
					// 	!methods.formState.isValid || !state.photo || state.isErrorPhoto
					// }
				>
					{data.shared.signup}
				</Button>
			</form>
		</FormProvider>
	)
}

export default Form
