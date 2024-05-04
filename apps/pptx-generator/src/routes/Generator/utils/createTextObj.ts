import PptxGenJS from 'pptxgenjs';
import { getNewId } from './storage';
import { TextComponent } from '@/utils/pptx/types';

export const DEFAULT_TEXT_OPT: PptxGenJS.TextPropsOptions = {
    x: 1,
    y: 0.5,
    w: 4,
    h: 2,
    fontSize: 36,
    align: 'center',
    fill: { color: 'D3E3F3' },
    color: '008899',
};

export const createTextObj = (
    text: string,
    option?: PptxGenJS.TextPropsOptions
) => {
    const id = getNewId();
    return {
        id: id,
        type: 'text',
        label: `text ${id}`,
        data: {
            text,
        },
        option: {
            ...DEFAULT_TEXT_OPT,
            ...option,
        },
    } as TextComponent;
};
