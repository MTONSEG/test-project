import { IPositionData } from '../types/types'
import { instance } from './axios.config'

export const getPositions = async () => {
	try {
		const response = await instance.get<IPositionData>('/positions')

		return response.data
	} catch (error) {
		console.error('Failed fetching positions: ', error)
	}
}
