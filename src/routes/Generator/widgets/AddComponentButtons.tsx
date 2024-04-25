import { useVisualContainer } from '@/context/VisualContext';
import Button from '@/ui/Button';
import DropDownField from '@/ui/DropDownField';
import { useState } from 'react';
import PptxGenJS from 'pptxgenjs';
import { FaRegPlusSquare } from 'react-icons/fa';
import { chartTypes } from '../utils/createChartObj';

const AddChartButton = () => {
    const { addChart } = useVisualContainer();
    const [selectedChart, setSelectedChart] =
        useState<PptxGenJS.CHART_NAME>('bar');

    return (
        <div className='flex flex-row'>
            <DropDownField
                selected={selectedChart as string}
                onChange={setSelectedChart as (v: string) => void}
                options={chartTypes}
            />
            <Button onClick={() => addChart(selectedChart)}>
                <FaRegPlusSquare />
            </Button>
        </div>
    );
};
const AddComponentButtons = () => {
    const { addText } = useVisualContainer();
    return (
        <>
            <Button onClick={addText}>add text</Button>
            <AddChartButton />
        </>
    );
};

export default AddComponentButtons;
