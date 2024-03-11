import { yupResolver } from '@hookform/resolvers/yup'
import InputsForm from 'components/sections/FormSection/Form/InputsForm/InputsForm'
import RadiosForm from 'components/sections/FormSection/Form/RadioGroup/RadioGroup'
import { schemaValidation } from 'components/sections/FormSection/schemaValidation'
import Button from 'components/ui/buttons/Button/Button'
import UploadFile from 'components/ui/forms/UploadFile'
import { data } from 'dictionaries'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { getPositions } from 'services/getPositions'
import { setUser } from 'services/setUser'
import { FormValues, IPosition } from 'types/types'
import { prependPlus } from 'utils/prependPlus'

interface PropsType {}

const Form: FC<PropsType> = ({ ...props }) => {
		const [positions, setPositions] = useState<IPosition[]>([])
		const [photo, setPhoto] = useState<File | undefined>()
		const [photoError, setPhotoError] = useState<boolean>(false)

		useEffect(() => {
			getPositions().then((res) => {
				setPositions([...(res?.positions ? res.positions : [])])
			})
		}, [])

		const methods = useForm<FormValues>({
			resolver: yupResolver(schemaValidation)
		})

		const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
			if (!photo) {
				setPhotoError(true)
				return
			}

			if (photoError) return

			console.log(prependPlus(data.phone))

			const formData = new FormData()

			formData.append('name', data.name)
			formData.append('email', data.email)
			formData.append('phone', data.phone)
			formData.append('photo', photo)
			formData.append('position_id', data.position)

			setUser(formData)
				.then(() => {})
				.catch((e) => {
					console.error(e)
				})
		}

		const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
			if (!e.target.files?.length) {
				setPhoto(undefined)
				return
			}

			const file: File = e.target.files[0]

			setPhoto(e.target.files[0])

			const image = new Image()

			image.onload = () => {
				if (
					image.width >= 70 &&
					image.height >= 70 &&
					file.size <= 5 * 1024 * 1024
				) {
					photoError && setPhotoError(false)
				} else {
					setPhotoError(true)
				}
			}

			image.src = URL.createObjectURL(file)
		}
	return (
		<FormProvider {...methods}>
			<form className='form__wrap' onSubmit={methods.handleSubmit(onSubmit)}>
				<div className='form__inputs-wrap'>
					<InputsForm />

					<RadiosForm positions={positions} />

					<UploadFile
						accept='image/jpeg, image/jpg'
						onChange={handleUpload}
						placeholder='Upload to photo'
						fileName={photo?.name}
						error={photoError}
						errorMess={data.error['invalid-photo']}
					/>
				</div>
				<Button
					className='form__btn'
					type='submit'
					// disabled={!methods.formState.isValid || !photo || photoError}
				>
					{data.shared.signup}
				</Button>
			</form>
		</FormProvider>
	)
}

export default Form