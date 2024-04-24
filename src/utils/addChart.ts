import PptxGenJS from "pptxgenjs";
import { PptxComponent } from "./types";
import { getNewId } from "./storage";
export type RadarChartType = {
  name: string; //Rigion name
  labels: string[];
  values: number[];
};

const chartTypes = PptxGenJS.ChartType;

export type ChartType = keyof typeof chartTypes;

export type ChartDataType = {
  chartType: ChartType;
  chartData: RadarChartType[];
};

const DefaultChartRect: PptxGenJS.IChartOpts = { x: 1, y: 1.9, w: 8, h: 3 };

export type ChartComponent = PptxComponent<ChartDataType, PptxGenJS.IChartOpts>;

export const addRadarChart = (
  slide: PptxGenJS.Slide,
  chartData: RadarChartType[],
  option?: PptxGenJS.IChartOpts
) => {
  slide.addChart("radar", chartData, {
    ...DefaultChartRect,
    ...option,
  });
};

export const createChartObj = (
  chartData: ChartDataType,
  option?: PptxGenJS.IChartOpts
) => {
  const id = getNewId();
  return {
    id,
    type: "chart",
    data: chartData,
    option: {
      ...DefaultChartRect,
      ...option,
    },
  } as ChartComponent;
};

export const DefaultChartRadar: ChartDataType = {
  chartType: "radar",
  chartData: [
    {
      name: "Region 1",
      labels: ["May", "June", "July", "August", "September"],
      values: [26, 53, 100, 75, 41],
    },
  ],
};
