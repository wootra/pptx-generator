import { useCallback } from 'react';
import { generateFile, generateSlide } from '@/utils/pptx/generatePptx';
import { VisualLayers } from '@/utils/pptx/types';
import { addPptxObjects } from '@/utils/pptx/addPptxObjects';

export const useDownload = (layers: VisualLayers) => {
    return useCallback(
        (fileName: string) => {
            const { instance, slide } = generateSlide(null);
            addPptxObjects(slide, layers);
            return generateFile(instance, fileName);
        },
        [layers]
    );
};
