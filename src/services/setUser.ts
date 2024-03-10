import { getToken } from 'services/getToken'
import { instance } from './axios.config'

export const setUser = async (body: FormData) => {
	try {
		getToken().then(async (res) => {
			console.log(res?.token);
			

			await instance.post(`/users`, body, {
				headers: {
					Token: res?.token
				}
			}).then((res) => {console.log(res);
			})
		})
	} catch (error) {
		console.error('Failed create user:', error)
	}
}
