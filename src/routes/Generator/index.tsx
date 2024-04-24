import { GeneratorUiProvider } from "./GeneratorUiContext";
import DownloadPreviewButtons from "./DownloadPreviewButtons";
import FileNameField from "./FileNameField";
import DownloadErrorStatusBar from "./DownloadErrorStatusBar";
import AddComponentButtons from "./AddComponentButtons";
import CanvasOrCode from "./CanvasOrCode";
import LayersPanel from "./LayersPanel";
import ValuesPanel from "./ValuesPanel";

export const Generator = () => {
  return (
    <GeneratorUiProvider>
      <div className="flex flex-col w-full h-full bg-slate-100">
        <h1 className=" bg-slate-200 p-4 flex-grow-0 flex flex-row gap-4">
          <span className="flex-grow text-3xl font-extrabold text-teal-700">
            &lt; PPT Code generator /&gt;
          </span>

          <div className="text-right text-sm basis-auto flex-none flex flex-row justify-end items-center">
            <FileNameField />
          </div>
          <div className="flex flex-row gap-2 flex-grow-0 flex-shrink-0 basis-10">
            <DownloadPreviewButtons />
          </div>
        </h1>
        <DownloadErrorStatusBar />
        <div className="flex flex-row w-full h-[calc(100%-5rem)] flex-grow-0 flex-shrink">
          <ul className="basis-52 flex-none flex flex-col gap-2 p-4 bg-slate-200">
            <AddComponentButtons />
          </ul>
          <div className="flex-1 overflow-x-auto flex flex-col justify-center items-start h-full w-full">
            <CanvasOrCode />
          </div>
          <div className="w-56 flex-grow-0 flex flex-col bg-slate-200">
            <LayersPanel />
            <ValuesPanel />
          </div>
        </div>
      </div>
    </GeneratorUiProvider>
  );
};

export default Generator;
