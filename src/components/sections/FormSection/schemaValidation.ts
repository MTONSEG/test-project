import { data } from 'dictionaries'
import * as yup from 'yup'

const formRegex = {
	email:
		// eslint-disable-next-line no-control-regex
		/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
	phone: /^[+]{0,1}380([0-9]{9})$/
}

export const schemaValidation = yup.object().shape({
	name: yup.string().required().min(2).max(60).required(),
	phone: yup
		.string()
		.required()
		.matches(formRegex.phone, data.error['invalid-phone']),
	email: yup
		.string()
		.required()
		.matches(formRegex.email, data.error['invalid-email']),
	position: yup.string().required()
})
