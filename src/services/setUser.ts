import { getToken } from 'services/getToken'
import { instance, AxiosErrorType } from './axios.config'

export const setUser = async (body: FormData) => {
	try {
		const token = (await getToken())?.token

		const data = await instance.post(`/users`, body, {
			headers: {
				Token: token
			}
		})

		return data
	} catch (error) {
		if (error instanceof AxiosErrorType) {
			throw new Error(error.response?.data.message)
		}

		throw new Error('Failed fetching data')
	}
}
