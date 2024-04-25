import { useGeneratorUi } from '@/context/GeneratorUiContext';

const DownloadErrorStatusBar = () => {
    const { downloadError } = useGeneratorUi();
    return downloadError && <div>{downloadError}</div>;
};

export default DownloadErrorStatusBar;
