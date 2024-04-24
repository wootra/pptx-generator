import { useCallback } from 'react';
import { VisualLayers } from '../utils/types';
import { createTextObj } from '@/utils/createTextObj';
import { DefaultChartRadar, createChartObj } from '@/utils/createChartObj';

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
