export interface IToken {
	success: boolean
	token: string
}

export interface IUsersData {
	success: boolean
	page: number
	total_pages: number
	total_users: number
	count: number
	links: ILinks
	users: IUser[]
}

export interface ILinks {
	next_url: string
	prev_url: any
}

export interface IUser {
	id: string
	name: string
	email: string
	phone: string
	position: string
	position_id: string
	registration_timestamp: number
	photo: string
}

export interface IPositionData {
	success: boolean
	positions: IPosition[]
}

export interface IPosition {
	id: number
	name: string
}
