import {
    DefaultChartRadar,
    createChartObj,
} from '@/routes/Generator/utils/createChartObj';
import { createTextObj } from '@/routes/Generator/utils/createTextObj';
import { VisualLayers } from '@/utils/pptx/types';
import { useCallback } from 'react';

export const useAddNewLayers = (
    setLayers: React.Dispatch<React.SetStateAction<VisualLayers>>
) => {
    const addText = useCallback(() => {
        setLayers(layers => [
            ...layers,
            createTextObj('default text', {
                x: 1,
                y: 0.5,
                w: 8,
                h: 1,
                fontSize: 30,
            }),
        ]);
    }, [setLayers]);

    const addRadarChart = useCallback(() => {
        setLayers(layers => [
            ...layers,
            createChartObj(DefaultChartRadar, { x: 1, y: 1, w: 8, h: 3 }),
        ]);
    }, [setLayers]);

    return { addText, addRadarChart };
};
