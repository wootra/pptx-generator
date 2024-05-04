import { useCallback, useState } from 'react';
import { useCode } from './useCode';
import { useDownload } from './useDownload';
import { VisualLayers } from '@/utils/pptx/types';
import { deleteObjectCache } from '@/routes/Generator/widgets/VisualCanvas/drawObject';

export const useVisualContextGetSet = () => {
    const [layers, setLayers] = useState([] as VisualLayers);
    const refreshLayers = useCallback(() => {
        setLayers(l => [...l]);
    }, []);
    const deleteLayer = useCallback((id: number) => {
        setLayers(l => l.filter(layer => layer.id !== id));
        deleteObjectCache(id);
    }, []);

    const download = useDownload(layers);
    const code = useCode(layers);

    return {
        layers,
        deleteLayer,
        refreshLayers,
        setLayers,
        download,
        code,
    };
};
