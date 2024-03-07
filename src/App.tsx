import Layout from 'components/containers/Layout/Layout'
import Form from 'components/sections/Form/Form'
import Hero from 'components/sections/Hero/Hero'
import Users from 'components/sections/Users/Users'

const App = () => {
	return <Layout>
		<Hero />
		<Users />
		<Form/>
	</Layout>
}

export default App
