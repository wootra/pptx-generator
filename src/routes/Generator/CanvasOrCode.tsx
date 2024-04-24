import Button from '../../ui/Button';
import VisualCanvas from './VisualCanvas';
import { useGeneratorUi } from './GeneratorUiContext';

const CanvasOrCode = () => {
    const { isCode, code } = useGeneratorUi();
    return isCode ? (
        <div className='border border-gray-100 h-full w-full overflow-y-auto relative'>
            <pre className='h-auto'>{code}</pre>
            <Button className='absolute right-2 top-2'>Copy</Button>
        </div>
    ) : (
        <VisualCanvas />
    );
};

export default CanvasOrCode;
