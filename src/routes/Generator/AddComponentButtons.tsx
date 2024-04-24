import { useVisualContainer } from '@/context/VisualContext';
import Button from '../../ui/Button';

const AddComponentButtons = () => {
    const { addText, addRadarChart } = useVisualContainer();
    return (
        <>
            <Button onClick={addText}>add text</Button>
            <Button onClick={addRadarChart}>add radar chart</Button>
        </>
    );
};

export default AddComponentButtons;
