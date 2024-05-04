import { useGeneratorUi } from '@/context/GeneratorUiContext';
import Button from '@/ui/Button';
import { FaGear } from 'react-icons/fa6';

const ConfigButton = () => {
    const { isConfigShow, setIsConfigShow } = useGeneratorUi();
    return (
        <Button
            disabled={isConfigShow}
            onClick={() => setIsConfigShow(show => !show)}
        >
            <FaGear />
        </Button>
    );
};

export default ConfigButton;
