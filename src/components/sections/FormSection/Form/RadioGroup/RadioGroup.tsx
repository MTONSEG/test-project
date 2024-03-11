import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FC } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { IPosition } from 'types/types'

interface PropsType {
	positions: IPosition[]
}

const RadiosForm: FC<PropsType> = ({ positions }) => {
	const { control } = useFormContext()

	return (
		<>
			<Controller
				control={control}
				name='position'
				defaultValue={1}
				render={({ field }) => (
					<RadioGroup {...field}>

						{positions.map((el) => (
							<FormControlLabel
								value={el.id}
								control={<Radio />}
								label={el.name}
								key={el.id}
							/>
						))}
						
					</RadioGroup>
				)}
			/>
		</>
	)
}

export default RadiosForm
