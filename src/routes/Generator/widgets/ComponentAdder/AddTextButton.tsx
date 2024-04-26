import { useGeneratorUi } from '@/context/GeneratorUiContext';
import Button from '@/ui/Button';

const AddTextButton = () => {
    const { addText } = useGeneratorUi();
    return <Button onClick={addText}>add text</Button>;
};

export default AddTextButton;
