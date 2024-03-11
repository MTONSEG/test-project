import { FC } from 'react'

interface PropsType {}

const Success:FC<PropsType> = ({...props}) => {
	return (
		<div className='success-form'></div>
	)
}

export default Success