import { createContext, PropsWithChildren, useContext } from 'react';

import { useGeneratorUiHook } from './useGeneratorUiHook';

type GeneratorUiData = ReturnType<typeof useGeneratorUiHook>;

const GeneratorUiContext = createContext<GeneratorUiData>(
    {} as GeneratorUiData
);

export const GeneratorUiProvider = ({ children }: PropsWithChildren) => {
    const value = useGeneratorUiHook();
    return (
        <GeneratorUiContext.Provider value={value}>
            {children}
        </GeneratorUiContext.Provider>
    );
};

export const useGeneratorUi = () => {
    return useContext(GeneratorUiContext);
};
