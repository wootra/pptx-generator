import { useGeneratorUi } from '@/context/GeneratorUiContext';
import VisualCanvas from '@/routes/Generator/widgets/VisualCanvas';
import CodeView from './CodeView';

const CanvasOrCode = () => {
    const { isCode } = useGeneratorUi();

    return isCode ? <CodeView /> : <VisualCanvas />;
};

export default CanvasOrCode;
