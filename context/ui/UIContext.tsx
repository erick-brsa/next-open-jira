import { createContext } from 'react';

interface ContextProps {
		sidemenuOpen: boolean;
		OpenSideMenu: () => void;
		CloseSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);