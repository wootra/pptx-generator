import { ImageComponent } from '@/utils/pptx/types';
import ObjectOptions from './ObjectOptions';
import React from 'react';
import { useVisualContainer } from '@/context/VisualContext';
import ImageField from '@/ui/ImageField';

const ImageOptions = ({ selectedLayer }: { selectedLayer: ImageComponent }) => {
    const { refreshLayers } = useVisualContainer();
    return (
        <ul className='flex flex-col gap-1'>
            <li>
                <ImageField
                    label='src'
                    value={selectedLayer.data.src}
                    onChange={text => {
                        selectedLayer.data.src = text;
                        refreshLayers();
                    }}
                />
            </li>
            <ObjectOptions groupName='options' obj={selectedLayer.option} />
        </ul>
    );
};

export default React.memo(ImageOptions);
