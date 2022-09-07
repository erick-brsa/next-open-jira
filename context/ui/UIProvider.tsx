import { FC, ReactNode, useReducer } from "react"
import { UIContext, uiReducer } from "./"

export interface UIState {
	sidemenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false
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

	return (
		<UIContext.Provider
			value={{
				...state,

				// Methos
				OpenSideMenu,
				CloseSideMenu
			}}
		>
			{children}
		</UIContext.Provider>
	)
}
