import { Paper, List } from "@mui/material"
import { DragEvent, FC, useMemo } from "react"
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./EntryCard"
import { useEntries } from "../../hooks/useEntries"
import { useUI } from "../../hooks"
import styles from './EntryList.module.css'

interface Props {
	status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
	
	const { entries, updateEntry } = useEntries();
	const { isDragging, endDragging } = useUI();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);
	
	const onDropEntry = (e: DragEvent) => {
		const id = e.dataTransfer.getData('text');
	
		const entry = entries.find(e => e._id === id)!;
		entry.status = status;
		updateEntry(entry);
		endDragging();
	}

	const allowDrop = (e: DragEvent) => {
		e.preventDefault();
	}

	return (
		// TODO: Aquí haremos drop
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ''}
		>
			<Paper
				sx={{
					height: "calc(100vh - 180px)",
					overflow: "hidden",
					backgroundColor: "transparent",
					padding: "2px 10px"
				}}
			>
				{/* TODO: Cambiará dependiendo si estoy haciendo drag o no */}
				<List sx={{ opacity: isDragging ? 0.4 : 1, transition: 'all 0.2s' }}>
					{
						entriesByStatus.map(entry => (
							<EntryCard key={entry._id} entry={entry} />
						))
					}
				</List>
			</Paper>
		</div>
	)
}
