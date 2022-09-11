import { FC, ReactNode, useReducer, useEffect } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { useSnackbar } from 'notistack'
import { entriesApi } from '../../config';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
    children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    refreshEntries();
  }, []);

  const refreshEntries = async () => {
    // No se pueden utilizar los modelos de mongoose en el front
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({
      type: 'Entry - Refresh Data',
      payload: data
    })
  }

  const createEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({
      type: 'Entry - Create',
      payload: data
    })
  }

  const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      
      dispatch({
        type: 'Entry - Updated',
        payload: data
      })

      if (showSnackbar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    } catch (error) {
      console.log({ error })
    }
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