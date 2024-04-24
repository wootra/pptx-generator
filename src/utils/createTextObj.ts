import PptxGenJS from 'pptxgenjs';
import { getNewId } from './storage';
import { PptxComponent } from './types';
import { addText } from './pptx/addText';
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

export type TextComponent = PptxComponent<
    { text: string },
    PptxGenJS.TextBaseProps & Record<string, string | number>
>;

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
        adderInSlide: (slide: PptxGenJS.Slide, layer: TextComponent) => {
            addText(slide, layer.data.text, layer.option);
        },
    } as TextComponent;
};
