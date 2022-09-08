import { ChangeEvent, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { useEntries, useUI } from '../../hooks';

export const NewEntry = () => {

	const { isAddingEntry, setIsAddingEntry } = useUI();
	const { createEntry } = useEntries();

	const [inputValue, setInputValue] = useState('');
	const [touched, setTouched] = useState(false);

	const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const onSave = () => {
		if (inputValue.length === 0) return;
		
		createEntry(inputValue);
		setIsAddingEntry(false);
		setInputValue('');
		setTouched(false);
	}

	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1}}
						autoFocus
						multiline
						label='Nueva entrada'
						helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
						color='secondary'
						error={inputValue.length <= 0 && touched}
						onChange={onTextFieldChanges}
						onBlur={() => setTouched(true)}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button
							type="button"
							color="secondary"
							onClick={() => setIsAddingEntry(false)}
						>
							Cancelar
						</Button>
						<Button
							variant="outlined"
							type="button"
							color="secondary"
							endIcon={ <SaveOutlinedIcon /> }
							onClick={onSave}
						>
							Gurdar
						</Button>
					</Box>
				</>
			): (
				<Button
					startIcon={ <AddCircleOutlineOutlinedIcon /> }
					color='secondary'
					variant='outlined'
					fullWidth
					onClick={() => setIsAddingEntry(true)}
				>
					Agregar Tarea
				</Button>
			)}
		</Box>
	)
}
