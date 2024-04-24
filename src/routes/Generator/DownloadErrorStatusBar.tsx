import { useGeneratorUi } from "./GeneratorUiContext";

const DownloadErrorStatusBar = () => {
  const { downloadError } = useGeneratorUi();
  return downloadError && <div>{downloadError}</div>;
};

export default DownloadErrorStatusBar;
