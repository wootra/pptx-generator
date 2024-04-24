import Button from "../../ui/Button";
import { useGeneratorUi } from "./GeneratorUiContext";

const DownloadPreviewButtons = () => {
  const { isDownloading, isCode, onDownloadClick, setIsCode } =
    useGeneratorUi();
  return (
    <>
      <Button disabled={isDownloading} onClick={onDownloadClick}>
        download
      </Button>
      <Button onClick={() => setIsCode((state) => !state)}>
        {isCode ? "Preview" : "Code"}
      </Button>
    </>
  );
};

export default DownloadPreviewButtons;
