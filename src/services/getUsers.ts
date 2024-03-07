import type { IUsersData } from '../types/types'
import { instance } from './axios.config'

export const getUsers = async (query = undefined) => {
	const currentQuery = query ? `?${query}` : ''

	try {
		const response = await instance.get<IUsersData>(`/users${currentQuery}`)

		return response.data
	} catch (error) {
		console.error('Error fetching users:', error)
	}
}
