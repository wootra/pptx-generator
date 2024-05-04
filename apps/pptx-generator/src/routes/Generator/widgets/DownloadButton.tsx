import { useGeneratorUi } from '@/context/GeneratorUiContext';
import Button from '@/ui/Button';

const DownloadButton = () => {
    const { isDownloading, onDownloadClick } = useGeneratorUi();
    return (
        <Button disabled={isDownloading} onClick={onDownloadClick}>
            Download
        </Button>
    );
};

export default DownloadButton;
