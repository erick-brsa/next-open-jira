import { Entry } from '../../interfaces';
import { EntriesState } from './'

type EntriesActionType =
| { type: 'Entry - Create', payload: Entry }
| { type: 'Entry - Delete' }
| { type: 'Entry - Updated', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case 'Entry - Create':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case 'Entry - Updated':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }
        default: 
            return state; 
    }
}