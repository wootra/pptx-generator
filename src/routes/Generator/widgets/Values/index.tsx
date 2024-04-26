import TextOptions from './TextOptions';
import ChartOptions from './ChartOptions';
import NumberField from '@/ui/NumberField';
import React from 'react';
import StringField from '@/ui/StringField';
import {
    ChartComponent,
    ImageComponent,
    PptxComponentBase,
    TextComponent,
} from '@/utils/pptx/types';
import { useVisualContainer } from '@/context/VisualContext';
import { useGeneratorUi } from '@/context/GeneratorUiContext';
import ImageOptions from './ImageOptions';
const render = (selectedLayer: PptxComponentBase) => {
    switch (selectedLayer.type) {
        case 'text':
            return (
                <TextOptions selectedLayer={selectedLayer as TextComponent} />
            );
        case 'image':
            return (
                <ImageOptions selectedLayer={selectedLayer as ImageComponent} />
            );
        case 'chart':
            return (
                <ChartOptions selectedLayer={selectedLayer as ChartComponent} />
            );
        default:
            return <div>Unandled Values: {selectedLayer.type}</div>;
    }
};
const Values = () => {
    const { refreshLayers } = useVisualContainer();
    const { selectedLayer } = useGeneratorUi();

    if (!selectedLayer)
        return (
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div>
                    <p>not selected.</p> <p>select one layer</p>
                </div>
            </div>
        );

    return (
        <div className='flex flex-col gap-2 px-2'>
            <NumberField label='id' value={selectedLayer.id} />
            <StringField
                label='label'
                value={selectedLayer.label}
                onChange={val => {
                    selectedLayer.label = val;
                    refreshLayers();
                }}
            />
            {render(selectedLayer)}
        </div>
    );
};

export default React.memo(Values);
