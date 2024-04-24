import PptxGenJS from 'pptxgenjs';
import { VisualLayers } from './types';
import { addText } from './pptx/addText';
import { addRadarChart } from './pptx/addChart';
import { TextComponent } from './createTextObj';
import { ChartComponent } from './createChartObj';

export const addPptxObjects = (
    slide: PptxGenJS.Slide,
    layers: VisualLayers
) => {
    layers.forEach(layer => {
        if (layer.type === 'text') {
            const txtLayer = layer as TextComponent;
            addText(slide, txtLayer.data.text, txtLayer.option);
        } else if (layer.type === 'chart') {
            const chartLayer = layer as ChartComponent;
            if (chartLayer.data.chartType === 'radar') {
                addRadarChart(
                    slide,
                    chartLayer.data.chartData,
                    chartLayer.option
                );
            }
        }
    });
};
