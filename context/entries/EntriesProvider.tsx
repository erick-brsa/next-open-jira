import { FC, ReactNode, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
        _id: uuidv4(),
        description: 'Pendiente: wserlkjgkjashdfbkasjdhfcg34kjashdfgwelkjwhr',
        status: 'pending',
        createdAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'En progreso: LÑKSHDFLKJ lksjhlkesr .aksdjfhlerkjh lskjhfgleksjr paush 4w',
        status: 'in-progress',
        createdAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'Finalizado: asdflkahe lasudfhqw elkjahsdfoiuwh rp48y ouw o384y 3ouigoaujdhfowuiegr lkasjdhf lsuehr',
        status: 'finished',
        createdAt: Date.now(),
    },
  ],
};

interface Props {
    children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const createEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }
    dispatch({
      type: 'Entry - Create',
      payload: newEntry
    })
  }
  const updateEntry = (entry: Entry) => {
    dispatch({
      type: 'Entry - Updated',
      payload: entry
    })
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        createEntry,
        updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  );
};