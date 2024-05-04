import { useGeneratorUi } from '@/context/GeneratorUiContext';
import { IoMdClose } from 'react-icons/io';

const ConfigDialog = () => {
    const { isConfigShow, setIsConfigShow } = useGeneratorUi();
    const onClose = () => {
        setIsConfigShow(false);
    };
    return (
        <dialog
            open={isConfigShow}
            onClose={onClose}
            className='backdrop:bg-black drop-shadow-md min-w-[50vw] max-w-[calc(100vw-2rem)] min-h-[50vh] h-auto bg-slate-400'
        >
            <form
                method='dialog'
                className='flex flex-col gap-2 relative w-full h-full'
            >
                <h1 className=''>Config</h1>
                <button className='absolute w-8 h-8 right-2 top-2'>
                    <IoMdClose className='w-full h-full' />
                </button>
            </form>
        </dialog>
    );
};

export default ConfigDialog;
