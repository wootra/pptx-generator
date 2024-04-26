import { useCallback, useState } from 'react';

import { useCode } from './useCode';
import { useAddNewLayers } from './useAddNewLayers';
import { useMoveUpDown } from './useMoveUpDown';
import { useDownload } from './useDownload';
import { VisualLayers } from '@/utils/pptx/types';

export const useVisualContextGetSet = () => {
    const [layers, setLayers] = useState([] as VisualLayers);
    const refreshLayers = useCallback(() => {
        setLayers(l => [...l]);
    }, []);
    const deleteLayer = useCallback((id: number) => {
        setLayers(l => l.filter(layer => layer.id !== id));
    }, []);
    const addNewLayersObj = useAddNewLayers(setLayers);

    const { moveUp, moveDown } = useMoveUpDown(setLayers);

    const download = useDownload(layers);
    const code = useCode(layers);

    return {
        layers,
        ...addNewLayersObj,
        deleteLayer,
        refreshLayers,
        moveUp,
        moveDown,
        download,
        code,
    };
};
