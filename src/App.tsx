import Layout from 'components/containers/Layout/Layout'
import FormSection from 'components/sections/FormSection/FormSection'
import Hero from 'components/sections/Hero/Hero'
import Users from 'components/sections/Users/Users'
import { Suspense } from 'react'

const App = () => {
	

	return (
		<Layout>
			<Hero />
			<Suspense fallback={<p>loading</p>}>
				<Users />
			</Suspense>
			<FormSection />
		</Layout>
	)
}

export default App
