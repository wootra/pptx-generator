import { ChartComponent } from '@/utils/pptx/types';
import StringArea from '../../../../ui/StringArea';
import ObjectOptions from './ObjectOptions';
import React from 'react';
import { useVisualContainer } from '@/context/VisualContext';
import DropDownField from '@/ui/DropDownField';
import PptxGenJS from 'pptxgenjs';
import { chartTypes } from '../../utils/createChartObj';

const ChartOptions = ({ selectedLayer }: { selectedLayer: ChartComponent }) => {
    const { refreshLayers } = useVisualContainer();
    return (
        <ul className='gap-1 flex flex-col'>
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
                <DropDownField
                    label='type'
                    options={chartTypes}
                    selected={selectedLayer.data.chartType as string}
                    onChange={selected => {
                        selectedLayer.data.chartType =
                            selected as PptxGenJS.CHART_NAME;
                        refreshLayers();
                    }}
                />
            </li>
            <ObjectOptions groupName='options' obj={selectedLayer.option} />
        </ul>
    );
};

export default React.memo(ChartOptions);
