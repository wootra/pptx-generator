import PptxGenJS from 'pptxgenjs';
import {
    ChartComponent,
    PptxComponentBase,
    TextComponent,
    VisualLayers,
} from './types';
const adderInSlide = (slide: PptxGenJS.Slide, layer: PptxComponentBase) => {
    switch (layer.type) {
        case 'chart':
            const chartLayer = layer as ChartComponent;
            slide.addChart(
                chartLayer.data.chartType as PptxGenJS.CHART_NAME,
                chartLayer.data.chartData,
                chartLayer.option
            );
            break;
        case 'text':
            const textLayer = layer as TextComponent;
            slide.addText(textLayer.data.text, {
                ...textLayer.option,
            });
            break;
    }
};

export const addPptxObjects = (
    slide: PptxGenJS.Slide,
    layers: VisualLayers
) => {
    layers?.forEach(layer => {
        adderInSlide(slide, layer);
    });
};
