import Button from '../../ui/Button';
import { useGeneratorUi } from './GeneratorUiContext';

const PreviewButton = () => {
    const { isCode, setIsCode } = useGeneratorUi();
    return (
        <Button onClick={() => setIsCode(state => !state)}>
            {isCode ? 'Preview' : 'Code'}
        </Button>
    );
};

export default PreviewButton;
