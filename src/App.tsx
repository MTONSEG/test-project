import Layout from 'components/containers/Layout/Layout'
import FormSection from 'components/sections/FormSection/FormSection'
import Hero from 'components/sections/Hero/Hero'
import Users from 'components/sections/Users/Users'
import { AppContext, appState } from 'context/AppContext'
import {useState } from 'react'

const App = () => {
	const [state, setState] = useState(appState)

	return (
		<AppContext.Provider value={{ state, setState }}>
			<Layout>
				<Hero />
				<Users />
				<FormSection />
			</Layout>
		</AppContext.Provider>
	)
}

export default App
