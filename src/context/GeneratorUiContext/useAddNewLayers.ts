import {
    createChartObj,
    getChartDefaultData,
} from '@/routes/Generator/utils/createChartObj';
import { createTextObj } from '@/routes/Generator/utils/createTextObj';
import { PptxComponentBase, VisualLayers } from '@/utils/pptx/types';
import { useCallback } from 'react';
import PptxGenJS from 'pptxgenjs';

export const useAddNewLayers = (
    setLayers: React.Dispatch<React.SetStateAction<VisualLayers>>,
    selectLayer: (id: number) => void
) => {
    const addNewLayer = useCallback(
        (layer: PptxComponentBase) => {
            setLayers(layers => [...layers, layer]);
            selectLayer?.(layer.id);
        },
        [setLayers]
    );
    const addText = useCallback(() => {
        addNewLayer(
            createTextObj('default text', {
                x: 1,
                y: 0.5,
                w: 8,
                h: 1,
                fontSize: 30,
            })
        );
    }, [addNewLayer]);

    const addChart = useCallback(
        (chartType: PptxGenJS.CHART_NAME) => {
            const defaultData = getChartDefaultData(chartType);
            if (defaultData) {
                addNewLayer(
                    createChartObj(defaultData, { x: 1, y: 1, w: 8, h: 3 })
                );
            } else {
                console.error(
                    'chart ' +
                        chartType +
                        ' is not available yet. need implementation in getChartDefaultData'
                );
            }
        },
        [addNewLayer]
    );

    return { addText, addChart };
};
