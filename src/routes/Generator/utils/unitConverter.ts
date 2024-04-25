import { Coords } from '@/utils/pptx/types';

const INCH_TO_PX = 100;

export const coordsToPx = <T extends Coords>(obj: T) => {
    return {
        ...obj,
        x: obj.x * INCH_TO_PX,
        y: obj.y * INCH_TO_PX,
        w: obj.w * INCH_TO_PX,
        h: obj.h * INCH_TO_PX,
    };
};

export const pxToCoords = <T extends Coords>(obj: T) => {
    return {
        ...obj,
        x: obj.x / INCH_TO_PX,
        y: obj.y / INCH_TO_PX,
        w: obj.w / INCH_TO_PX,
        h: obj.h / INCH_TO_PX,
    };
};

export const inchToPx = (inch: number) => {
    return inch * INCH_TO_PX;
};

export const pxToInch = (px: number) => {
    return px / INCH_TO_PX;
};
