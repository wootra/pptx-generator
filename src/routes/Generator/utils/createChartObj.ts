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
export const getChartDefaultData = (chartType: PptxGenJS.CHART_NAME) => {
    let data: ChartDataType | undefined;

    switch (chartType) {
        case 'radar':
        case 'area':
        case 'bar':
        case 'bar3D':
        case 'bubble':
        case 'doughnut':
        case 'line':
        case 'pie':
        case 'scatter':
            data = {
                chartType,
                chartData: [
                    {
                        name: 'Region 1',
                        labels: ['May', 'June', 'July', 'August', 'September'],
                        values: [26, 53, 100, 75, 41],
                    },
                ],
            } as ChartDataType;
            break;
        default:
            console.error('Unknown chart type: ' + chartType);
            break;
    }
    return data;
};
