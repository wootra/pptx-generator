import Button from '@/ui/Button';
import DropDownField from '@/ui/DropDownField';
import { useState } from 'react';
import PptxGenJS from 'pptxgenjs';
import { FaRegPlusSquare } from 'react-icons/fa';
import { chartTypes } from '@/routes/Generator/utils/createChartObj';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const AddChartButton = () => {
    const { addChart } = useGeneratorUi();
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
export default AddChartButton;
