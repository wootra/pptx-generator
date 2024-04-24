import PptxGenJS from 'pptxgenjs';

export const addText = (
    slide: PptxGenJS.Slide,
    text: string,
    option?: PptxGenJS.TextPropsOptions
) => {
    slide.addText(text, {
        ...option,
    });
};
