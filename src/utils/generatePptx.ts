import PptxGenJS from "pptxgenjs";
import { VisualLayers } from "./types";
import { TextComponent, addText } from "./addText";
import { ChartComponent, addRadarChart } from "./addChart";

export const addPptxObjects = (
  slide: PptxGenJS.Slide,
  layers: VisualLayers
) => {
  layers.forEach((layer) => {
    if (layer.type === "text") {
      const txtLayer = layer as TextComponent;
      addText(slide, txtLayer.data.text, txtLayer.option);
    } else if (layer.type === "chart") {
      const chartLayer = layer as ChartComponent;
      if (chartLayer.data.chartType === "radar") {
        addRadarChart(slide, chartLayer.data.chartData, chartLayer.option);
      }
    }
  });
};

export const generateSlide = (instance: PptxGenJS | null) => {
  const inst = instance ?? new PptxGenJS();

  return { instance: inst, slide: inst.addSlide() };
};

export const generateFile = async (instance: PptxGenJS, fileName: string) => {
  const fileNameWithExt = fileName.replace(".pptx", "").concat(".pptx");
  return await instance.writeFile({ fileName: fileNameWithExt });
};
