import type { IToken } from '../types/types'
import { instance } from './axios.config'

export const getToken = async () => {
	try {
		const response = await instance.get<IToken>('/token')

		return response.data
	} catch (error) {
		console.error('Failed fetching token: ', error)
	}
}
