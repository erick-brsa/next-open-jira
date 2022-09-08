import { FC, ReactNode, useReducer } from "react"
import { UIContext, uiReducer } from "./"

export interface UIState {
	sidemenuOpen: boolean;
	isAddingEntry: boolean;
	isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
	isAddingEntry: false,
	isDragging: false,
}

interface Props {
	children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

	const OpenSideMenu = () => {
		dispatch({
			type: "UI - OpenSidebar"
		})
	}

	const CloseSideMenu = () => {
		dispatch({
			type: "UI - CloseSidebar"
		})
	}

	const setIsAddingEntry = (isAdding: boolean) => {
		dispatch({
			type: 'UI - Set isAddingEntry',
			payload: isAdding
		})
	}

	const startDragging = () => {
		dispatch({
			type: 'UI - Start Dragging'
		})
	}
	
	const endDragging = () => {
		dispatch({
			type: 'UI - End Dragging'
		})
	}

	return (
		<UIContext.Provider
			value={{
				...state,

				// Methos
				OpenSideMenu,
				CloseSideMenu,
				setIsAddingEntry,
				startDragging,
				endDragging,
			}}
		>
			{children}
		</UIContext.Provider>
	)
}
