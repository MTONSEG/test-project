import { createContext } from 'react'
import type { IAppState } from 'types/types'

export const appState: IAppState = {
	users: [],
	userPerPage: 6,
	currentPage: 1,
	isRegister: false,
}

interface IAppContext {
	state: IAppState
	setState: (state: IAppState) => void
}

export const AppContext = createContext<IAppContext>({
	state: appState,
	setState: () => {}
})
