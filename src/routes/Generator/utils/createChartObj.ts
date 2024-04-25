import PptxGenJS from 'pptxgenjs';
import { getNewId } from './storage';
import { ChartComponent, ChartDataType } from '@/utils/pptx/types';

const DefaultChartRect: PptxGenJS.IChartOpts = { x: 1, y: 1.9, w: 8, h: 3 };

export const createChartObj = (
    chartData: ChartDataType,
    option?: PptxGenJS.IChartOpts
) => {
    const id = getNewId();
    return {
        id,
        label: `chart ${id}`,
        type: 'chart',
        data: chartData,
        option: {
            ...DefaultChartRect,
            ...option,
        },
    } as ChartComponent;
};

export const DefaultChartRadar: ChartDataType = {
    chartType: 'radar',
    chartData: [
        {
            name: 'Region 1',
            labels: ['May', 'June', 'July', 'August', 'September'],
            values: [26, 53, 100, 75, 41],
        },
    ],
};
