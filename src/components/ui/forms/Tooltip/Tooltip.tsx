import { FC } from 'react'
import './Tooltip.scss'

interface PropsType {
	text: string
}

const Tooltip: FC<PropsType> = ({ text }) => {
	return <div className='tooltip'>{text}</div>
}

export default Tooltip
