import { useVisualContainer } from '../../context/VisualContext';
import TextOptions from './TextOptions';
import { TextComponent } from '../../utils/addText';
import ChartOptions from './ChartOptions';
import NumberField from '../../ui/NumberField';
import { PptxComponentBase } from '../../utils/types';
import React from 'react';
import { ChartComponent } from '../../utils/addChart';
import StringField from '../../ui/StringField';
const render = (
    selectedLayer: PptxComponentBase,
    refreshLayers: () => void
) => {
    switch (selectedLayer.type) {
        case 'text':
            return (
                <TextOptions
                    selectedLayer={selectedLayer as TextComponent}
                    refreshLayers={refreshLayers}
                />
            );
        case 'chart':
            return (
                <ChartOptions
                    selectedLayer={selectedLayer as ChartComponent}
                    refreshLayers={refreshLayers}
                />
            );
        default:
            return <div>Values</div>;
    }
};
const Values = () => {
    const { selectedLayer, refreshLayers } = useVisualContainer();
    console.log('selected:', selectedLayer);

    if (!selectedLayer)
        return (
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div>
                    <p>not selected.</p> <p>select one layer</p>
                </div>
            </div>
        );

    return (
        <div className='flex flex-col gap-2'>
            <NumberField label='id' value={selectedLayer.id} />
            <StringField
                label='label'
                value={selectedLayer.label}
                onChange={val => {
                    selectedLayer.label = val;
                    refreshLayers();
                }}
            />
            {render(selectedLayer, refreshLayers)}
        </div>
    );
};

export default React.memo(Values);
