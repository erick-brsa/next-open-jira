import { ChangeEvent, useMemo, useState } from "react"
import {
	capitalize,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormLabel,
	Grid,
	RadioGroup,
	Radio,
	TextField,
	FormControlLabel,
	IconButton
} from "@mui/material"

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

import { Layout } from "../../components/layouts"
import { EntryStatus } from "../../interfaces"

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"]

const EntryPage = () => {

	const [inputValue, setInputValue] = useState('')
	const [status, setStatus] = useState<EntryStatus>('pending')
	const [touched, setTouched] = useState(false)

	const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

	const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}

	const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value as EntryStatus)
	}

	const onSave = () => {

	}

	return (
		<Layout>
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader
							title={`Entrada: ${inputValue}`}
							subheader={`Creada hace: .... minutos`}
						/>
						<CardContent>
							<TextField
								sx={{ marginTop: 2, marginBottom: 1 }}
								fullWidth
								multiline
								value={inputValue}
								label="Nueva entrada"
								placeholder="Nueva Entrada"
								onChange={onTextFieldChanged}
								onBlur={() => setTouched(true)}
								helperText={isNotValid && 'Ingrese un valor'}
								error={isNotValid}
							/>
							{/* RADIO */}
							<FormControl>
								<FormLabel>Status</FormLabel>
								<RadioGroup 
									row
									value={status}
									onChange={onStatusChanged}	

								>
									{validStatus.map((option, i) => (
										<FormControlLabel
											key={i}
											value={option}
											control={<Radio />}
											label={capitalize(option)}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>
						<CardActions>
							<Button
								startIcon={<SaveOutlinedIcon />}
								variant="contained"
								fullWidth
								onClick={onSave}
								disabled={inputValue.length <= 0}
							>
								Guardar
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<IconButton 
				type='button'
				sx={{
				position: 'fixed',
				bottom: 30,
				right: 30,
				backgroundColor: 'error.dark'
			}}>
				<DeleteOutlinedIcon />
			</IconButton>
		</Layout>
	)
}

export default EntryPage
