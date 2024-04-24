import PptxGenJS from 'pptxgenjs';
export type RadarChartType = {
    name: string; //Rigion name
    labels: string[];
    values: number[];
};

export const addRadarChart = (
    slide: PptxGenJS.Slide,
    chartData: RadarChartType[],
    option?: PptxGenJS.IChartOpts
) => {
    slide.addChart('radar', chartData, {
        ...option,
    });
};
