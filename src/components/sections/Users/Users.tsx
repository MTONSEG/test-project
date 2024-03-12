import Heading from 'components/ui/typography/Heading/Heading'
import './Users.scss'
import { data } from 'dictionaries'
import { Suspense, memo, useContext, useEffect, useState } from 'react'
import { getUsers } from 'services/getUsers'
import Card from 'components/ui/cards/Card/Card'
import Button from 'components/ui/buttons/Button/Button'
import { AppContext } from 'context/AppContext'
import Loading from 'components/ui/loaders/Loading/Loading'

const Users = memo(() => {
	// Accessing the application context
	const { state, setState } = useContext(AppContext)
	// Destructuring state variables
	const { users, currentPage, userPerPage, isRegister, isShowBtn } = state

	const [loading, setLoading] = useState<boolean>(false)

	const handleShow = () => {
		setLoading(true)
		setState({ ...state, currentPage: currentPage + 1 })
	}

	useEffect(() => {
		getUsers(`count=${userPerPage}&page=${currentPage}`).then((res) => {
			// Updating the users state based on the fetched data
			const newUsers =
				currentPage === 1
					? [...(res?.users ? res.users : [])]
					: [...users, ...(res?.users ? res.users : [])]

			setState({
				...state,
				users: newUsers,
				isShowBtn: currentPage !== res?.total_pages
			})

			setLoading(false)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, isRegister])

	const userList = users?.map((el) => (
		<Card
			imageSrc={el.photo}
			email={el.email}
			phone={el.phone}
			name={el.name}
			position={el.position}
			key={el.id}
		/>
	))

	return (
		<section id='users-section' className='users'>
			<Heading text={data.users.title} />

			<Suspense fallback={<Loading />}>
				<ul className='users__list'>{users.length ? userList : <>Empty</>}</ul>
			</Suspense>

			{isShowBtn && (
				<Button
					onClick={handleShow}
					aria-label='Show more users'
					style={{ minWidth: '120px', margin: '0 auto' }}
					isLoading={loading}
				>
					{data.shared['show-more']}
				</Button>
			)}
		</section>
	)
})

export default Users
