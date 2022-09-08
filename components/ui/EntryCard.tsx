import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { DragEvent, FC } from 'react';
import { useUI } from "../../hooks";

interface Props {
	entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

	const { startDragging, endDragging } = useUI();

	const onDragStart = (e: DragEvent) => {
		e.dataTransfer.setData('text', entry._id)
		startDragging();
		// TODO: Modificar el estado para indicar que estoy haciendo drag
	}

	const onDragEnd = () => {
		// TODO: Aquí se termina el drag
		endDragging();
	}
	
  	return (
		<Card sx={{ marginBottom: 1 }}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						{entry.description}
					</Typography>
					<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
						<Typography variant='body2'>Hace 30 minutos</Typography>
					</CardActions>
				</CardContent>
			</CardActionArea>
		</Card>
  	)
};