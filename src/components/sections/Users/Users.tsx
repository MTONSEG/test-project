import Heading from 'components/ui/typography/Heading/Heading'
import Container from '../../containers/Container/Container'
import './Users.scss'
import { data } from 'dictionaries'
import { memo, useContext, useEffect, useState } from 'react'
import { getUsers } from 'services/getUsers'
import Card from 'components/ui/cards/Card/Card'
import Button from 'components/ui/buttons/Button/Button'
import { AppContext } from 'context/AppContext'

const Users = memo(() => {
	const { state, setState } = useContext(AppContext)
	const { users, currentPage, userPerPage, isRegister } = state

	const [showBtn, setShowBtn] = useState<boolean>(true)

	const handleShow = () => {
		setState({ ...state, currentPage: currentPage + 1 })

		console.log(state)
	}

	useEffect(() => {
		getUsers(`count=${userPerPage}&page=${currentPage}`).then((res) => {
			if (currentPage === res?.total_pages) {
				setShowBtn(false)
			}

			const newUsers =
				currentPage === 1
					? [...(res?.users ? res.users : [])]
					: [...users, ...(res?.users ? res.users : [])]

			setState({
				...state,
				users: newUsers
			})
		})
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
		<section className='users'>
			<Container>
				<Heading text={data.users.title} />

				<ul className='users__list'>{users.length ? userList : <>Empty</>}</ul>

				{showBtn && (
					<Button
						onClick={handleShow}
						aria-label='Show more users'
						style={{ minWidth: '120px', margin: '0 auto' }}
					>
						{data.shared['show-more']}
					</Button>
				)}
			</Container>
		</section>
	)
})

export default Users
