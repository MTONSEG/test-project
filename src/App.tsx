import Container from 'components/containers/Container/Container'
import Layout from 'components/containers/Layout/Layout'
import Loading from 'components/ui/loaders/Loading/Loading'
import { AppContext, appState } from 'context/AppContext'
import { Suspense, lazy, useState } from 'react'

const Users = lazy(() => import('components/sections/Users/Users'))
const Hero = lazy(() => import('components/sections/Hero/Hero'))
const FormSection = lazy(
	() => import('components/sections/FormSection/FormSection')
)

const App = () => {
	const [state, setState] = useState(appState)

	return (
		<Layout>
			<AppContext.Provider value={{ state, setState }}>
				<Suspense fallback={<Loading />}>
					<Hero />

					<Container>
						<Users />
						<FormSection />
					</Container>
				</Suspense>
			</AppContext.Provider>
		</Layout>
	)
}

export default App
