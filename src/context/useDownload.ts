import { useCallback } from 'react';
import { VisualLayers } from '../utils/types';
import { generateFile, generateSlide } from '@/utils/pptx/generatePptx';
import { addPptxObjects } from '@/utils/addPptxObjects';

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
