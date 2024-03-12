import { createContext } from 'react'
import type { IAppState } from 'types/types'

export const appState: IAppState = {
	users: [],
	userPerPage: 6,
	currentPage: 1,
	isRegister: false,
	isShowBtn: true
}

interface IAppContext {
	state: IAppState
	setState: (state: IAppState) => void
}

export const AppContext = createContext<IAppContext>({
	state: appState,
	setState: () => {}
})

export const AppProvider = AppContext.Provider
