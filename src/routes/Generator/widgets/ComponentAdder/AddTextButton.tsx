import { useVisualContainer } from '@/context/VisualContext';
import Button from '@/ui/Button';

const AddTextButton = () => {
    const { addText } = useVisualContainer();
    return <Button onClick={addText}>add text</Button>;
};

export default AddTextButton;
