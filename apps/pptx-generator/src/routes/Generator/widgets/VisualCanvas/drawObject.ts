import {
    ChartComponent,
    ImageComponent,
    PptxComponentBase,
    TextComponent,
} from '@/utils/pptx/types';
import { fillRect } from '@/routes/Generator/widgets/VisualCanvas/canvas-utils/fillRect';
import { strokeRect } from './canvas-utils/strokeRect';
import { setTextDefaultStyles } from './setTextDefaultStyles';
import { coordsToPx } from '@/routes/Generator/utils/unitConverter';

const cachedImg: Record<number, HTMLImageElement> = {};
export const deleteObjectCache = (id: number) => {
    if (cachedImg[id]) {
        delete cachedImg[id];
    }
};

export const drawObject = (
    ctx: CanvasRenderingContext2D,
    obj: PptxComponentBase,
    selected: number | null
) => {
    if (obj.type === 'text') {
        const txtObj = obj as TextComponent;
        const { x, y, w, h, fontSize, fill, color } = coordsToPx(txtObj.option);
        if (fill?.color) {
            fillRect(ctx, x, y, w, h, `#${fill?.color ?? '000000'}`);
        }
        setTextDefaultStyles(
            ctx,
            fontSize,
            'left',
            'top',
            `#${color ?? '000000'}`
        );
        if (w) {
            ctx.fillText(txtObj.data.text, x, y, w);
        } else {
            ctx.fillText(txtObj.data.text, x, y);
        }
    } else if (obj.type === 'chart') {
        const chartObj = obj as ChartComponent;
        const { x, y, w, h } = coordsToPx(chartObj.option);
        const { chartType } = chartObj.data;
        fillRect(ctx, x, y, w, h, '#ccc');
        setTextDefaultStyles(ctx, 16, 'center', 'middle', 'blue');
        ctx.fillText(`${chartType}:${chartObj.label}`, x + w / 2, y + h / 2);
        if (obj.id === selected) return;
        strokeRect(ctx, x, y, w, h, '#5c849c');
    } else if (obj.type === 'image') {
        const imageObj = obj as ImageComponent;
        const { x, y, w, h } = coordsToPx(imageObj.option);
        if (cachedImg[imageObj.id]) {
            ctx.drawImage(cachedImg[imageObj.id], x, y, w, h);
        } else {
            var image = new Image();
            image.onload = function () {
                ctx.drawImage(image, x, y, w, h);
                cachedImg[imageObj.id] = image;
            };
            image.src = imageObj.data.src;
        }
        if (obj.id === selected) return;
        strokeRect(ctx, x, y, w, h, '#5c849c');
    } else {
        console.error(
            'this type is not supported to draw in drawObject',
            obj.type
        );
    }
};
