import {
    createContext,
    useState,
    PropsWithChildren,
    useCallback,
    useContext,
} from 'react';
import { useVisualContainer } from '../../context/VisualContext';

const useGeneratorUiHook = () => {
    const [isCode, setIsCode] = useState(false);
    const [isConfigShow, setIsConfigShow] = useState(false);
    const [fileName, setFileName] = useState('pptxgen-untitled');
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const { addText, addRadarChart, selected, download, code } =
        useVisualContainer();

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
        addText,
        addRadarChart,
        selected,
        code,
        isConfigShow,
        setIsConfigShow,
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
