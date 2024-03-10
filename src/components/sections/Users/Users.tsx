import Heading from 'components/ui/typography/Heading/Heading'
import Container from '../../containers/Container/Container'
import './Users.scss'
import { data } from 'dictionaries'
import { useEffect, useState } from 'react'
import { IUser } from 'types/types'
import { getUsers } from 'services/getUsers'
import Card from 'components/ui/cards/Card/Card'
import Button from 'components/ui/buttons/Button/Button'

const Users = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [error, setError] = useState<boolean>(false)
	const [count] = useState<number>(6)
	const [page, setPage] = useState<number>(1)
	const [showBtn, setShowBtn] = useState<boolean>(true)

	const handleShow = () => {
		setPage((page) => page + 1)
	}

	useEffect(() => {
		getUsers(`count=${count}&page=${page}`)
			.then((res) => {
				if (error) setError(false)

				if (page === res?.total_pages) {
					setShowBtn(false)
				}

				setUsers([...users, ...(res?.users ? res.users : [])])
			})
			.catch((e) => {
				setError(true)
			})
	}, [page, count])

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
}

export default Users
