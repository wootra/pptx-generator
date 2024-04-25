import {
    createContext,
    useState,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
} from 'react';
import { useVisualContainer } from '../VisualContext';
import { useToggleSelected } from './useToggleSelected';

const useGeneratorUiHook = () => {
    const { download, layers } = useVisualContainer();
    const [isCode, setIsCode] = useState(false);
    const [isConfigShow, setIsConfigShow] = useState(false);
    const [fileName, setFileName] = useState('pptxgen-untitled');
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const { selected, toggleSelected, unselect } = useToggleSelected();
    const selectedLayer = useMemo(() => {
        return layers.find(l => l.id === selected);
    }, [layers, selected]);

    const onDownloadClick = useCallback(() => {
        setIsDownloading(true);
        setDownloadError('');
        download(fileName)
            .then(() => {
                setIsDownloading(false);
            })
            .catch((e: unknown) => {
                setDownloadError((e as Error).message);
            });
    }, [download, fileName]);

    return {
        isCode,
        setIsCode,
        fileName,
        setFileName,
        isDownloading,
        setIsDownloading,
        downloadError,
        setDownloadError,
        isCopied,
        setIsCopied,
        onDownloadClick,
        isConfigShow,
        setIsConfigShow,
        selected,
        unselect,
        toggleSelected,
        selectedLayer,
    };
};

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
