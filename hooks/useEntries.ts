import { useContext } from 'react';
import { EntriesContext } from '../context';

export const useEntries = () => {
    return useContext(EntriesContext)
}