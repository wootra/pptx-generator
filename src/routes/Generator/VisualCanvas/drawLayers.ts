import { VisualLayers } from '@/utils/pptx/types';

import { drawObject } from './drawObject';

export const drawLayers = (
    ctx: CanvasRenderingContext2D,
    layers: VisualLayers,
    selected: number | null
) => {
    layers.forEach(obj => {
        drawObject(ctx, obj, selected);
    });
};
