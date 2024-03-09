import './Form.scss'
import Container from '../../containers/Container/Container'
import Heading from 'components/ui/typography/Heading/Heading'
import { data } from 'dictionaries'
import Button from 'components/ui/buttons/Button/Button'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import InputsForm from 'components/sections/Form/InputsForm/InputsForm'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import RadiosForm from 'components/sections/Form/RadioGroup/RadioGroup'
import { ChangeEvent, useEffect, useState } from 'react'
import { getPositions } from 'services/getPositions'
import { IPosition } from 'types/types'
import { Input } from '@mui/material'
import UploadFile from 'components/ui/forms/UploadFile'

export interface FormValues {
	name: string
	phone: string
	email: string
	position: string
}

const Form = () => {
	const [positions, setPositions] = useState<IPosition[]>([])
	const [photo, setPhoto] = useState<File | null>(null)
	const [photoError, setPhotoError] = useState<boolean>(false)

	const schema = yup.object().shape({
		name: yup.string().required().min(2).max(60).required(),
		phone: yup
			.string()
			.required()
			.matches(
				/^[+]{0,1}380([0-9]{9})$/,
				'Invalid format. Example +380501234567'
			),
		email: yup
			.string()
			.required()
			.matches(
				// eslint-disable-next-line no-control-regex
				/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
				'email must be a valid email'
			),
		position: yup.string().required()
	})

	useEffect(() => {
		getPositions().then((res) => {
			setPositions([...(res?.positions ? res.positions : [])])
		})
	}, [])

	const methods = useForm<FormValues>({
		resolver: yupResolver(schema)
	})

	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		// if (!photo) {
		// 	setPhotoError(true)
		// 	return
		// }

		const body = {
			name: data.name,
			phone: data.phone,
			email: data.email,
			position: Number(data.position),
			photo
		}

		console.log(body);
		
	}

	const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) return

		const file: File = e.target.files[0]

		setPhoto(e.target.files[0])

		const image = new Image()

		image.onload = (e) => {
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
		<section className='form'>
			<Container>
				<Heading text={data.form.title} />
				<FormProvider {...methods}>
					<form
						className='form__wrap'
						onSubmit={methods.handleSubmit(onSubmit)}
					>
						<div className='form__inputs-wrap'>
							<InputsForm />

							<RadiosForm positions={positions} />

							<UploadFile
								accept='image/jpeg, image/jpg'
								onChange={handleUpload}
								required
							/>
						</div>
						<Button className='form__btn' type='submit'>
							{data.shared.signup}
						</Button>
					</form>
				</FormProvider>
			</Container>
		</section>
	)
}

export default Form
