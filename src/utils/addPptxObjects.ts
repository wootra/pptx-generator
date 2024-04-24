import PptxGenJS from 'pptxgenjs';
import { VisualLayers } from './types';

export const addPptxObjects = (
    slide: PptxGenJS.Slide,
    layers: VisualLayers
) => {
    layers.forEach(layer => {
        layer.adderInSlide(slide, layer);
    });
};
