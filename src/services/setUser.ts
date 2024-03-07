import { instance } from './axios.config'

interface IBody {
	name: string
	email: string
	phone: string
	position_id: string,
	photo: File
}

export const setUser = async <T>(body: IBody) => {
	try {
		const response = await instance.post<T>(`/users`, body)

		return response.data
	} catch (error) {
		console.error('Failed create user:', error)
	}
}
