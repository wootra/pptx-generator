import Button from '@/ui/Button';
import { LuPresentation } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const PreviewButton = () => {
    const { isCode, setIsCode } = useGeneratorUi();
    return (
        <Button onClick={() => setIsCode(state => !state)}>
            {isCode ? <LuPresentation /> : <FaCode />}
        </Button>
    );
};

export default PreviewButton;
