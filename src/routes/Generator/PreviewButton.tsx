import Button from '../../ui/Button';
import { useGeneratorUi } from './GeneratorUiContext';
import { LuPresentation } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';

const PreviewButton = () => {
    const { isCode, setIsCode } = useGeneratorUi();
    return (
        <Button onClick={() => setIsCode(state => !state)}>
            {isCode ? <LuPresentation /> : <FaCode />}
        </Button>
    );
};

export default PreviewButton;
