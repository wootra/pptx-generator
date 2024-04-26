import { useGeneratorUi } from '@/context/GeneratorUiContext';
import Button from '@/ui/Button';
import { IoText } from 'react-icons/io5';
import { FaRegPlusSquare } from 'react-icons/fa';
const AddTextButton = () => {
    const { addText } = useGeneratorUi();
    return (
        <div className='flex flex-row items-center gap-2'>
            <IoText className='border rounded-md border-slate-500 w-8 h-8 p-1' />
            <div className='flex-grow'></div>
            <Button onClick={addText}>
                <FaRegPlusSquare />
            </Button>
        </div>
    );
};

export default AddTextButton;
