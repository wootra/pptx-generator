import { TextComponent } from '@/utils/createTextObj';
import StringField from '../../../ui/StringField';
import ObjectOptions from './ObjectOptions';
import React from 'react';
import { useVisualContainer } from '@/context/VisualContext';

const TextOptions = ({ selectedLayer }: { selectedLayer: TextComponent }) => {
    const { refreshLayers } = useVisualContainer();
    return (
        <ul className='flex flex-col gap-1'>
            <li>
                <StringField
                    label='text'
                    value={selectedLayer.data.text}
                    onChange={text => {
                        selectedLayer.data.text = text;
                        refreshLayers();
                    }}
                />
            </li>
            <ObjectOptions groupName='options' obj={selectedLayer.option} />
        </ul>
    );
};

export default React.memo(TextOptions);
