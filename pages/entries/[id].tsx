import { ChangeEvent, FC, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';

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
} from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from '../../components/layouts';
import { Entry, EntryStatus } from '../../interfaces';
import { getEntryById } from '../../database';
import { useEntries } from '../../hooks';
import { dateFunctions } from '../../utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
	entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {

	const { updateEntry } = useEntries()

	const [inputValue, setInputValue] = useState(entry.description);
	const [status, setStatus] = useState<EntryStatus>(entry.status);
	const [touched, setTouched] = useState(false);

	const isNotValid = useMemo(
		() => inputValue.length <= 0 && touched,
		[inputValue, touched]
	);

	const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value as EntryStatus);
	};

	const onSave = () => {
		if (inputValue.trim().length === 0) return;

		const updatedEntry: Entry = {
			...entry,
			status,
			description: inputValue
		}

		updateEntry(updatedEntry, true);
		
	};

	return (
		<Layout title={inputValue.substring(0,20) + '...'}>
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader
							title={`Entrada: ${inputValue}`}
							subheader={`Creada ${dateFunctions.getFormatDistanceToNow(entry.createdAt)}
						}`}
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
				type="button"
				sx={{
					position: 'fixed',
					bottom: 30,
					right: 30,
					backgroundColor: 'error.dark'
				}}
			>
				<DeleteOutlinedIcon />
			</IconButton>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };

	const entry = await getEntryById(id);

	if (!entry) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}

	return {
		props: {
			entry
		}
	};
};

export default EntryPage;
