import { UIState } from './'

type UIActionType =
| { type: 'UI - OpenSidebar' }
| { type: 'UI - CloseSidebar' }
| { type: 'UI - Set isAddingEntry', payload: boolean }
| { type: 'UI - Start Dragging' }
| { type: 'UI - End Dragging' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case 'UI - OpenSidebar':
			return {
				...state,
				sidemenuOpen: true
			}
		case 'UI - CloseSidebar':
			return {
				...state,
				sidemenuOpen: false
			}
		case 'UI - Set isAddingEntry':
			return {
				...state,
				isAddingEntry: action.payload
			}
		case 'UI - Start Dragging':
			return {
				...state,
				isDragging: true
			}
		case 'UI - End Dragging':
			return {
				...state,
				isDragging: false
			}
		default: 
			return state; 
	}
}