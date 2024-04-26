import { useState, useCallback, useMemo, useEffect } from 'react';
import { useVisualContainer } from '../VisualContext';
import { useToggleSelected } from './useToggleSelected';

export const useGeneratorUiHook = () => {
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
    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                unselect();
            }
        };
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, []);

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
