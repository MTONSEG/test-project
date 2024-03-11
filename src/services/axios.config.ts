import axios, { AxiosError as AxiosErrorType } from 'axios'

export const instance = axios.create({
	baseURL: process.env.REACT_APP_HOST
})

export { AxiosErrorType }
