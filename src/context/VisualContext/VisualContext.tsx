import { PropsWithChildren, createContext, useContext } from 'react';

import { useVisualContextGetSet } from './useVisualContextGetSet';

type VisualContextType = ReturnType<typeof useVisualContextGetSet>;

const VisualContext = createContext<VisualContextType>({} as VisualContextType);

export const VisualContainerProvider = ({ children }: PropsWithChildren) => {
    const providerValues = useVisualContextGetSet();

    return (
        <VisualContext.Provider value={providerValues}>
            {children}
        </VisualContext.Provider>
    );
};

export const useVisualContainer = () => {
    return useContext(VisualContext);
};
