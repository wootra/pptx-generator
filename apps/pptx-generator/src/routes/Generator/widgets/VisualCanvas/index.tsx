import { useEffect, useRef, useState } from 'react';
import { drawLayers } from '@/routes/Generator/widgets/VisualCanvas/drawLayers';
import { drawSelected } from '@/routes/Generator/widgets/VisualCanvas/drawSelected';
import { useVisualContainer } from '@/context/VisualContext';
import { inchToPx, pxToInch } from '@/routes/Generator/utils/unitConverter';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const VisualCanvas = () => {
    const { layers, refreshLayers } = useVisualContainer();
    const { selected, selectedLayer } = useGeneratorUi();
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current;
        if (c) {
            const ctx = c.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, 1000, 563); // width: 10" , height: 5.63"
            drawLayers(ctx, layers, selected);
            drawSelected(ctx, selectedLayer);
        }
    }, [layers, selected, selectedLayer]);

    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState<[number, number]>([0, 0]);
    return (
        <canvas
            onMouseDown={e => {
                if (selectedLayer) {
                    setIsDragging(true);
                    setOffset([
                        e.clientX - inchToPx(selectedLayer.option.x),
                        e.clientY - inchToPx(selectedLayer.option.y),
                    ]);
                }
            }}
            onMouseMove={e => {
                if (isDragging && selectedLayer) {
                    const newX = e.clientX - offset[0];
                    const newY = e.clientY - offset[1];
                    selectedLayer.option.x = pxToInch(newX);
                    selectedLayer.option.y = pxToInch(newY);
                    refreshLayers();
                }
            }}
            onMouseUp={() => {
                if (isDragging) {
                    setIsDragging(false);
                }
            }}
            ref={ref}
            className='border border-gray-400 shadow-lg mx-auto'
            width={1000}
            height={560}
        />
    );
};

export default VisualCanvas;
