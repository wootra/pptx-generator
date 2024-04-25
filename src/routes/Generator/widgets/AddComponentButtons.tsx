import { useVisualContainer } from '@/context/VisualContext';
import Button from '@/ui/Button';
import DropDownField, { DropDownFieldOption } from '@/ui/DropDownField';
import { useState } from 'react';
import PptxGenJS from 'pptxgenjs';
import { FaRegPlusSquare } from 'react-icons/fa';

const chartTypes: DropDownFieldOption<PptxGenJS.CHART_NAME>[] = [
    { label: 'area', value: 'area' },
    { label: 'bar', value: 'bar' },
    { label: 'bar3D', value: 'bar3D' },
    { label: 'bubble', value: 'bubble' },
    { label: 'doughnut', value: 'doughnut' },
    { label: 'line', value: 'line' },
    { label: 'pie', value: 'pie' },
    { label: 'radar', value: 'radar' },
    { label: 'scatter', value: 'scatter' },
];
const AddChartButton = () => {
    const { addChart } = useVisualContainer();
    const [selectedChart, setSelectedChart] = useState<
        DropDownFieldOption<PptxGenJS.CHART_NAME>
    >({
        label: 'bar',
        value: 'bar',
    });

    return (
        <div className='flex flex-row'>
            <DropDownField
                selected={
                    selectedChart as DropDownFieldOption<PptxGenJS.CHART_NAME>
                }
                onChange={setSelectedChart as (v: DropDownFieldOption) => void}
                options={chartTypes}
            />
            <Button onClick={() => addChart(selectedChart.value)}>
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
