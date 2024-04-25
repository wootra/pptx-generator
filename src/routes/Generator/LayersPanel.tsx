import UpDownButton from './Layers/UpDownButton';
import Layers from './Layers';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const LayersPanel = () => {
    const { selected } = useGeneratorUi();
    return (
        <div className='block h-[calc(50%-2rem)]'>
            <h2 className='bg-green-950 text-gray-400 px-2 flex flex-row'>
                <span className='flex-grow'>layers</span>
                <div className='flex-grow-0 flex flex-row gap-2'>
                    <UpDownButton id={selected} className='text-slate-100' />
                </div>
            </h2>
            <div className='overflow-y-auto h-full'>
                <Layers />
            </div>
        </div>
    );
};

export default LayersPanel;
