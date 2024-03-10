import { FC, InputHTMLAttributes } from 'react'
import './UploadFile.scss'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'file'
	fileName?: string
	placeholder?: string
	label?: string
	error?: boolean
	errorMess?: string
}

const UploadFile: FC<PropsType> = ({
	type = 'file',
	placeholder = 'Upload file',
	fileName,
	label = 'Upload',
	error,
	errorMess = 'Error',
	...props
}) => {
	return (
		<label
			className={`upload-file ${fileName ? 'exist' : ''} ${
				error ? 'error' : ''
			}`}
		>
			<input type='file' className='upload-file__input' {...props} />

			<div className={`upload-file__custom`}>
				<p className='upload-file__custom-label'>{label}</p>
				<p className='upload-file__custom-text'>
					<span>{fileName ? fileName : placeholder}</span>
				</p>
			</div>

			{error && <p className='upload-file__error'>{errorMess}</p>}
		</label>
	)
}

export default UploadFile
