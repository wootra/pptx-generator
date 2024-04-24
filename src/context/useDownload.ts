import { useCallback } from "react";
import { VisualLayers } from "../utils/types";
import {
  addPptxObjects,
  generateFile,
  generateSlide,
} from "../utils/generatePptx";

export const useDownload = (layers: VisualLayers) => {
  return useCallback(
    (fileName: string) => {
      const { instance, slide } = generateSlide(null);
      addPptxObjects(slide, layers);
      return generateFile(instance, fileName);
    },
    [layers]
  );
};
