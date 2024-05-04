import PptxGenJS from 'pptxgenjs';

export const generateSlide = (instance: PptxGenJS | null) => {
    const inst = instance ?? new PptxGenJS();

    return { instance: inst, slide: inst.addSlide() };
};

export const generateFile = async (instance: PptxGenJS, fileName: string) => {
    const fileNameWithExt = fileName.replace('.pptx', '').concat('.pptx');
    return await instance.writeFile({ fileName: fileNameWithExt });
};
