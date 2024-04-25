import {
    ChartComponent,
    TextComponent,
    VisualLayers,
} from '@/utils/pptx/types';
import { fillRect } from './canvas-utils/fillRect';
import { strokeRect } from './canvas-utils/strokeRect';
import { setTextDefaultStyles } from './setTextDefaultStyles';
import { coordsToPx } from '../utils/unitConverter';

export const drawLayers = (
    ctx: CanvasRenderingContext2D,
    layers: VisualLayers,
    selected: number | null
) => {
    layers.forEach(obj => {
        if (obj.type === 'text') {
            const txtObj = obj as TextComponent;
            const { x, y, w, h, fontSize, fill, color } = coordsToPx(
                txtObj.option
            );
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
            ctx.fillText(
                `${chartType}:${chartObj.label}`,
                x + w / 2,
                y + h / 2
            );
            if (obj.id === selected) return;
            strokeRect(ctx, x, y, w, h, '#5c849c');
        }
    });
};
