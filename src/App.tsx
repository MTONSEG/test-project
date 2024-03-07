import Layout from 'components/containers/Layout/Layout'
import Form from 'components/sections/Form/Form'
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
			<Form />
		</Layout>
	)
}

export default App
