import { ChartComponent } from '@/utils/createChartObj';
import StringArea from '../../../ui/StringArea';
import ObjectOptions from './ObjectOptions';
import { useVisualContainer } from '@/context/VisualContext';
import React from 'react';

const ChartOptions = ({ selectedLayer }: { selectedLayer: ChartComponent }) => {
    const { refreshLayers } = useVisualContainer();
    return (
        <ul className='gap-1 flex flex-col gap-1'>
            <li>
                <StringArea
                    label='text'
                    value={JSON.stringify(
                        selectedLayer.data.chartData,
                        null,
                        4
                    )}
                    onChange={text => {
                        selectedLayer.data.chartData = JSON.parse(text);
                        refreshLayers();
                    }}
                />
            </li>
            <ObjectOptions groupName='options' obj={selectedLayer.option} />
        </ul>
    );
};

export default React.memo(ChartOptions);
