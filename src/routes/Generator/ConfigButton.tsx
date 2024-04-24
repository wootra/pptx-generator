import Button from '../../ui/Button';
import { useGeneratorUi } from './GeneratorUiContext';
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
