import PptxGenJS from 'pptxgenjs';
import { getNewId } from './storage';
import { ImageComponent } from '@/utils/pptx/types';

export const DEFAULT_IMG_OPT: PptxGenJS.ImageProps = {
    x: 1,
    y: 0.5,
    w: 4,
    h: 2,
};

export const createImageObj = (src: string, option?: PptxGenJS.ImageProps) => {
    const id = getNewId();
    return {
        id: id,
        type: 'image',
        label: `image ${id}`,
        data: {
            src,
        },
        option: {
            ...DEFAULT_IMG_OPT,
            ...option,
        },
    } as ImageComponent;
};
