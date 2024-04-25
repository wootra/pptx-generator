import classNames from 'classnames';
import { IoIosCloseCircle } from 'react-icons/io';
import UpDownButton from './UpDownButton';
import { useVisualContainer } from '@/context/VisualContext';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const Layers = () => {
    const { layers, deleteLayer } = useVisualContainer();
    const { toggleSelected, selected } = useGeneratorUi();
    return (
        <ul>
            {layers.map(layer => (
                <li
                    className={classNames(
                        'flex flex-row items-center px-4 py-2 gap-2 ',
                        selected === layer.id
                            ? 'bg-pink-200 hover:bg-pink-300'
                            : 'hover:bg-green-200'
                    )}
                    key={layer.id}
                >
                    <button
                        className='flex-grow text-left select-none'
                        onClick={() => toggleSelected(layer.id)}
                    >
                        {layer.id}:{layer.label}
                    </button>
                    {selected === layer.id && (
                        <UpDownButton id={layer.id} className='text-blue-800' />
                    )}

                    <button
                        className='flex-grow-0'
                        key={layer.id}
                        onClick={e => {
                            e.stopPropagation();
                            e.preventDefault();
                            deleteLayer(layer.id);
                        }}
                    >
                        <IoIosCloseCircle className='text-red-800' />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Layers;
