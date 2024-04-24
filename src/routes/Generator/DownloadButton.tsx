import Button from '../../ui/Button';
import { useGeneratorUi } from './GeneratorUiContext';

const DownloadButton = () => {
    const { isDownloading, onDownloadClick } = useGeneratorUi();
    return (
        <Button disabled={isDownloading} onClick={onDownloadClick}>
            Download
        </Button>
    );
};

export default DownloadButton;
