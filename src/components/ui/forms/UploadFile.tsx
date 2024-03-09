import { FC, InputHTMLAttributes } from 'react'
import './UploadFile.scss'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'file'
}

const UploadFile: FC<PropsType> = ({type = 'file', ...props }) => {
	return (
		<label className='upload-file'>
			<input type='file' className='upload-file__input' {...props}></input>
		</label>
	)
}

export default UploadFile
