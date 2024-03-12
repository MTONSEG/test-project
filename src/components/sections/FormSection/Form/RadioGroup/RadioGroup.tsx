import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup
} from '@mui/material'
import { data } from 'dictionaries'
import { FC } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import type { IPosition } from 'types/types'

interface PropsType {
	positions: IPosition[]
}

const RadiosForm: FC<PropsType> = ({ positions }) => {
	const { control } = useFormContext()

	return (
		<FormControl>
			<FormLabel>{data.form['radio-title']}</FormLabel>
			<Controller
				control={control}
				name='position'
				defaultValue={1}
				render={({ field }) => (
					<RadioGroup
						{...field}
						sx={{ margin: '0 0 47px' }}
						aria-label='Set work position'
					>
						{positions.map((el) => (
							<FormControlLabel
								value={el.id}
								control={<Radio color='secondary' />}
								label={el.name}
								key={el.id}
							/>
						))}
					</RadioGroup>
				)}
			/>
		</FormControl>
	)
}

export default RadiosForm
