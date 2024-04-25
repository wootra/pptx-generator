import { PptxComponentBase, TextComponent } from '@/utils/pptx/types';
import { coordsToPx } from '../../utils/unitConverter';
import { drawObject } from './drawObject';

export const drawSelected = (
    ctx: CanvasRenderingContext2D,
    selectedLayer?: PptxComponentBase
) => {
    if (selectedLayer) {
        drawObject(ctx, selectedLayer, null);
        const { x, y, w = 10, ...rest } = coordsToPx(selectedLayer.option);
        let h = rest.h;
        const fontSize = (selectedLayer as TextComponent).option.fontSize;
        if (!h && fontSize) {
            h = fontSize;
        }
        ctx.strokeStyle = 'red';
        ctx.setLineDash([1, 2]);
        ctx.strokeRect(x, y, w, h);
    }
};
